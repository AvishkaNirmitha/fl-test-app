import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AdminService } from 'src/app/services/admin.service';
import { JwtTokenValidatorService } from 'src/app/services/jwt-token-validator.service';
import { JwtService } from 'src/app/services/jwt.service';
import { LocalStorageHandleService } from 'src/app/services/local-storage-handle.service';
import { MsgHandelService } from 'src/app/services/msg-handel.service';
import { UserService } from 'src/app/services/user.service';
import {
  IS_ADMIN_AS_USER,
  USER_ROUTE,
  USER_IP,
  USER_PORT,
  USER_PROTOCOL,
} from 'src/assets/configs/localstorage.config';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  loading: boolean = false;
  routerSubscription: Subscription;
  displayError: any = { status: null };

  constructor(
    private router: ActivatedRoute,
    private _AdminService: AdminService,
    private _LocalStorageHandleService: LocalStorageHandleService,
    private _UserService: UserService,
    private _Router: Router,
    private _JwtTokenValidatorService: JwtTokenValidatorService,
    private _MsgHandelService: MsgHandelService,
    private _jwtService : JwtService
  ) {

  }
  ngOnInit(): void {
    this.routerSubscription = this.router.queryParams.subscribe((params) => {
      const userToken = params['userToken'];

      if (userToken) {
        window.localStorage.clear();
        this.verifyToken(userToken);
      }else{
        this._MsgHandelService.showErrorMsg("Warning!", "Token Not Found. Please try again")
      }
    });
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }

  verifyToken(userToken: string = '') {
    this.loading = true;
    this._LocalStorageHandleService.destroyAll();
    // verify user token
    this._AdminService
      .verifyToken({
        token: userToken,
      })
      .subscribe(
        (response) => {
          this.loading = false;

          if (response?.status) {
            // remove current local storage data
            this._LocalStorageHandleService.destroyAll();

            // store token`
            this._jwtService.saveToken(userToken);

            // get user by id
            this._UserService
              .getUserById(this._JwtTokenValidatorService.getLoggedUserId())
              .subscribe(
                (response) => {
                  if (response.status) {
                    this.loginUser(response);
                  }
                },
                (error) => {
                  console.log(error);
                  
                  this.loading = false;
                  this.displayError = { status: true };
                  this._MsgHandelService.handleError(error);
                }
              );
          }
        },
        (error) => {
          this.loading = false;

          this.displayError = { status: true };

          this._MsgHandelService.handleError(error);
        }
      );
  }

  loginUser(response : any) {
    // store referral code
    this._LocalStorageHandleService.saveItem({
      name: 'referral_code',
      value: response['data']['referral_code'],
    });

    this._LocalStorageHandleService.saveItem({
      name: "user_id",
      value: response["data"]["_id"],
    });

    // store Is admin as user status
    this._LocalStorageHandleService.saveItem({
      name: IS_ADMIN_AS_USER,
      value: true,
    });

    // show success message
    this._MsgHandelService.showSuccessMsg('', 'Successfully signed in');
    // load the dashboard
    this._Router.navigateByUrl('/dashboard');

    this.loading = false;
  }
}