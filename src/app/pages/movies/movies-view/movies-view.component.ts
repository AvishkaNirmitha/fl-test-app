import { Component } from "@angular/core";
import { MovieBookingModelComponent } from "../movie-booking-model/movie-booking-model.component";
import { MatDialog } from "@angular/material/dialog";
import { DashboardService } from "src/app/services/dashboard.service";
import { MsgHandelService } from "src/app/services/msg-handel.service";
import { TicketService } from "src/app/services/ticket.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-movies-view",
  templateUrl: "./movies-view.component.html",
  styleUrls: ["./movies-view.component.scss"],
})
export class MoviesViewComponent {
  loading: boolean = false;
  dataList: any = [];

  constructor(
    public dialog: MatDialog,
    private dashboardService: DashboardService,
    private msgHandelService: MsgHandelService,
    private ticketService: TicketService,
    private router: Router
  ) {
    const arr: any = [
      {
        id: "tt15334030",
        isAdult: false,
        canRateTitle: {
          isRatable: true,
        },
        originalTitleText: {
          text: "Martin",
        },
        primaryImage: {
          id: "rm2419589121",
          imageUrl:
            "https://m.media-amazon.com/images/M/MV5BZjY3MTk3YzQtYjBhMC00N2FkLThiOTMtOWI2NmIxMDFhMDZhXkEyXkFqcGc@._V1_.jpg",
          imageWidth: 1639,
          imageHeight: 2048,
        },
        ratingsSummary: {
          aggregateRating: 7.6,
          topRanking: null,
          voteCount: 31153,
        },
        releaseYear: {
          year: 2024,
          endYear: null,
        },
        titleEpisode: null,
        titleText: {
          text: "Martin",
        },
        titleType: {
          id: "movie",
          text: "Movie",
          displayableProperty: {
            value: {
              plainText: "",
            },
          },
          categories: [
            {
              id: "movie",
              text: "Movie",
              value: "movie",
            },
          ],
          canHaveEpisodes: false,
          isSeries: false,
          isEpisode: false,
        },
        series: null,
        watchOptionsByCategory: {
          categorizedWatchOptionsList: [],
        },
        latestTrailer: {
          id: "vi2830025753",
          contentType: {
            id: "amzn1.imdb.video.contenttype.trailer",
            displayName: {
              value: "Trailer",
            },
          },
          createdDate: "2023-02-23T13:45:42.380Z",
          description: {
            value: "",
          },
          primaryImage: {
            imageUrl:
              "https://m.media-amazon.com/images/M/MV5BNTMzMGE2NjQtNzg2ZS00MjlkLWJlNGUtZTcwMDNlZDRmNzUzXkEyXkFqcGdeQXRyYW5zY29kZS13b3JrZmxvdw@@._V1_.jpg",
            imageWidth: 1920,
            imageHeight: 1012,
          },
          primaryTitleFragment: {
            id: "tt15334030",
            isAdult: false,
            canRateTitle: {
              isRatable: true,
            },
            originalTitleText: {
              text: "Martin",
            },
            primaryImage: {
              id: "rm2419589121",
              imageUrl:
                "https://m.media-amazon.com/images/M/MV5BZjY3MTk3YzQtYjBhMC00N2FkLThiOTMtOWI2NmIxMDFhMDZhXkEyXkFqcGc@._V1_.jpg",
              imageWidth: 1639,
              imageHeight: 2048,
            },
            ratingsSummary: {
              aggregateRating: 7.6,
              topRanking: null,
              voteCount: 31153,
            },
            releaseYear: {
              year: 2024,
              endYear: null,
            },
            titleEpisode: null,
            titleText: {
              text: "Martin",
            },
            titleType: {
              id: "movie",
              text: "Movie",
              displayableProperty: {
                value: {
                  plainText: "",
                },
              },
              categories: [
                {
                  id: "movie",
                  text: "Movie",
                  value: "movie",
                },
              ],
              canHaveEpisodes: false,
              isSeries: false,
              isEpisode: false,
            },
            series: null,
          },
          name: {
            value: "Martin Teaser",
          },
          runtime: {
            unit: "SECONDS",
            value: 154,
          },
        },
        plot: {
          id: "po7126554",
          author: null,
          plotText: {
            plainText:
              "A journey of a man discovering himself, finding love and fighting for his motherland. Can he hold the fort on all three gates?",
          },
          correctionLink: {
            url: "https://m.imdb.com/title/tt15334030/contribution/plot/po7126554/edit",
          },
          reportingLink: {
            url: "https://m.imdb.com/title/tt15334030/contribution/plot/po7126554/report",
          },
        },
        releaseDate: {
          day: 11,
          month: 10,
          year: 2024,
          country: {
            id: "IN",
            text: "India",
          },
          restriction: null,
          releaseAttributes: [
            {
              text: "internet",
            },
          ],
        },
        titleCertificate: null,
        titleRuntime: {
          seconds: 8820,
          displayableProperty: {
            qualifiersInMarkdownList: null,
          },
        },
      },
      {
        id: "tt17526714",
        isAdult: false,
        canRateTitle: {
          isRatable: true,
        },
        originalTitleText: {
          text: "The Substance",
        },
        primaryImage: {
          id: "rm2243260161",
          imageUrl:
            "https://m.media-amazon.com/images/M/MV5BZDQ1NGE5MGMtYzdlZC00ODExLWJlMDMtNWU4NjA5OWYwMDEwXkEyXkFqcGc@._V1_.jpg",
          imageWidth: 1944,
          imageHeight: 2844,
        },
        ratingsSummary: {
          aggregateRating: 7.7,
          topRanking: {
            rank: 888,
          },
          voteCount: 54346,
        },
        releaseYear: {
          year: 2024,
          endYear: null,
        },
        titleEpisode: null,
        titleText: {
          text: "The Substance",
        },
        titleType: {
          id: "movie",
          text: "Movie",
          displayableProperty: {
            value: {
              plainText: "",
            },
          },
          categories: [
            {
              id: "movie",
              text: "Movie",
              value: "movie",
            },
          ],
          canHaveEpisodes: false,
          isSeries: false,
          isEpisode: false,
        },
        series: null,
        watchOptionsByCategory: {
          categorizedWatchOptionsList: [],
        },
        latestTrailer: {
          id: "vi2758919705",
          contentType: {
            id: "amzn1.imdb.video.contenttype.trailer",
            displayName: {
              value: "Trailer",
            },
          },
          createdDate: "2024-08-15T14:54:07.147Z",
          description: {
            value:
              "Elisabeth Sparkle is a former A-lister past her prime who is suddenly fired from her fitness TV show.\n\nShe is then drawn to the opportunity presented by a mysterious new drug: THE SUBSTANCE. All it takes is one injection and she is reborn -- temporarily -- as the gorgeous, twentysomething Sue. \n\nThe only rule? Time needs to be split: exactly one week in one body, then one week in the other. No exceptions. A perfect balance. What could go wrong?",
          },
          primaryImage: {
            imageUrl:
              "https://m.media-amazon.com/images/M/MV5BOTAyNTlhODUtZWI4MS00MTE0LWJlYzktNmViODlkZTg0NDUwXkEyXkFqcGdeQWFybm8@._V1_.jpg",
            imageWidth: 2247,
            imageHeight: 1264,
          },
          primaryTitleFragment: {
            id: "tt17526714",
            isAdult: false,
            canRateTitle: {
              isRatable: true,
            },
            originalTitleText: {
              text: "The Substance",
            },
            primaryImage: {
              id: "rm2243260161",
              imageUrl:
                "https://m.media-amazon.com/images/M/MV5BZDQ1NGE5MGMtYzdlZC00ODExLWJlMDMtNWU4NjA5OWYwMDEwXkEyXkFqcGc@._V1_.jpg",
              imageWidth: 1944,
              imageHeight: 2844,
            },
            ratingsSummary: {
              aggregateRating: 7.7,
              topRanking: {
                rank: 888,
              },
              voteCount: 54346,
            },
            releaseYear: {
              year: 2024,
              endYear: null,
            },
            titleEpisode: null,
            titleText: {
              text: "The Substance",
            },
            titleType: {
              id: "movie",
              text: "Movie",
              displayableProperty: {
                value: {
                  plainText: "",
                },
              },
              categories: [
                {
                  id: "movie",
                  text: "Movie",
                  value: "movie",
                },
              ],
              canHaveEpisodes: false,
              isSeries: false,
              isEpisode: false,
            },
            series: null,
          },
          name: {
            value: "Watch the Trailer",
          },
          runtime: {
            unit: "SECONDS",
            value: 151,
          },
        },
        plot: {
          id: "po7921659",
          author: null,
          plotText: {
            plainText:
              "A fading celebrity takes a black-market drug: a cell-replicating substance that temporarily creates a younger, better version of herself.",
          },
          correctionLink: {
            url: "https://m.imdb.com/title/tt17526714/contribution/plot/po7921659/edit",
          },
          reportingLink: {
            url: "https://m.imdb.com/title/tt17526714/contribution/plot/po7921659/report",
          },
        },
        releaseDate: {
          day: 20,
          month: 9,
          year: 2024,
          country: {
            id: "US",
            text: "United States",
          },
          restriction: null,
          releaseAttributes: [],
        },
        titleCertificate: {
          rating: "R",
          certificateCountry: {
            id: "US",
            text: "United States",
          },
          ratingReason:
            "Rated R for strong bloody violent content, gore, graphic nudity and language.",
        },
        titleRuntime: {
          seconds: 8460,
          displayableProperty: {
            qualifiersInMarkdownList: null,
          },
        },
      },
      {
        id: "tt6263850",
        isAdult: false,
        canRateTitle: {
          isRatable: true,
        },
        originalTitleText: {
          text: "Deadpool & Wolverine",
        },
        primaryImage: {
          id: "rm79129601",
          imageUrl:
            "https://m.media-amazon.com/images/M/MV5BZTk5ODY0MmQtMzA3Ni00NGY1LThiYzItZThiNjFiNDM4MTM3XkEyXkFqcGc@._V1_.jpg",
          imageWidth: 2025,
          imageHeight: 3000,
        },
        ratingsSummary: {
          aggregateRating: 7.8,
          topRanking: {
            rank: 665,
          },
          voteCount: 336057,
        },
        releaseYear: {
          year: 2024,
          endYear: null,
        },
        titleEpisode: null,
        titleText: {
          text: "Deadpool & Wolverine",
        },
        titleType: {
          id: "movie",
          text: "Movie",
          displayableProperty: {
            value: {
              plainText: "",
            },
          },
          categories: [
            {
              id: "movie",
              text: "Movie",
              value: "movie",
            },
          ],
          canHaveEpisodes: false,
          isSeries: false,
          isEpisode: false,
        },
        series: null,
        watchOptionsByCategory: {
          categorizedWatchOptionsList: [
            {
              watchOptions: [
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.prime_video",
                    categoryType: "RENT_OR_BUY",
                    description: null,
                    name: {
                      value: "Prime Video",
                    },
                    refTagFragment: "pvt_aiv",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/4c192978-331f-429e-9c97-02d5ed9d436e._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/b63dfed5-e4fa-434c-be14-d2dc2b60fbae._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Prime Video",
                  },
                  description: {
                    value: "rent/buy from $24.99",
                  },
                  shortDescription: {
                    value: "from $24.99",
                  },
                  link: "aiv://aiv/view?gti=amzn1.dv.gti.23706ed8-6289-4820-839f-a03c8cd9a2d0",
                },
              ],
            },
          ],
        },
        latestTrailer: {
          id: "vi320390681",
          contentType: {
            id: "amzn1.imdb.video.contenttype.trailer",
            displayName: {
              value: "Trailer",
            },
          },
          createdDate: "2024-07-19T14:35:51.113Z",
          description: {
            value:
              "Wolverine is recovering from his injuries when he crosses paths with the loudmouth Deadpool. They team up to defeat a common enemy.",
          },
          primaryImage: {
            imageUrl:
              "https://m.media-amazon.com/images/M/MV5BOTcxNzNmMzItYTk0ZC00YmM4LThhYTQtOTFhYzE4YjNkODhmXkEyXkFqcGdeQWpnYW1i._V1_.jpg",
            imageWidth: 1343,
            imageHeight: 755,
          },
          primaryTitleFragment: {
            id: "tt6263850",
            isAdult: false,
            canRateTitle: {
              isRatable: true,
            },
            originalTitleText: {
              text: "Deadpool & Wolverine",
            },
            primaryImage: {
              id: "rm79129601",
              imageUrl:
                "https://m.media-amazon.com/images/M/MV5BZTk5ODY0MmQtMzA3Ni00NGY1LThiYzItZThiNjFiNDM4MTM3XkEyXkFqcGc@._V1_.jpg",
              imageWidth: 2025,
              imageHeight: 3000,
            },
            ratingsSummary: {
              aggregateRating: 7.8,
              topRanking: {
                rank: 665,
              },
              voteCount: 336057,
            },
            releaseYear: {
              year: 2024,
              endYear: null,
            },
            titleEpisode: null,
            titleText: {
              text: "Deadpool & Wolverine",
            },
            titleType: {
              id: "movie",
              text: "Movie",
              displayableProperty: {
                value: {
                  plainText: "",
                },
              },
              categories: [
                {
                  id: "movie",
                  text: "Movie",
                  value: "movie",
                },
              ],
              canHaveEpisodes: false,
              isSeries: false,
              isEpisode: false,
            },
            series: null,
          },
          name: {
            value: "Final Trailer",
          },
          runtime: {
            unit: "SECONDS",
            value: 122,
          },
        },
        plot: {
          id: "po7762561",
          author: null,
          plotText: {
            plainText:
              "Deadpool is offered a place in the Marvel Cinematic Universe by the Time Variance Authority, but instead recruits a variant of Wolverine to save his universe from extinction.",
          },
          correctionLink: {
            url: "https://m.imdb.com/title/tt6263850/contribution/plot/po7762561/edit",
          },
          reportingLink: {
            url: "https://m.imdb.com/title/tt6263850/contribution/plot/po7762561/report",
          },
        },
        releaseDate: {
          day: 26,
          month: 7,
          year: 2024,
          country: {
            id: "US",
            text: "United States",
          },
          restriction: null,
          releaseAttributes: [],
        },
        titleCertificate: {
          rating: "R",
          certificateCountry: {
            id: "US",
            text: "United States",
          },
          ratingReason:
            "Rated R for strong bloody violence and language throughout, gore and sexual references.",
        },
        titleRuntime: {
          seconds: 7680,
          displayableProperty: {
            qualifiersInMarkdownList: null,
          },
        },
      },
      {
        id: "tt18412256",
        isAdult: false,
        canRateTitle: {
          isRatable: true,
        },
        originalTitleText: {
          text: "Alien: Romulus",
        },
        primaryImage: {
          id: "rm3993072385",
          imageUrl:
            "https://m.media-amazon.com/images/M/MV5BMDU0NjcwOGQtNjNjOS00NzQ3LWIwM2YtYWVmODZjMzQzN2ExXkEyXkFqcGc@._V1_.jpg",
          imageWidth: 2025,
          imageHeight: 3000,
        },
        ratingsSummary: {
          aggregateRating: 7.3,
          topRanking: {
            rank: 1793,
          },
          voteCount: 122035,
        },
        releaseYear: {
          year: 2024,
          endYear: null,
        },
        titleEpisode: null,
        titleText: {
          text: "Alien: Romulus",
        },
        titleType: {
          id: "movie",
          text: "Movie",
          displayableProperty: {
            value: {
              plainText: "",
            },
          },
          categories: [
            {
              id: "movie",
              text: "Movie",
              value: "movie",
            },
          ],
          canHaveEpisodes: false,
          isSeries: false,
          isEpisode: false,
        },
        series: null,
        watchOptionsByCategory: {
          categorizedWatchOptionsList: [
            {
              watchOptions: [
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.prime_video",
                    categoryType: "RENT_OR_BUY",
                    description: null,
                    name: {
                      value: "Prime Video",
                    },
                    refTagFragment: "pvt_aiv",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/4c192978-331f-429e-9c97-02d5ed9d436e._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/b63dfed5-e4fa-434c-be14-d2dc2b60fbae._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Prime Video",
                  },
                  description: {
                    value: "rent/buy from $24.99",
                  },
                  shortDescription: {
                    value: "from $24.99",
                  },
                  link: "aiv://aiv/view?gti=amzn1.dv.gti.46b52f02-4845-4ee3-89cb-fbf194250624",
                },
              ],
            },
          ],
        },
        latestTrailer: {
          id: "vi729007641",
          contentType: {
            id: "amzn1.imdb.video.contenttype.trailer",
            displayName: {
              value: "Trailer",
            },
          },
          createdDate: "2024-08-16T16:53:33.638Z",
          description: {
            value:
              "While scavenging the deep ends of a derelict space station, a group of young space colonists come face to face with the most terrifying life form in the universe.",
          },
          primaryImage: {
            imageUrl:
              "https://m.media-amazon.com/images/M/MV5BMGJkMDE5YjItODA1MC00YzVkLWE2NzQtODhiNzM0ZThmNjM4XkEyXkFqcGdeQXRyYW5zY29kZS13b3JrZmxvdw@@._V1_.jpg",
            imageWidth: 1920,
            imageHeight: 1080,
          },
          primaryTitleFragment: {
            id: "tt18412256",
            isAdult: false,
            canRateTitle: {
              isRatable: true,
            },
            originalTitleText: {
              text: "Alien: Romulus",
            },
            primaryImage: {
              id: "rm3993072385",
              imageUrl:
                "https://m.media-amazon.com/images/M/MV5BMDU0NjcwOGQtNjNjOS00NzQ3LWIwM2YtYWVmODZjMzQzN2ExXkEyXkFqcGc@._V1_.jpg",
              imageWidth: 2025,
              imageHeight: 3000,
            },
            ratingsSummary: {
              aggregateRating: 7.3,
              topRanking: {
                rank: 1793,
              },
              voteCount: 122035,
            },
            releaseYear: {
              year: 2024,
              endYear: null,
            },
            titleEpisode: null,
            titleText: {
              text: "Alien: Romulus",
            },
            titleType: {
              id: "movie",
              text: "Movie",
              displayableProperty: {
                value: {
                  plainText: "",
                },
              },
              categories: [
                {
                  id: "movie",
                  text: "Movie",
                  value: "movie",
                },
              ],
              canHaveEpisodes: false,
              isSeries: false,
              isEpisode: false,
            },
            series: null,
          },
          name: {
            value: "Official Trailer - Hulu",
          },
          runtime: {
            unit: "SECONDS",
            value: 31,
          },
        },
        plot: {
          id: "po7795380",
          author: null,
          plotText: {
            plainText:
              "While scavenging the deep ends of a derelict space station, a group of young space colonists come face to face with the most terrifying life form in the universe.",
          },
          correctionLink: {
            url: "https://m.imdb.com/title/tt18412256/contribution/plot/po7795380/edit",
          },
          reportingLink: {
            url: "https://m.imdb.com/title/tt18412256/contribution/plot/po7795380/report",
          },
        },
        releaseDate: {
          day: 16,
          month: 8,
          year: 2024,
          country: {
            id: "US",
            text: "United States",
          },
          restriction: null,
          releaseAttributes: [],
        },
        titleCertificate: {
          rating: "R",
          certificateCountry: {
            id: "US",
            text: "United States",
          },
          ratingReason: "Rated R for bloody violent content and language.",
        },
        titleRuntime: {
          seconds: 7140,
          displayableProperty: {
            qualifiersInMarkdownList: null,
          },
        },
      },
      {
        id: "tt26936666",
        isAdult: false,
        canRateTitle: {
          isRatable: true,
        },
        originalTitleText: {
          text: "Vettaiyan",
        },
        primaryImage: {
          id: "rm3353756161",
          imageUrl:
            "https://m.media-amazon.com/images/M/MV5BMjExZDc1MzUtNDc3Mi00NDcxLWFmYTAtYzI2MzhlMmE3YzBiXkEyXkFqcGc@._V1_.jpg",
          imageWidth: 1349,
          imageHeight: 2048,
        },
        ratingsSummary: {
          aggregateRating: 8.2,
          topRanking: null,
          voteCount: 26098,
        },
        releaseYear: {
          year: 2024,
          endYear: null,
        },
        titleEpisode: null,
        titleText: {
          text: "Vettaiyan",
        },
        titleType: {
          id: "movie",
          text: "Movie",
          displayableProperty: {
            value: {
              plainText: "",
            },
          },
          categories: [
            {
              id: "movie",
              text: "Movie",
              value: "movie",
            },
          ],
          canHaveEpisodes: false,
          isSeries: false,
          isEpisode: false,
        },
        series: null,
        watchOptionsByCategory: {
          categorizedWatchOptionsList: [],
        },
        latestTrailer: {
          id: "vi3141912089",
          contentType: {
            id: "amzn1.imdb.video.contenttype.trailer",
            displayName: {
              value: "Trailer",
            },
          },
          createdDate: "2024-10-03T03:00:53.180Z",
          description: {
            value: "",
          },
          primaryImage: {
            imageUrl:
              "https://m.media-amazon.com/images/M/MV5BZWYxNjMyMjQtZWIwZC00MTZjLTg2ODctMDY4ZmJkY2M2YTllXkEyXkFqcGdeQXRyYW5zY29kZS13b3JrZmxvdw@@._V1_.jpg",
            imageWidth: 1920,
            imageHeight: 804,
          },
          primaryTitleFragment: {
            id: "tt26936666",
            isAdult: false,
            canRateTitle: {
              isRatable: true,
            },
            originalTitleText: {
              text: "Vettaiyan",
            },
            primaryImage: {
              id: "rm3353756161",
              imageUrl:
                "https://m.media-amazon.com/images/M/MV5BMjExZDc1MzUtNDc3Mi00NDcxLWFmYTAtYzI2MzhlMmE3YzBiXkEyXkFqcGc@._V1_.jpg",
              imageWidth: 1349,
              imageHeight: 2048,
            },
            ratingsSummary: {
              aggregateRating: 8.2,
              topRanking: null,
              voteCount: 26098,
            },
            releaseYear: {
              year: 2024,
              endYear: null,
            },
            titleEpisode: null,
            titleText: {
              text: "Vettaiyan",
            },
            titleType: {
              id: "movie",
              text: "Movie",
              displayableProperty: {
                value: {
                  plainText: "",
                },
              },
              categories: [
                {
                  id: "movie",
                  text: "Movie",
                  value: "movie",
                },
              ],
              canHaveEpisodes: false,
              isSeries: false,
              isEpisode: false,
            },
            series: null,
          },
          name: {
            value: "Trailer [OV]",
          },
          runtime: {
            unit: "SECONDS",
            value: 160,
          },
        },
        plot: {
          id: "po7344249",
          author: null,
          plotText: {
            plainText:
              "Ruthless criminal activity is met with force from a maverick police officer with a disregard for the rules as he confronts an outbreak of lawlessness.",
          },
          correctionLink: {
            url: "https://m.imdb.com/title/tt26936666/contribution/plot/po7344249/edit",
          },
          reportingLink: {
            url: "https://m.imdb.com/title/tt26936666/contribution/plot/po7344249/report",
          },
        },
        releaseDate: {
          day: 10,
          month: 10,
          year: 2024,
          country: {
            id: "IN",
            text: "India",
          },
          restriction: null,
          releaseAttributes: [],
        },
        titleCertificate: null,
        titleRuntime: {
          seconds: 9780,
          displayableProperty: {
            qualifiersInMarkdownList: null,
          },
        },
      },
      {
        id: "tt15435876",
        isAdult: false,
        canRateTitle: {
          isRatable: true,
        },
        originalTitleText: {
          text: "The Penguin",
        },
        primaryImage: {
          id: "rm996501761",
          imageUrl:
            "https://m.media-amazon.com/images/M/MV5BYmU3MzYzOWEtOTdkZi00YzA1LTliMzQtNDdiZDBjY2FiNmFlXkEyXkFqcGc@._V1_.jpg",
          imageWidth: 1296,
          imageHeight: 1920,
        },
        ratingsSummary: {
          aggregateRating: 8.8,
          topRanking: {
            rank: 87,
          },
          voteCount: 36671,
        },
        releaseYear: {
          year: 2024,
          endYear: 2024,
        },
        titleEpisode: null,
        titleText: {
          text: "The Penguin",
        },
        titleType: {
          id: "tvMiniSeries",
          text: "TV Mini Series",
          displayableProperty: {
            value: {
              plainText: "TV Mini Series",
            },
          },
          categories: [
            {
              id: "tv",
              text: "TV",
              value: "tv",
            },
          ],
          canHaveEpisodes: true,
          isSeries: true,
          isEpisode: false,
        },
        series: null,
        watchOptionsByCategory: {
          categorizedWatchOptionsList: [
            {
              watchOptions: [
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.prime_video.hbomaxus",
                    categoryType: "SUBSCRIPTION",
                    description: {
                      value: "with Prime Video Channels",
                    },
                    name: {
                      value: "Max",
                    },
                    refTagFragment: "hbomax",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/3e152962-a236-46be-aa94-2a48296d7129._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/7cdcbf4e-6afe-4136-be75-cd6f2d237c63._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Max",
                  },
                  description: {
                    value: "S1 with Prime Video Channels",
                  },
                  shortDescription: {
                    value: "S1",
                  },
                  link: "aiv://aiv/view?gti=amzn1.dv.gti.79ba6406-5256-4a4c-bffd-153028791a11",
                },
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.hbo_max",
                    categoryType: "SUBSCRIPTION",
                    description: {
                      value: "with subscription",
                    },
                    name: {
                      value: "Max",
                    },
                    refTagFragment: "hbomax",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/7660eee6-3846-43e9-aadd-bff7846554fb._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/609ae2bb-6e79-45ae-bd76-75da3afac406._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Max",
                  },
                  description: {
                    value: "S1 with subscription",
                  },
                  shortDescription: {
                    value: "S1",
                  },
                  link: "https://play.max.com/show/5756c2bf-36f8-4890-b1f9-ef168f1d8e9c",
                },
              ],
            },
          ],
        },
        latestTrailer: {
          id: "vi1102432537",
          contentType: {
            id: "amzn1.imdb.video.contenttype.trailer",
            displayName: {
              value: "Trailer",
            },
          },
          createdDate: "2024-10-17T16:13:00.398Z",
          description: {
            value:
              "Following the events of The Batman, Oz Cobb, a.k.a. the Penguin, makes a play to seize the reins of the crime world in Gotham.",
          },
          primaryImage: {
            imageUrl:
              "https://m.media-amazon.com/images/M/MV5BZmY2MmY4ZjEtZWY1Mi00MmJkLTljNTAtMGUxNDgxZWUzOTY4XkEyXkFqcGdeQXRyYW5zY29kZS13b3JrZmxvdw@@._V1_.jpg",
            imageWidth: 1920,
            imageHeight: 1080,
          },
          primaryTitleFragment: {
            id: "tt15435876",
            isAdult: false,
            canRateTitle: {
              isRatable: true,
            },
            originalTitleText: {
              text: "The Penguin",
            },
            primaryImage: {
              id: "rm996501761",
              imageUrl:
                "https://m.media-amazon.com/images/M/MV5BYmU3MzYzOWEtOTdkZi00YzA1LTliMzQtNDdiZDBjY2FiNmFlXkEyXkFqcGc@._V1_.jpg",
              imageWidth: 1296,
              imageHeight: 1920,
            },
            ratingsSummary: {
              aggregateRating: 8.8,
              topRanking: {
                rank: 87,
              },
              voteCount: 36671,
            },
            releaseYear: {
              year: 2024,
              endYear: 2024,
            },
            titleEpisode: null,
            titleText: {
              text: "The Penguin",
            },
            titleType: {
              id: "tvMiniSeries",
              text: "TV Mini Series",
              displayableProperty: {
                value: {
                  plainText: "TV Mini Series",
                },
              },
              categories: [
                {
                  id: "tv",
                  text: "TV",
                  value: "tv",
                },
              ],
              canHaveEpisodes: true,
              isSeries: true,
              isEpisode: false,
            },
            series: null,
          },
          name: {
            value: "Mid-Season Weeks Ahead Trailer",
          },
          runtime: {
            unit: "SECONDS",
            value: 96,
          },
        },
        plot: {
          id: "po6486037",
          author: null,
          plotText: {
            plainText:
              "Following the events of The Batman (2022), Oz Cobb, a.k.a. the Penguin, makes a play to seize the reins of the crime world in Gotham.",
          },
          correctionLink: {
            url: "https://m.imdb.com/title/tt15435876/contribution/plot/po6486037/edit",
          },
          reportingLink: {
            url: "https://m.imdb.com/title/tt15435876/contribution/plot/po6486037/report",
          },
        },
        releaseDate: {
          day: 19,
          month: 9,
          year: 2024,
          country: {
            id: "US",
            text: "United States",
          },
          restriction: null,
          releaseAttributes: [],
        },
        titleCertificate: {
          rating: "TV-MA",
          certificateCountry: {
            id: "US",
            text: "United States",
          },
          ratingReason: null,
        },
        titleRuntime: null,
      },
      {
        id: "tt29623480",
        isAdult: false,
        canRateTitle: {
          isRatable: true,
        },
        originalTitleText: {
          text: "The Wild Robot",
        },
        primaryImage: {
          id: "rm4175327489",
          imageUrl:
            "https://m.media-amazon.com/images/M/MV5BZjM2M2E3YzAtZDJjYy00MDhkLThiYmItOGZhNzQ3NTgyZmI0XkEyXkFqcGc@._V1_.jpg",
          imageWidth: 3158,
          imageHeight: 5000,
        },
        ratingsSummary: {
          aggregateRating: 8.4,
          topRanking: {
            rank: 172,
          },
          voteCount: 25942,
        },
        releaseYear: {
          year: 2024,
          endYear: null,
        },
        titleEpisode: null,
        titleText: {
          text: "The Wild Robot",
        },
        titleType: {
          id: "movie",
          text: "Movie",
          displayableProperty: {
            value: {
              plainText: "",
            },
          },
          categories: [
            {
              id: "movie",
              text: "Movie",
              value: "movie",
            },
          ],
          canHaveEpisodes: false,
          isSeries: false,
          isEpisode: false,
        },
        series: null,
        watchOptionsByCategory: {
          categorizedWatchOptionsList: [
            {
              watchOptions: [
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.prime_video",
                    categoryType: "RENT_OR_BUY",
                    description: null,
                    name: {
                      value: "Prime Video",
                    },
                    refTagFragment: "pvt_aiv",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/4c192978-331f-429e-9c97-02d5ed9d436e._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/b63dfed5-e4fa-434c-be14-d2dc2b60fbae._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Prime Video",
                  },
                  description: {
                    value: "rent/buy from $24.99",
                  },
                  shortDescription: {
                    value: "from $24.99",
                  },
                  link: "aiv://aiv/view?gti=amzn1.dv.gti.21ee1ac6-e382-43f4-8939-0e76f98b6664",
                },
              ],
            },
          ],
        },
        latestTrailer: {
          id: "vi1164822041",
          contentType: {
            id: "amzn1.imdb.video.contenttype.trailer",
            displayName: {
              value: "Trailer",
            },
          },
          createdDate: "2024-09-10T15:09:05.550Z",
          description: {
            value:
              "After a shipwreck, an intelligent robot called Roz is stranded on an uninhabited island. To survive the harsh environment, Roz bonds with the island's animals and cares for an orphaned baby goose.",
          },
          primaryImage: {
            imageUrl:
              "https://m.media-amazon.com/images/M/MV5BNjkwNjVlZWMtYTdhZC00ZTNhLThkODUtM2IwYWRmMjRmMDM1XkEyXkFqcGdeQXNvbG5vbXM@._V1_.jpg",
            imageWidth: 1920,
            imageHeight: 1080,
          },
          primaryTitleFragment: {
            id: "tt29623480",
            isAdult: false,
            canRateTitle: {
              isRatable: true,
            },
            originalTitleText: {
              text: "The Wild Robot",
            },
            primaryImage: {
              id: "rm4175327489",
              imageUrl:
                "https://m.media-amazon.com/images/M/MV5BZjM2M2E3YzAtZDJjYy00MDhkLThiYmItOGZhNzQ3NTgyZmI0XkEyXkFqcGc@._V1_.jpg",
              imageWidth: 3158,
              imageHeight: 5000,
            },
            ratingsSummary: {
              aggregateRating: 8.4,
              topRanking: {
                rank: 172,
              },
              voteCount: 25942,
            },
            releaseYear: {
              year: 2024,
              endYear: null,
            },
            titleEpisode: null,
            titleText: {
              text: "The Wild Robot",
            },
            titleType: {
              id: "movie",
              text: "Movie",
              displayableProperty: {
                value: {
                  plainText: "",
                },
              },
              categories: [
                {
                  id: "movie",
                  text: "Movie",
                  value: "movie",
                },
              ],
              canHaveEpisodes: false,
              isSeries: false,
              isEpisode: false,
            },
            series: null,
          },
          name: {
            value: "Final Trailer",
          },
          runtime: {
            unit: "SECONDS",
            value: 142,
          },
        },
        plot: {
          id: "po7635059",
          author: null,
          plotText: {
            plainText:
              "After a shipwreck, an intelligent robot called Roz is stranded on an uninhabited island. To survive the harsh environment, Roz bonds with the island's animals and cares for an orphaned baby goose.",
          },
          correctionLink: {
            url: "https://m.imdb.com/title/tt29623480/contribution/plot/po7635059/edit",
          },
          reportingLink: {
            url: "https://m.imdb.com/title/tt29623480/contribution/plot/po7635059/report",
          },
        },
        releaseDate: {
          day: 27,
          month: 9,
          year: 2024,
          country: {
            id: "US",
            text: "United States",
          },
          restriction: null,
          releaseAttributes: [],
        },
        titleCertificate: {
          rating: "PG",
          certificateCountry: {
            id: "US",
            text: "United States",
          },
          ratingReason: "Rated PG for action/peril and thematic elements.",
        },
        titleRuntime: {
          seconds: 6120,
          displayableProperty: {
            qualifiersInMarkdownList: null,
          },
        },
      },
      {
        id: "tt26933824",
        isAdult: false,
        canRateTitle: {
          isRatable: true,
        },
        originalTitleText: {
          text: "Nobody Wants This",
        },
        primaryImage: {
          id: "rm2155900673",
          imageUrl:
            "https://m.media-amazon.com/images/M/MV5BNjAzMjEzYTQtM2M3Yi00ZGVjLWE1ODQtZTQzYTcxMjQ5N2Y4XkEyXkFqcGc@._V1_.jpg",
          imageWidth: 2500,
          imageHeight: 3702,
        },
        ratingsSummary: {
          aggregateRating: 8,
          topRanking: {
            rank: 809,
          },
          voteCount: 27131,
        },
        releaseYear: {
          year: 2024,
          endYear: null,
        },
        titleEpisode: null,
        titleText: {
          text: "Nobody Wants This",
        },
        titleType: {
          id: "tvSeries",
          text: "TV Series",
          displayableProperty: {
            value: {
              plainText: "TV Series",
            },
          },
          categories: [
            {
              id: "tv",
              text: "TV",
              value: "tv",
            },
          ],
          canHaveEpisodes: true,
          isSeries: true,
          isEpisode: false,
        },
        series: null,
        watchOptionsByCategory: {
          categorizedWatchOptionsList: [
            {
              watchOptions: [
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.netflix",
                    categoryType: "SUBSCRIPTION",
                    description: {
                      value: "with subscription",
                    },
                    name: {
                      value: "Netflix",
                    },
                    refTagFragment: "netflix",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/f409199e-794d-4822-acf9-38bca16baa5e._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/9516b142-0c88-4475-a39b-97c06546cdc5._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Netflix",
                  },
                  description: {
                    value: "S1 with subscription",
                  },
                  shortDescription: {
                    value: "S1",
                  },
                  link: "https://www.netflix.com/watch/81591296?source=imdb",
                },
              ],
            },
          ],
        },
        latestTrailer: {
          id: "vi174310937",
          contentType: {
            id: "amzn1.imdb.video.contenttype.trailer",
            displayName: {
              value: "Trailer",
            },
          },
          createdDate: "2024-08-31T13:05:19.771Z",
          description: {
            value: "Nobody Wants This",
          },
          primaryImage: {
            imageUrl:
              "https://m.media-amazon.com/images/M/MV5BNDU2NjVlMjMtNmYxNS00ZmRlLWJjMTYtMWVmMGIyOWIwMTYyXkEyXkFqcGdeQVRoaXJkUGFydHlJbmdlc3Rpb25Xb3JrZmxvdw@@._V1_.jpg",
            imageWidth: 1536,
            imageHeight: 864,
          },
          primaryTitleFragment: {
            id: "tt26933824",
            isAdult: false,
            canRateTitle: {
              isRatable: true,
            },
            originalTitleText: {
              text: "Nobody Wants This",
            },
            primaryImage: {
              id: "rm2155900673",
              imageUrl:
                "https://m.media-amazon.com/images/M/MV5BNjAzMjEzYTQtM2M3Yi00ZGVjLWE1ODQtZTQzYTcxMjQ5N2Y4XkEyXkFqcGc@._V1_.jpg",
              imageWidth: 2500,
              imageHeight: 3702,
            },
            ratingsSummary: {
              aggregateRating: 8,
              topRanking: {
                rank: 809,
              },
              voteCount: 27131,
            },
            releaseYear: {
              year: 2024,
              endYear: null,
            },
            titleEpisode: null,
            titleText: {
              text: "Nobody Wants This",
            },
            titleType: {
              id: "tvSeries",
              text: "TV Series",
              displayableProperty: {
                value: {
                  plainText: "TV Series",
                },
              },
              categories: [
                {
                  id: "tv",
                  text: "TV",
                  value: "tv",
                },
              ],
              canHaveEpisodes: true,
              isSeries: true,
              isEpisode: false,
            },
            series: null,
          },
          name: {
            value: "Nobody Wants This",
          },
          runtime: {
            unit: "SECONDS",
            value: 170,
          },
        },
        plot: {
          id: "po7125417",
          author: null,
          plotText: {
            plainText:
              "An agnostic sex podcaster and a newly single rabbi fall in love; discovering if their relationship survive their wildly different lives and meddling families.",
          },
          correctionLink: {
            url: "https://m.imdb.com/title/tt26933824/contribution/plot/po7125417/edit",
          },
          reportingLink: {
            url: "https://m.imdb.com/title/tt26933824/contribution/plot/po7125417/report",
          },
        },
        releaseDate: {
          day: 26,
          month: 9,
          year: 2024,
          country: {
            id: "US",
            text: "United States",
          },
          restriction: null,
          releaseAttributes: [
            {
              text: "internet",
            },
          ],
        },
        titleCertificate: {
          rating: "TV-MA",
          certificateCountry: {
            id: "US",
            text: "United States",
          },
          ratingReason: null,
        },
        titleRuntime: {
          seconds: 1800,
          displayableProperty: {
            qualifiersInMarkdownList: null,
          },
        },
      },
      {
        id: "tt22022452",
        isAdult: false,
        canRateTitle: {
          isRatable: true,
        },
        originalTitleText: {
          text: "Inside Out 2",
        },
        primaryImage: {
          id: "rm1568556801",
          imageUrl:
            "https://m.media-amazon.com/images/M/MV5BYWY3MDE2Y2UtOTE3Zi00MGUzLTg2MTItZjE1ZWVkMGVlODRmXkEyXkFqcGc@._V1_.jpg",
          imageWidth: 4050,
          imageHeight: 6000,
        },
        ratingsSummary: {
          aggregateRating: 7.6,
          topRanking: {
            rank: 987,
          },
          voteCount: 160652,
        },
        releaseYear: {
          year: 2024,
          endYear: null,
        },
        titleEpisode: null,
        titleText: {
          text: "Inside Out 2",
        },
        titleType: {
          id: "movie",
          text: "Movie",
          displayableProperty: {
            value: {
              plainText: "",
            },
          },
          categories: [
            {
              id: "movie",
              text: "Movie",
              value: "movie",
            },
          ],
          canHaveEpisodes: false,
          isSeries: false,
          isEpisode: false,
        },
        series: null,
        watchOptionsByCategory: {
          categorizedWatchOptionsList: [
            {
              watchOptions: [
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.prime_video",
                    categoryType: "RENT_OR_BUY",
                    description: null,
                    name: {
                      value: "Prime Video",
                    },
                    refTagFragment: "pvt_aiv",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/4c192978-331f-429e-9c97-02d5ed9d436e._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/b63dfed5-e4fa-434c-be14-d2dc2b60fbae._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Prime Video",
                  },
                  description: {
                    value: "rent from $5.99",
                  },
                  shortDescription: {
                    value: "from $5.99",
                  },
                  link: "aiv://aiv/view?gti=amzn1.dv.gti.f4ee6303-cda7-45df-bcbe-4d19dcb54f15",
                },
              ],
            },
          ],
        },
        latestTrailer: {
          id: "vi2848704025",
          contentType: {
            id: "amzn1.imdb.video.contenttype.trailer",
            displayName: {
              value: "Trailer",
            },
          },
          createdDate: "2024-06-04T18:05:23.206Z",
          description: {
            value:
              "Follow Riley, in her teenage years, encountering new emotions.",
          },
          primaryImage: {
            imageUrl:
              "https://m.media-amazon.com/images/M/MV5BZTQ0ZTIxNTAtYTlkNS00YzIyLTk4MDUtY2RhNWFmZTQwMDUwXkEyXkFqcGdeQWRpZWdtb25n._V1_.jpg",
            imageWidth: 1920,
            imageHeight: 1080,
          },
          primaryTitleFragment: {
            id: "tt22022452",
            isAdult: false,
            canRateTitle: {
              isRatable: true,
            },
            originalTitleText: {
              text: "Inside Out 2",
            },
            primaryImage: {
              id: "rm1568556801",
              imageUrl:
                "https://m.media-amazon.com/images/M/MV5BYWY3MDE2Y2UtOTE3Zi00MGUzLTg2MTItZjE1ZWVkMGVlODRmXkEyXkFqcGc@._V1_.jpg",
              imageWidth: 4050,
              imageHeight: 6000,
            },
            ratingsSummary: {
              aggregateRating: 7.6,
              topRanking: {
                rank: 987,
              },
              voteCount: 160652,
            },
            releaseYear: {
              year: 2024,
              endYear: null,
            },
            titleEpisode: null,
            titleText: {
              text: "Inside Out 2",
            },
            titleType: {
              id: "movie",
              text: "Movie",
              displayableProperty: {
                value: {
                  plainText: "",
                },
              },
              categories: [
                {
                  id: "movie",
                  text: "Movie",
                  value: "movie",
                },
              ],
              canHaveEpisodes: false,
              isSeries: false,
              isEpisode: false,
            },
            series: null,
          },
          name: {
            value: "Final Trailer",
          },
          runtime: {
            unit: "SECONDS",
            value: 89,
          },
        },
        plot: {
          id: "po6808995",
          author: null,
          plotText: {
            plainText:
              "A sequel that features Riley entering puberty and experiencing brand new, more complex emotions as a result. As Riley tries to adapt to her teenage years, her old emotions try to adapt to the possibility of being replaced.",
          },
          correctionLink: {
            url: "https://m.imdb.com/title/tt22022452/contribution/plot/po6808995/edit",
          },
          reportingLink: {
            url: "https://m.imdb.com/title/tt22022452/contribution/plot/po6808995/report",
          },
        },
        releaseDate: {
          day: 14,
          month: 6,
          year: 2024,
          country: {
            id: "US",
            text: "United States",
          },
          restriction: null,
          releaseAttributes: [],
        },
        titleCertificate: {
          rating: "PG",
          certificateCountry: {
            id: "US",
            text: "United States",
          },
          ratingReason: "Rated PG for some thematic elements.",
        },
        titleRuntime: {
          seconds: 5760,
          displayableProperty: {
            qualifiersInMarkdownList: null,
          },
        },
      },
      {
        id: "tt14527626",
        isAdult: false,
        canRateTitle: {
          isRatable: true,
        },
        originalTitleText: {
          text: "The Edge of Sleep",
        },
        primaryImage: {
          id: "rm3443161857",
          imageUrl:
            "https://m.media-amazon.com/images/M/MV5BNWE5Njg3NjctZjY0MS00OTkxLWEzMjctNDg0MDUxZGQxY2Q3XkEyXkFqcGc@._V1_.jpg",
          imageWidth: 380,
          imageHeight: 562,
        },
        ratingsSummary: {
          aggregateRating: 8.4,
          topRanking: null,
          voteCount: 4447,
        },
        releaseYear: {
          year: 2024,
          endYear: null,
        },
        titleEpisode: null,
        titleText: {
          text: "The Edge of Sleep",
        },
        titleType: {
          id: "tvSeries",
          text: "TV Series",
          displayableProperty: {
            value: {
              plainText: "TV Series",
            },
          },
          categories: [
            {
              id: "tv",
              text: "TV",
              value: "tv",
            },
          ],
          canHaveEpisodes: true,
          isSeries: true,
          isEpisode: false,
        },
        series: null,
        watchOptionsByCategory: {
          categorizedWatchOptionsList: [
            {
              watchOptions: [
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.prime_video.PRIME",
                    categoryType: "SUBSCRIPTION",
                    description: {
                      value: "included with Prime",
                    },
                    name: {
                      value: "Prime Video",
                    },
                    refTagFragment: "pvs_piv",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/e062ea53-945a-42cb-8d15-6405531687ec._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/75f35a85-7a6e-4f1f-bf8b-e4c8556bc4e4._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Prime Video",
                  },
                  description: {
                    value: "S1 included with Prime",
                  },
                  shortDescription: {
                    value: "S1",
                  },
                  link: "aiv://aiv/resume?gti=amzn1.dv.gti.3d514f07-5b97-499a-a0d8-38d4dbd05ed6",
                },
              ],
            },
          ],
        },
        latestTrailer: null,
        plot: {
          id: "po5851357",
          author: null,
          plotText: {
            plainText:
              "Follow a night watchman who finishes his shift at work to discover that everyone in the world who went to sleep the previous night has died.",
          },
          correctionLink: {
            url: "https://m.imdb.com/title/tt14527626/contribution/plot/po5851357/edit",
          },
          reportingLink: {
            url: "https://m.imdb.com/title/tt14527626/contribution/plot/po5851357/report",
          },
        },
        releaseDate: {
          day: 15,
          month: 10,
          year: 2024,
          country: {
            id: "US",
            text: "United States",
          },
          restriction: null,
          releaseAttributes: [
            {
              text: "unknown",
            },
          ],
        },
        titleCertificate: {
          rating: "TV-14",
          certificateCountry: {
            id: "US",
            text: "United States",
          },
          ratingReason: null,
        },
        titleRuntime: null,
      },
      {
        id: "tt26733317",
        isAdult: false,
        canRateTitle: {
          isRatable: true,
        },
        originalTitleText: {
          text: "Jigra",
        },
        primaryImage: {
          id: "rm163408897",
          imageUrl:
            "https://m.media-amazon.com/images/M/MV5BNmJhMTc5NDEtN2NkOC00Njc3LWJiMzgtZjhjZWNhZDhmZTE0XkEyXkFqcGc@._V1_.jpg",
          imageWidth: 1080,
          imageHeight: 1440,
        },
        ratingsSummary: {
          aggregateRating: 8.1,
          topRanking: null,
          voteCount: 15373,
        },
        releaseYear: {
          year: 2024,
          endYear: null,
        },
        titleEpisode: null,
        titleText: {
          text: "Jigra",
        },
        titleType: {
          id: "movie",
          text: "Movie",
          displayableProperty: {
            value: {
              plainText: "",
            },
          },
          categories: [
            {
              id: "movie",
              text: "Movie",
              value: "movie",
            },
          ],
          canHaveEpisodes: false,
          isSeries: false,
          isEpisode: false,
        },
        series: null,
        watchOptionsByCategory: {
          categorizedWatchOptionsList: [],
        },
        latestTrailer: {
          id: "vi1616823833",
          contentType: {
            id: "amzn1.imdb.video.contenttype.trailer",
            displayName: {
              value: "Trailer",
            },
          },
          createdDate: "2024-09-26T05:57:35.550Z",
          description: {
            value: "",
          },
          primaryImage: {
            imageUrl:
              "https://m.media-amazon.com/images/M/MV5BNmY1ODQ2ZmQtZTU5ZC00M2NjLWJmMDQtNTMyNDI2NzAxZDE0XkEyXkFqcGdeQXRyYW5zY29kZS13b3JrZmxvdw@@._V1_.jpg",
            imageWidth: 1920,
            imageHeight: 1080,
          },
          primaryTitleFragment: {
            id: "tt26733317",
            isAdult: false,
            canRateTitle: {
              isRatable: true,
            },
            originalTitleText: {
              text: "Jigra",
            },
            primaryImage: {
              id: "rm163408897",
              imageUrl:
                "https://m.media-amazon.com/images/M/MV5BNmJhMTc5NDEtN2NkOC00Njc3LWJiMzgtZjhjZWNhZDhmZTE0XkEyXkFqcGc@._V1_.jpg",
              imageWidth: 1080,
              imageHeight: 1440,
            },
            ratingsSummary: {
              aggregateRating: 8.1,
              topRanking: null,
              voteCount: 15373,
            },
            releaseYear: {
              year: 2024,
              endYear: null,
            },
            titleEpisode: null,
            titleText: {
              text: "Jigra",
            },
            titleType: {
              id: "movie",
              text: "Movie",
              displayableProperty: {
                value: {
                  plainText: "",
                },
              },
              categories: [
                {
                  id: "movie",
                  text: "Movie",
                  value: "movie",
                },
              ],
              canHaveEpisodes: false,
              isSeries: false,
              isEpisode: false,
            },
            series: null,
          },
          name: {
            value: "THEATRICAL TRAILER",
          },
          runtime: {
            unit: "SECONDS",
            value: 182,
          },
        },
        plot: {
          id: "po7387282",
          author: null,
          plotText: {
            plainText:
              "It is a heart wrenching tale of a sister taking on the world to avenge her brother. Their odyssey of reunification tests their bond, their morals, and their inner strengths. Who wouldn't set the world on fire to protect what's theirs?",
          },
          correctionLink: {
            url: "https://m.imdb.com/title/tt26733317/contribution/plot/po7387282/edit",
          },
          reportingLink: {
            url: "https://m.imdb.com/title/tt26733317/contribution/plot/po7387282/report",
          },
        },
        releaseDate: {
          day: 11,
          month: 10,
          year: 2024,
          country: {
            id: "IN",
            text: "India",
          },
          restriction: null,
          releaseAttributes: [],
        },
        titleCertificate: null,
        titleRuntime: {
          seconds: 9180,
          displayableProperty: {
            qualifiersInMarkdownList: null,
          },
        },
      },
      {
        id: "tt12037194",
        isAdult: false,
        canRateTitle: {
          isRatable: true,
        },
        originalTitleText: {
          text: "Furiosa: A Mad Max Saga",
        },
        primaryImage: {
          id: "rm645622785",
          imageUrl:
            "https://m.media-amazon.com/images/M/MV5BNTcwYWE1NTYtOWNiYy00NzY3LWIwY2MtNjJmZDkxNDNmOWE1XkEyXkFqcGc@._V1_.jpg",
          imageWidth: 2764,
          imageHeight: 4096,
        },
        ratingsSummary: {
          aggregateRating: 7.5,
          topRanking: {
            rank: 1158,
          },
          voteCount: 216316,
        },
        releaseYear: {
          year: 2024,
          endYear: null,
        },
        titleEpisode: null,
        titleText: {
          text: "Furiosa: A Mad Max Saga",
        },
        titleType: {
          id: "movie",
          text: "Movie",
          displayableProperty: {
            value: {
              plainText: "",
            },
          },
          categories: [
            {
              id: "movie",
              text: "Movie",
              value: "movie",
            },
          ],
          canHaveEpisodes: false,
          isSeries: false,
          isEpisode: false,
        },
        series: null,
        watchOptionsByCategory: {
          categorizedWatchOptionsList: [
            {
              watchOptions: [
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.prime_video.hbomaxus",
                    categoryType: "SUBSCRIPTION",
                    description: {
                      value: "with Prime Video Channels",
                    },
                    name: {
                      value: "Max",
                    },
                    refTagFragment: "hbomax",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/3e152962-a236-46be-aa94-2a48296d7129._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/7cdcbf4e-6afe-4136-be75-cd6f2d237c63._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Max",
                  },
                  description: {
                    value: "with Prime Video Channels",
                  },
                  shortDescription: null,
                  link: "aiv://aiv/view?gti=amzn1.dv.gti.3f53de6b-4d3f-42c2-8f21-dbf813fffa66",
                },
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.hbo_max",
                    categoryType: "SUBSCRIPTION",
                    description: {
                      value: "with subscription",
                    },
                    name: {
                      value: "Max",
                    },
                    refTagFragment: "hbomax",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/7660eee6-3846-43e9-aadd-bff7846554fb._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/609ae2bb-6e79-45ae-bd76-75da3afac406._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Max",
                  },
                  description: {
                    value: "with subscription",
                  },
                  shortDescription: null,
                  link: "https://play.max.com/video/watch/115002ea-7bfe-46e6-83e3-433690022e52",
                },
              ],
            },
            {
              watchOptions: [
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.prime_video",
                    categoryType: "RENT_OR_BUY",
                    description: null,
                    name: {
                      value: "Prime Video",
                    },
                    refTagFragment: "pvt_aiv",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/4c192978-331f-429e-9c97-02d5ed9d436e._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/b63dfed5-e4fa-434c-be14-d2dc2b60fbae._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Prime Video",
                  },
                  description: {
                    value: "rent/buy from $5.99",
                  },
                  shortDescription: {
                    value: "from $5.99",
                  },
                  link: "aiv://aiv/view?gti=amzn1.dv.gti.3f53de6b-4d3f-42c2-8f21-dbf813fffa66",
                },
              ],
            },
          ],
        },
        latestTrailer: {
          id: "vi618513945",
          contentType: {
            id: "amzn1.imdb.video.contenttype.trailer",
            displayName: {
              value: "Trailer",
            },
          },
          createdDate: "2024-05-20T14:14:20.272Z",
          description: {
            value:
              "The origin story of renegade warrior Furiosa before her encounter and teamup with Mad Max.",
          },
          primaryImage: {
            imageUrl:
              "https://m.media-amazon.com/images/M/MV5BYjViOTY3MjctMmZmOS00NmVkLTg0MDMtOTc1NjY4ZjdlNzg2XkEyXkFqcGdeQWpnYW1i._V1_.jpg",
            imageWidth: 1640,
            imageHeight: 922,
          },
          primaryTitleFragment: {
            id: "tt12037194",
            isAdult: false,
            canRateTitle: {
              isRatable: true,
            },
            originalTitleText: {
              text: "Furiosa: A Mad Max Saga",
            },
            primaryImage: {
              id: "rm645622785",
              imageUrl:
                "https://m.media-amazon.com/images/M/MV5BNTcwYWE1NTYtOWNiYy00NzY3LWIwY2MtNjJmZDkxNDNmOWE1XkEyXkFqcGc@._V1_.jpg",
              imageWidth: 2764,
              imageHeight: 4096,
            },
            ratingsSummary: {
              aggregateRating: 7.5,
              topRanking: {
                rank: 1158,
              },
              voteCount: 216316,
            },
            releaseYear: {
              year: 2024,
              endYear: null,
            },
            titleEpisode: null,
            titleText: {
              text: "Furiosa: A Mad Max Saga",
            },
            titleType: {
              id: "movie",
              text: "Movie",
              displayableProperty: {
                value: {
                  plainText: "",
                },
              },
              categories: [
                {
                  id: "movie",
                  text: "Movie",
                  value: "movie",
                },
              ],
              canHaveEpisodes: false,
              isSeries: false,
              isEpisode: false,
            },
            series: null,
          },
          name: {
            value: 'Sneak Peek "Chapters" Trailer',
          },
          runtime: {
            unit: "SECONDS",
            value: 344,
          },
        },
        plot: {
          id: "po5364909",
          author: null,
          plotText: {
            plainText:
              "The origin story of renegade warrior Furiosa before her encounter and teamup with Mad Max.",
          },
          correctionLink: {
            url: "https://m.imdb.com/title/tt12037194/contribution/plot/po5364909/edit",
          },
          reportingLink: {
            url: "https://m.imdb.com/title/tt12037194/contribution/plot/po5364909/report",
          },
        },
        releaseDate: {
          day: 24,
          month: 5,
          year: 2024,
          country: {
            id: "US",
            text: "United States",
          },
          restriction: null,
          releaseAttributes: [],
        },
        titleCertificate: {
          rating: "R",
          certificateCountry: {
            id: "US",
            text: "United States",
          },
          ratingReason:
            "- Rated R for sequences of strong violence, and grisly images.",
        },
        titleRuntime: {
          seconds: 8880,
          displayableProperty: {
            qualifiersInMarkdownList: null,
          },
        },
      },
      {
        id: "tt27911000",
        isAdult: false,
        canRateTitle: {
          isRatable: true,
        },
        originalTitleText: {
          text: "Terrifier 3",
        },
        primaryImage: {
          id: "rm1974431489",
          imageUrl:
            "https://m.media-amazon.com/images/M/MV5BNzc2MWUyYzctY2E4Ny00ZTlmLThjNTMtMTViZGI5NjcyN2EzXkEyXkFqcGc@._V1_.jpg",
          imageWidth: 2000,
          imageHeight: 2963,
        },
        ratingsSummary: {
          aggregateRating: 7.1,
          topRanking: null,
          voteCount: 8739,
        },
        releaseYear: {
          year: 2024,
          endYear: null,
        },
        titleEpisode: null,
        titleText: {
          text: "Terrifier 3",
        },
        titleType: {
          id: "movie",
          text: "Movie",
          displayableProperty: {
            value: {
              plainText: "",
            },
          },
          categories: [
            {
              id: "movie",
              text: "Movie",
              value: "movie",
            },
          ],
          canHaveEpisodes: false,
          isSeries: false,
          isEpisode: false,
        },
        series: null,
        watchOptionsByCategory: {
          categorizedWatchOptionsList: [],
        },
        latestTrailer: {
          id: "vi2741880345",
          contentType: {
            id: "amzn1.imdb.video.contenttype.trailer",
            displayName: {
              value: "Trailer",
            },
          },
          createdDate: "2024-09-10T20:41:16.365Z",
          description: {
            value:
              "Art the Clown is set to unleash chaos on the unsuspecting residents of Miles County as they peacefully drift off to sleep on Christmas Eve.",
          },
          primaryImage: {
            imageUrl:
              "https://m.media-amazon.com/images/M/MV5BMTQwNzE0YzctY2FjNi00MTQzLWFlY2UtOTgwMzVkYWViNTc0XkEyXkFqcGdeQXRyYW5zY29kZS13b3JrZmxvdw@@._V1_.jpg",
            imageWidth: 1920,
            imageHeight: 1080,
          },
          primaryTitleFragment: {
            id: "tt27911000",
            isAdult: false,
            canRateTitle: {
              isRatable: true,
            },
            originalTitleText: {
              text: "Terrifier 3",
            },
            primaryImage: {
              id: "rm1974431489",
              imageUrl:
                "https://m.media-amazon.com/images/M/MV5BNzc2MWUyYzctY2E4Ny00ZTlmLThjNTMtMTViZGI5NjcyN2EzXkEyXkFqcGc@._V1_.jpg",
              imageWidth: 2000,
              imageHeight: 2963,
            },
            ratingsSummary: {
              aggregateRating: 7.1,
              topRanking: null,
              voteCount: 8739,
            },
            releaseYear: {
              year: 2024,
              endYear: null,
            },
            titleEpisode: null,
            titleText: {
              text: "Terrifier 3",
            },
            titleType: {
              id: "movie",
              text: "Movie",
              displayableProperty: {
                value: {
                  plainText: "",
                },
              },
              categories: [
                {
                  id: "movie",
                  text: "Movie",
                  value: "movie",
                },
              ],
              canHaveEpisodes: false,
              isSeries: false,
              isEpisode: false,
            },
            series: null,
          },
          name: {
            value: "Official Trailer",
          },
          runtime: {
            unit: "SECONDS",
            value: 140,
          },
        },
        plot: {
          id: "po7283148",
          author: null,
          plotText: {
            plainText:
              "Art the Clown is set to unleash chaos on the unsuspecting residents of Miles County as they peacefully drift off to sleep on Christmas Eve.",
          },
          correctionLink: {
            url: "https://m.imdb.com/title/tt27911000/contribution/plot/po7283148/edit",
          },
          reportingLink: {
            url: "https://m.imdb.com/title/tt27911000/contribution/plot/po7283148/report",
          },
        },
        releaseDate: {
          day: 11,
          month: 10,
          year: 2024,
          country: {
            id: "US",
            text: "United States",
          },
          restriction: null,
          releaseAttributes: [],
        },
        titleCertificate: {
          rating: "Not Rated",
          certificateCountry: {
            id: "US",
            text: "United States",
          },
          ratingReason: null,
        },
        titleRuntime: {
          seconds: 7500,
          displayableProperty: {
            qualifiersInMarkdownList: null,
          },
        },
      },
      {
        id: "tt0816692",
        isAdult: false,
        canRateTitle: {
          isRatable: true,
        },
        originalTitleText: {
          text: "Interstellar",
        },
        primaryImage: {
          id: "rm4043724800",
          imageUrl:
            "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_.jpg",
          imageWidth: 2430,
          imageHeight: 3600,
        },
        ratingsSummary: {
          aggregateRating: 8.7,
          topRanking: {
            rank: 19,
          },
          voteCount: 2176289,
        },
        releaseYear: {
          year: 2014,
          endYear: null,
        },
        titleEpisode: null,
        titleText: {
          text: "Interstellar",
        },
        titleType: {
          id: "movie",
          text: "Movie",
          displayableProperty: {
            value: {
              plainText: "",
            },
          },
          categories: [
            {
              id: "movie",
              text: "Movie",
              value: "movie",
            },
          ],
          canHaveEpisodes: false,
          isSeries: false,
          isEpisode: false,
        },
        series: null,
        watchOptionsByCategory: {
          categorizedWatchOptionsList: [
            {
              watchOptions: [
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.prime_video.cbsaaca",
                    categoryType: "SUBSCRIPTION",
                    description: {
                      value: "with Prime Video Channels",
                    },
                    name: {
                      value: "Paramount+",
                    },
                    refTagFragment: "pvc_paramount+",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/83230f2a-d6e3-41ed-bf4d-9c4bbddff767._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/ef380fc5-d6b9-44de-9ad7-c91baefebf4e._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Paramount+",
                  },
                  description: {
                    value: "with Prime Video Channels",
                  },
                  shortDescription: null,
                  link: "aiv://aiv/view?gti=amzn1.dv.gti.b4a9f7c6-5def-7e63-9aa7-df38a479333e",
                },
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.cbs_aa",
                    categoryType: "SUBSCRIPTION",
                    description: {
                      value: "with subscription",
                    },
                    name: {
                      value: "Paramount+",
                    },
                    refTagFragment: "paramount+",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/e49120ab-6b5f-4646-9948-ae0938f24ddd._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/c5b957f1-4220-47c0-b5e0-bbbad817fc1f._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Paramount+",
                  },
                  description: {
                    value: "with subscription",
                  },
                  shortDescription: null,
                  link: "https://www.cbs.com/all-access/",
                },
              ],
            },
            {
              watchOptions: [
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.prime_video",
                    categoryType: "RENT_OR_BUY",
                    description: null,
                    name: {
                      value: "Prime Video",
                    },
                    refTagFragment: "pvt_aiv",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/4c192978-331f-429e-9c97-02d5ed9d436e._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/b63dfed5-e4fa-434c-be14-d2dc2b60fbae._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Prime Video",
                  },
                  description: {
                    value: "rent/buy from $3.79",
                  },
                  shortDescription: {
                    value: "from $3.79",
                  },
                  link: "aiv://aiv/view?gti=amzn1.dv.gti.b4a9f7c6-5def-7e63-9aa7-df38a479333e",
                },
              ],
            },
          ],
        },
        latestTrailer: {
          id: "vi892845593",
          contentType: {
            id: "amzn1.imdb.video.contenttype.trailer",
            displayName: {
              value: "Trailer",
            },
          },
          createdDate: "2020-06-02T17:04:41.043Z",
          description: {
            value: "Official Trailer",
          },
          primaryImage: {
            imageUrl:
              "https://m.media-amazon.com/images/M/MV5BYTMzNmM0ODQtMGFkOC00NGEwLTk1OWMtYjJmMGE0YjZiMzhhXkEyXkFqcGdeQVRoaXJkUGFydHlJbmdlc3Rpb25Xb3JrZmxvdw@@._V1_.jpg",
            imageWidth: 1920,
            imageHeight: 1080,
          },
          primaryTitleFragment: {
            id: "tt0816692",
            isAdult: false,
            canRateTitle: {
              isRatable: true,
            },
            originalTitleText: {
              text: "Interstellar",
            },
            primaryImage: {
              id: "rm4043724800",
              imageUrl:
                "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_.jpg",
              imageWidth: 2430,
              imageHeight: 3600,
            },
            ratingsSummary: {
              aggregateRating: 8.7,
              topRanking: {
                rank: 19,
              },
              voteCount: 2176289,
            },
            releaseYear: {
              year: 2014,
              endYear: null,
            },
            titleEpisode: null,
            titleText: {
              text: "Interstellar",
            },
            titleType: {
              id: "movie",
              text: "Movie",
              displayableProperty: {
                value: {
                  plainText: "",
                },
              },
              categories: [
                {
                  id: "movie",
                  text: "Movie",
                  value: "movie",
                },
              ],
              canHaveEpisodes: false,
              isSeries: false,
              isEpisode: false,
            },
            series: null,
          },
          name: {
            value: "Interstellar",
          },
          runtime: {
            unit: "SECONDS",
            value: 139,
          },
        },
        plot: {
          id: "po1982572",
          author: null,
          plotText: {
            plainText:
              "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
          },
          correctionLink: {
            url: "https://m.imdb.com/title/tt0816692/contribution/plot/po1982572/edit",
          },
          reportingLink: {
            url: "https://m.imdb.com/title/tt0816692/contribution/plot/po1982572/report",
          },
        },
        releaseDate: {
          day: 7,
          month: 11,
          year: 2014,
          country: {
            id: "US",
            text: "United States",
          },
          restriction: null,
          releaseAttributes: [],
        },
        titleCertificate: {
          rating: "PG-13",
          certificateCountry: {
            id: "US",
            text: "United States",
          },
          ratingReason:
            "Rated PG-13 for some intense perilous action and brief strong language.",
        },
        titleRuntime: {
          seconds: 10140,
          displayableProperty: {
            qualifiersInMarkdownList: null,
          },
        },
      },
      {
        id: "tt7286456",
        isAdult: false,
        canRateTitle: {
          isRatable: true,
        },
        originalTitleText: {
          text: "Joker",
        },
        primaryImage: {
          id: "rm3353122305",
          imageUrl:
            "https://m.media-amazon.com/images/M/MV5BNzY3OWQ5NDktNWQ2OC00ZjdlLThkMmItMDhhNDk3NTFiZGU4XkEyXkFqcGc@._V1_.jpg",
          imageWidth: 2764,
          imageHeight: 4096,
        },
        ratingsSummary: {
          aggregateRating: 8.4,
          topRanking: {
            rank: 84,
          },
          voteCount: 1549052,
        },
        releaseYear: {
          year: 2019,
          endYear: null,
        },
        titleEpisode: null,
        titleText: {
          text: "Joker",
        },
        titleType: {
          id: "movie",
          text: "Movie",
          displayableProperty: {
            value: {
              plainText: "",
            },
          },
          categories: [
            {
              id: "movie",
              text: "Movie",
              value: "movie",
            },
          ],
          canHaveEpisodes: false,
          isSeries: false,
          isEpisode: false,
        },
        series: null,
        watchOptionsByCategory: {
          categorizedWatchOptionsList: [
            {
              watchOptions: [
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.prime_video.hbomaxus",
                    categoryType: "SUBSCRIPTION",
                    description: {
                      value: "with Prime Video Channels",
                    },
                    name: {
                      value: "Max",
                    },
                    refTagFragment: "hbomax",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/3e152962-a236-46be-aa94-2a48296d7129._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/7cdcbf4e-6afe-4136-be75-cd6f2d237c63._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Max",
                  },
                  description: {
                    value: "with Prime Video Channels",
                  },
                  shortDescription: null,
                  link: "aiv://aiv/view?gti=amzn1.dv.gti.c4b6ca92-491f-bc5b-9da4-30916bb6e8a0",
                },
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.hbo_max",
                    categoryType: "SUBSCRIPTION",
                    description: {
                      value: "with subscription",
                    },
                    name: {
                      value: "Max",
                    },
                    refTagFragment: "hbomax",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/7660eee6-3846-43e9-aadd-bff7846554fb._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/609ae2bb-6e79-45ae-bd76-75da3afac406._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Max",
                  },
                  description: {
                    value: "with subscription",
                  },
                  shortDescription: null,
                  link: "https://play.max.com/video/watch/7f45991d-93ca-445c-951f-49497cc9ba71",
                },
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.tbs",
                    categoryType: "SUBSCRIPTION",
                    description: {
                      value: "Go to tbs.com",
                    },
                    name: {
                      value: "TBS",
                    },
                    refTagFragment: "tbs",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/85bbbe1f-8f10-4604-93cd-6c13614e965d._V1_.png",
                        width: 512,
                        height: 512,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/229bcd32-7634-4999-9623-fb20be151807._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on TBS",
                  },
                  description: {
                    value: "Go to tbs.com",
                  },
                  shortDescription: null,
                  link: "https://www.tbs.com/",
                },
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.tnt",
                    categoryType: "SUBSCRIPTION",
                    description: {
                      value: "Go to tntdrama.com",
                    },
                    name: {
                      value: "TNT",
                    },
                    refTagFragment: "tnt",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/deb0c389-7644-430a-af37-16f760df319d._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/5548a9c9-da5b-4fc9-a09b-b2fa2cd26b62._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on TNT",
                  },
                  description: {
                    value: "Go to tntdrama.com",
                  },
                  shortDescription: null,
                  link: "https://www.tntdrama.com/",
                },
              ],
            },
            {
              watchOptions: [
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.prime_video",
                    categoryType: "RENT_OR_BUY",
                    description: null,
                    name: {
                      value: "Prime Video",
                    },
                    refTagFragment: "pvt_aiv",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/4c192978-331f-429e-9c97-02d5ed9d436e._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/b63dfed5-e4fa-434c-be14-d2dc2b60fbae._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Prime Video",
                  },
                  description: {
                    value: "rent/buy from $3.99",
                  },
                  shortDescription: {
                    value: "from $3.99",
                  },
                  link: "aiv://aiv/view?gti=amzn1.dv.gti.c4b6ca92-491f-bc5b-9da4-30916bb6e8a0",
                },
              ],
            },
          ],
        },
        latestTrailer: {
          id: "vi3628776985",
          contentType: {
            id: "amzn1.imdb.video.contenttype.trailer",
            displayName: {
              value: "Trailer",
            },
          },
          createdDate: "2020-08-27T17:07:57.392Z",
          description: {
            value: "Official Trailer",
          },
          primaryImage: {
            imageUrl:
              "https://m.media-amazon.com/images/M/MV5BOWRhYTFmOTEtN2Q4MC00MzlkLTkyMTYtZjhjMjQwZjQ2MDQ2XkEyXkFqcGdeQVRoaXJkUGFydHlJbmdlc3Rpb25Xb3JrZmxvdw@@._V1_.jpg",
            imageWidth: 1920,
            imageHeight: 1080,
          },
          primaryTitleFragment: {
            id: "tt7286456",
            isAdult: false,
            canRateTitle: {
              isRatable: true,
            },
            originalTitleText: {
              text: "Joker",
            },
            primaryImage: {
              id: "rm3353122305",
              imageUrl:
                "https://m.media-amazon.com/images/M/MV5BNzY3OWQ5NDktNWQ2OC00ZjdlLThkMmItMDhhNDk3NTFiZGU4XkEyXkFqcGc@._V1_.jpg",
              imageWidth: 2764,
              imageHeight: 4096,
            },
            ratingsSummary: {
              aggregateRating: 8.4,
              topRanking: {
                rank: 84,
              },
              voteCount: 1549052,
            },
            releaseYear: {
              year: 2019,
              endYear: null,
            },
            titleEpisode: null,
            titleText: {
              text: "Joker",
            },
            titleType: {
              id: "movie",
              text: "Movie",
              displayableProperty: {
                value: {
                  plainText: "",
                },
              },
              categories: [
                {
                  id: "movie",
                  text: "Movie",
                  value: "movie",
                },
              ],
              canHaveEpisodes: false,
              isSeries: false,
              isEpisode: false,
            },
            series: null,
          },
          name: {
            value: "Joker",
          },
          runtime: {
            unit: "SECONDS",
            value: 144,
          },
        },
        plot: {
          id: "po4788805",
          author: null,
          plotText: {
            plainText:
              "Arthur Fleck, a party clown and a failed stand-up comedian, leads an impoverished life with his ailing mother. However, when society shuns him and brands him as a freak, he decides to embrace the life of chaos in Gotham City.",
          },
          correctionLink: {
            url: "https://m.imdb.com/title/tt7286456/contribution/plot/po4788805/edit",
          },
          reportingLink: {
            url: "https://m.imdb.com/title/tt7286456/contribution/plot/po4788805/report",
          },
        },
        releaseDate: {
          day: 4,
          month: 10,
          year: 2019,
          country: {
            id: "US",
            text: "United States",
          },
          restriction: null,
          releaseAttributes: [],
        },
        titleCertificate: {
          rating: "R",
          certificateCountry: {
            id: "US",
            text: "United States",
          },
          ratingReason:
            "Rated R for strong bloody violence, disturbing behavior, language and brief sexual images",
        },
        titleRuntime: {
          seconds: 7320,
          displayableProperty: {
            qualifiersInMarkdownList: null,
          },
        },
      },
      {
        id: "tt13207736",
        isAdult: false,
        canRateTitle: {
          isRatable: true,
        },
        originalTitleText: {
          text: "Monsters",
        },
        primaryImage: {
          id: "rm2683399937",
          imageUrl:
            "https://m.media-amazon.com/images/M/MV5BNDAzYzEzZDMtOWE3Ny00MTU3LWIwY2MtMDYzZmYzYTZkYjJkXkEyXkFqcGc@._V1_.jpg",
          imageWidth: 1013,
          imageHeight: 1500,
        },
        ratingsSummary: {
          aggregateRating: 7.8,
          topRanking: {
            rank: 1004,
          },
          voteCount: 178295,
        },
        releaseYear: {
          year: 2022,
          endYear: null,
        },
        titleEpisode: null,
        titleText: {
          text: "Monsters",
        },
        titleType: {
          id: "tvSeries",
          text: "TV Series",
          displayableProperty: {
            value: {
              plainText: "TV Series",
            },
          },
          categories: [
            {
              id: "tv",
              text: "TV",
              value: "tv",
            },
          ],
          canHaveEpisodes: true,
          isSeries: true,
          isEpisode: false,
        },
        series: null,
        watchOptionsByCategory: {
          categorizedWatchOptionsList: [
            {
              watchOptions: [
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.netflix",
                    categoryType: "SUBSCRIPTION",
                    description: {
                      value: "with subscription",
                    },
                    name: {
                      value: "Netflix",
                    },
                    refTagFragment: "netflix",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/f409199e-794d-4822-acf9-38bca16baa5e._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/9516b142-0c88-4475-a39b-97c06546cdc5._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Netflix",
                  },
                  description: {
                    value: "S1 with subscription",
                  },
                  shortDescription: {
                    value: "S1",
                  },
                  link: "https://www.netflix.com/watch/81665094?source=imdb",
                },
              ],
            },
          ],
        },
        latestTrailer: {
          id: "vi1332594201",
          contentType: {
            id: "amzn1.imdb.video.contenttype.trailer",
            displayName: {
              value: "Trailer",
            },
          },
          createdDate: "2024-09-10T14:09:24.637Z",
          description: {
            value:
              "An anthology series, centered on the stories of cannibalistic serial killer Jeffrey Dahmer and convicted murderers Lyle and Erik Menendez.",
          },
          primaryImage: {
            imageUrl:
              "https://m.media-amazon.com/images/M/MV5BYWVlMDFiY2YtOGEzNy00YzEwLThiMGYtNTcxYTMzNDZmYTIxXkEyXkFqcGdeQWFybm8@._V1_.jpg",
            imageWidth: 3907,
            imageHeight: 2198,
          },
          primaryTitleFragment: {
            id: "tt13207736",
            isAdult: false,
            canRateTitle: {
              isRatable: true,
            },
            originalTitleText: {
              text: "Monsters",
            },
            primaryImage: {
              id: "rm2683399937",
              imageUrl:
                "https://m.media-amazon.com/images/M/MV5BNDAzYzEzZDMtOWE3Ny00MTU3LWIwY2MtMDYzZmYzYTZkYjJkXkEyXkFqcGc@._V1_.jpg",
              imageWidth: 1013,
              imageHeight: 1500,
            },
            ratingsSummary: {
              aggregateRating: 7.8,
              topRanking: {
                rank: 1004,
              },
              voteCount: 178295,
            },
            releaseYear: {
              year: 2022,
              endYear: null,
            },
            titleEpisode: null,
            titleText: {
              text: "Monsters",
            },
            titleType: {
              id: "tvSeries",
              text: "TV Series",
              displayableProperty: {
                value: {
                  plainText: "TV Series",
                },
              },
              categories: [
                {
                  id: "tv",
                  text: "TV",
                  value: "tv",
                },
              ],
              canHaveEpisodes: true,
              isSeries: true,
              isEpisode: false,
            },
            series: null,
          },
          name: {
            value: "Official Trailer 2 - Season 2",
          },
          runtime: {
            unit: "SECONDS",
            value: 151,
          },
        },
        plot: {
          id: "po5332236",
          author: null,
          plotText: {
            plainText:
              "An anthology series about high-profile crimes or killers that captured public attention and notoriety.",
          },
          correctionLink: {
            url: "https://m.imdb.com/title/tt13207736/contribution/plot/po5332236/edit",
          },
          reportingLink: {
            url: "https://m.imdb.com/title/tt13207736/contribution/plot/po5332236/report",
          },
        },
        releaseDate: {
          day: 21,
          month: 9,
          year: 2022,
          country: {
            id: "US",
            text: "United States",
          },
          restriction: null,
          releaseAttributes: [
            {
              text: "internet",
            },
          ],
        },
        titleCertificate: {
          rating: "TV-MA",
          certificateCountry: {
            id: "US",
            text: "United States",
          },
          ratingReason: null,
        },
        titleRuntime: {
          seconds: 3600,
          displayableProperty: {
            qualifiersInMarkdownList: null,
          },
        },
      },
      {
        id: "tt0903747",
        isAdult: false,
        canRateTitle: {
          isRatable: true,
        },
        originalTitleText: {
          text: "Breaking Bad",
        },
        primaryImage: {
          id: "rm3116305665",
          imageUrl:
            "https://m.media-amazon.com/images/M/MV5BMzU5ZGYzNmQtMTdhYy00OGRiLTg0NmQtYjVjNzliZTg1ZGE4XkEyXkFqcGc@._V1_.jpg",
          imageWidth: 2000,
          imageHeight: 3000,
        },
        ratingsSummary: {
          aggregateRating: 9.5,
          topRanking: {
            rank: 1,
          },
          voteCount: 2219975,
        },
        releaseYear: {
          year: 2008,
          endYear: 2013,
        },
        titleEpisode: null,
        titleText: {
          text: "Breaking Bad",
        },
        titleType: {
          id: "tvSeries",
          text: "TV Series",
          displayableProperty: {
            value: {
              plainText: "TV Series",
            },
          },
          categories: [
            {
              id: "tv",
              text: "TV",
              value: "tv",
            },
          ],
          canHaveEpisodes: true,
          isSeries: true,
          isEpisode: false,
        },
        series: null,
        watchOptionsByCategory: {
          categorizedWatchOptionsList: [
            {
              watchOptions: [
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.netflix",
                    categoryType: "SUBSCRIPTION",
                    description: {
                      value: "with subscription",
                    },
                    name: {
                      value: "Netflix",
                    },
                    refTagFragment: "netflix",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/f409199e-794d-4822-acf9-38bca16baa5e._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/9516b142-0c88-4475-a39b-97c06546cdc5._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Netflix",
                  },
                  description: {
                    value: "S1-5 with subscription",
                  },
                  shortDescription: {
                    value: "S1-5",
                  },
                  link: "https://www.netflix.com/watch/70143836?source=imdb",
                },
              ],
            },
            {
              watchOptions: [
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.prime_video",
                    categoryType: "RENT_OR_BUY",
                    description: null,
                    name: {
                      value: "Prime Video",
                    },
                    refTagFragment: "pvt_aiv",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/4c192978-331f-429e-9c97-02d5ed9d436e._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/b63dfed5-e4fa-434c-be14-d2dc2b60fbae._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Prime Video",
                  },
                  description: {
                    value: "buy from $9.99",
                  },
                  shortDescription: {
                    value: "from $9.99",
                  },
                  link: "aiv://aiv/view?gti=amzn1.dv.gti.58a9f75a-c09b-f345-f535-6d38b35e9072",
                },
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.amazon",
                    categoryType: "RENT_OR_BUY",
                    description: {
                      value: "Amazon",
                    },
                    name: {
                      value: "Amazon",
                    },
                    refTagFragment: "amazon",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/b26d1036-b801-4e57-8ce8-70c40cea751f._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/b6a99b0d-356a-4dae-9ffc-248e123b204b._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Search on Amazon",
                  },
                  description: {
                    value: "search for Blu-ray and DVD",
                  },
                  shortDescription: {
                    value: "search Amazon",
                  },
                  link: "com.amazon.mobile.shopping://amazon.com/s?i=movies-tv&k=Breaking+Bad",
                },
              ],
            },
          ],
        },
        latestTrailer: {
          id: "vi547929369",
          contentType: {
            id: "amzn1.imdb.video.contenttype.trailer",
            displayName: {
              value: "Trailer",
            },
          },
          createdDate: "2019-03-16T15:12:00.906Z",
          description: {
            value: "Breaking Bad: Final Season",
          },
          primaryImage: {
            imageUrl:
              "https://m.media-amazon.com/images/M/MV5BNDNhZjE2MjctZmQ3OS00MmU2LTk5MjItOGU3ZTQ0ODcxOWMxXkEyXkFqcGdeQXRyYW5zY29kZS13b3JrZmxvdw@@._V1_.jpg",
            imageWidth: 720,
            imageHeight: 394,
          },
          primaryTitleFragment: {
            id: "tt0903747",
            isAdult: false,
            canRateTitle: {
              isRatable: true,
            },
            originalTitleText: {
              text: "Breaking Bad",
            },
            primaryImage: {
              id: "rm3116305665",
              imageUrl:
                "https://m.media-amazon.com/images/M/MV5BMzU5ZGYzNmQtMTdhYy00OGRiLTg0NmQtYjVjNzliZTg1ZGE4XkEyXkFqcGc@._V1_.jpg",
              imageWidth: 2000,
              imageHeight: 3000,
            },
            ratingsSummary: {
              aggregateRating: 9.5,
              topRanking: {
                rank: 1,
              },
              voteCount: 2219975,
            },
            releaseYear: {
              year: 2008,
              endYear: 2013,
            },
            titleEpisode: null,
            titleText: {
              text: "Breaking Bad",
            },
            titleType: {
              id: "tvSeries",
              text: "TV Series",
              displayableProperty: {
                value: {
                  plainText: "TV Series",
                },
              },
              categories: [
                {
                  id: "tv",
                  text: "TV",
                  value: "tv",
                },
              ],
              canHaveEpisodes: true,
              isSeries: true,
              isEpisode: false,
            },
            series: null,
          },
          name: {
            value: "Breaking Bad: Final Season",
          },
          runtime: {
            unit: "SECONDS",
            value: 34,
          },
        },
        plot: {
          id: "po6890587",
          author: null,
          plotText: {
            plainText:
              "A chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student to secure his family's future.",
          },
          correctionLink: {
            url: "https://m.imdb.com/title/tt0903747/contribution/plot/po6890587/edit",
          },
          reportingLink: {
            url: "https://m.imdb.com/title/tt0903747/contribution/plot/po6890587/report",
          },
        },
        releaseDate: {
          day: 20,
          month: 1,
          year: 2008,
          country: {
            id: "US",
            text: "United States",
          },
          restriction: null,
          releaseAttributes: [],
        },
        titleCertificate: {
          rating: "TV-MA",
          certificateCountry: {
            id: "US",
            text: "United States",
          },
          ratingReason: null,
        },
        titleRuntime: {
          seconds: 2700,
          displayableProperty: {
            qualifiersInMarkdownList: null,
          },
        },
      },
      {
        id: "tt29330913",
        isAdult: false,
        canRateTitle: {
          isRatable: true,
        },
        originalTitleText: {
          text: "Vicky Vidya Ka Woh Wala Video",
        },
        primaryImage: {
          id: "rm3249433857",
          imageUrl:
            "https://m.media-amazon.com/images/M/MV5BNDViYjk4ZmYtNjhhYS00OGQ0LWFlNTktZTYwMzcyZDUwODcwXkEyXkFqcGc@._V1_.jpg",
          imageWidth: 5400,
          imageHeight: 6750,
        },
        ratingsSummary: {
          aggregateRating: 7.7,
          topRanking: null,
          voteCount: 7012,
        },
        releaseYear: {
          year: 2024,
          endYear: null,
        },
        titleEpisode: null,
        titleText: {
          text: "Vicky Vidya Ka Woh Wala Video",
        },
        titleType: {
          id: "movie",
          text: "Movie",
          displayableProperty: {
            value: {
              plainText: "",
            },
          },
          categories: [
            {
              id: "movie",
              text: "Movie",
              value: "movie",
            },
          ],
          canHaveEpisodes: false,
          isSeries: false,
          isEpisode: false,
        },
        series: null,
        watchOptionsByCategory: {
          categorizedWatchOptionsList: [],
        },
        latestTrailer: null,
        plot: {
          id: "po7564557",
          author: null,
          plotText: {
            plainText:
              "A newly married couple's relationship and reputation are put at risk when their private video CD is stolen. The story follows their roller coaster journey to recover the CD, navigating a series of unexpected difficulties along the way.",
          },
          correctionLink: {
            url: "https://m.imdb.com/title/tt29330913/contribution/plot/po7564557/edit",
          },
          reportingLink: {
            url: "https://m.imdb.com/title/tt29330913/contribution/plot/po7564557/report",
          },
        },
        releaseDate: {
          day: 11,
          month: 10,
          year: 2024,
          country: {
            id: "IN",
            text: "India",
          },
          restriction: null,
          releaseAttributes: [],
        },
        titleCertificate: null,
        titleRuntime: {
          seconds: 9120,
          displayableProperty: {
            qualifiersInMarkdownList: null,
          },
        },
      },
      {
        id: "tt0468569",
        isAdult: false,
        canRateTitle: {
          isRatable: true,
        },
        originalTitleText: {
          text: "The Dark Knight",
        },
        primaryImage: {
          id: "rm4023877632",
          imageUrl:
            "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
          imageWidth: 1383,
          imageHeight: 2048,
        },
        ratingsSummary: {
          aggregateRating: 9,
          topRanking: {
            rank: 3,
          },
          voteCount: 2933761,
        },
        releaseYear: {
          year: 2008,
          endYear: null,
        },
        titleEpisode: null,
        titleText: {
          text: "The Dark Knight",
        },
        titleType: {
          id: "movie",
          text: "Movie",
          displayableProperty: {
            value: {
              plainText: "",
            },
          },
          categories: [
            {
              id: "movie",
              text: "Movie",
              value: "movie",
            },
          ],
          canHaveEpisodes: false,
          isSeries: false,
          isEpisode: false,
        },
        series: null,
        watchOptionsByCategory: {
          categorizedWatchOptionsList: [
            {
              watchOptions: [
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.prime_video.hbomaxus",
                    categoryType: "SUBSCRIPTION",
                    description: {
                      value: "with Prime Video Channels",
                    },
                    name: {
                      value: "Max",
                    },
                    refTagFragment: "hbomax",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/3e152962-a236-46be-aa94-2a48296d7129._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/7cdcbf4e-6afe-4136-be75-cd6f2d237c63._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Max",
                  },
                  description: {
                    value: "with Prime Video Channels",
                  },
                  shortDescription: null,
                  link: "aiv://aiv/view?gti=amzn1.dv.gti.18b7edbe-a800-19a8-45b5-c1804b71a7a5",
                },
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.hbo_max",
                    categoryType: "SUBSCRIPTION",
                    description: {
                      value: "with subscription",
                    },
                    name: {
                      value: "Max",
                    },
                    refTagFragment: "hbomax",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/7660eee6-3846-43e9-aadd-bff7846554fb._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/609ae2bb-6e79-45ae-bd76-75da3afac406._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Max",
                  },
                  description: {
                    value: "with subscription",
                  },
                  shortDescription: null,
                  link: "https://play.max.com/video/watch/46c5fcd3-9081-49e1-941f-5f31abd27f98",
                },
              ],
            },
            {
              watchOptions: [
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.prime_video",
                    categoryType: "RENT_OR_BUY",
                    description: null,
                    name: {
                      value: "Prime Video",
                    },
                    refTagFragment: "pvt_aiv",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/4c192978-331f-429e-9c97-02d5ed9d436e._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/b63dfed5-e4fa-434c-be14-d2dc2b60fbae._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Prime Video",
                  },
                  description: {
                    value: "rent/buy from $3.79",
                  },
                  shortDescription: {
                    value: "from $3.79",
                  },
                  link: "aiv://aiv/view?gti=amzn1.dv.gti.18b7edbe-a800-19a8-45b5-c1804b71a7a5",
                },
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.amazon",
                    categoryType: "RENT_OR_BUY",
                    description: {
                      value: "Amazon",
                    },
                    name: {
                      value: "Amazon",
                    },
                    refTagFragment: "amazon",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/b26d1036-b801-4e57-8ce8-70c40cea751f._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/b6a99b0d-356a-4dae-9ffc-248e123b204b._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Search on Amazon",
                  },
                  description: {
                    value: "search for Blu-ray and DVD",
                  },
                  shortDescription: {
                    value: "search Amazon",
                  },
                  link: "com.amazon.mobile.shopping://amazon.com/s?i=movies-tv&k=The+Dark+Knight",
                },
              ],
            },
          ],
        },
        latestTrailer: {
          id: "vi324468761",
          contentType: {
            id: "amzn1.imdb.video.contenttype.trailer",
            displayName: {
              value: "Trailer",
            },
          },
          createdDate: "2008-11-05T06:59:18Z",
          description: {
            value:
              "Trailer for Blu-ray/DVD release of most recent Batman installment",
          },
          primaryImage: {
            imageUrl:
              "https://m.media-amazon.com/images/M/MV5BNWJkYWJlOWMtY2ZhZi00YWM0LTliZDktYmRiMGYwNzczMTZhXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg",
            imageWidth: 480,
            imageHeight: 360,
          },
          primaryTitleFragment: {
            id: "tt0468569",
            isAdult: false,
            canRateTitle: {
              isRatable: true,
            },
            originalTitleText: {
              text: "The Dark Knight",
            },
            primaryImage: {
              id: "rm4023877632",
              imageUrl:
                "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
              imageWidth: 1383,
              imageHeight: 2048,
            },
            ratingsSummary: {
              aggregateRating: 9,
              topRanking: {
                rank: 3,
              },
              voteCount: 2933761,
            },
            releaseYear: {
              year: 2008,
              endYear: null,
            },
            titleEpisode: null,
            titleText: {
              text: "The Dark Knight",
            },
            titleType: {
              id: "movie",
              text: "Movie",
              displayableProperty: {
                value: {
                  plainText: "",
                },
              },
              categories: [
                {
                  id: "movie",
                  text: "Movie",
                  value: "movie",
                },
              ],
              canHaveEpisodes: false,
              isSeries: false,
              isEpisode: false,
            },
            series: null,
          },
          name: {
            value: "DVD Trailer",
          },
          runtime: {
            unit: "SECONDS",
            value: 33,
          },
        },
        plot: {
          id: "po2123483",
          author: null,
          plotText: {
            plainText:
              "When a menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman, James Gordon and Harvey Dent must work together to put an end to the madness.",
          },
          correctionLink: {
            url: "https://m.imdb.com/title/tt0468569/contribution/plot/po2123483/edit",
          },
          reportingLink: {
            url: "https://m.imdb.com/title/tt0468569/contribution/plot/po2123483/report",
          },
        },
        releaseDate: {
          day: 18,
          month: 7,
          year: 2008,
          country: {
            id: "US",
            text: "United States",
          },
          restriction: null,
          releaseAttributes: [],
        },
        titleCertificate: {
          rating: "PG-13",
          certificateCountry: {
            id: "US",
            text: "United States",
          },
          ratingReason:
            "Rated PG-13 for intense sequences of violence and some menace",
        },
        titleRuntime: {
          seconds: 9120,
          displayableProperty: {
            qualifiersInMarkdownList: null,
          },
        },
      },
      {
        id: "tt16426418",
        isAdult: false,
        canRateTitle: {
          isRatable: true,
        },
        originalTitleText: {
          text: "Challengers",
        },
        primaryImage: {
          id: "rm1337609729",
          imageUrl:
            "https://m.media-amazon.com/images/M/MV5BZTcyZGIyODctZGJhOS00MWUyLWI5ZWEtMjg4YzhkMDczMDBhXkEyXkFqcGc@._V1_.jpg",
          imageWidth: 2765,
          imageHeight: 4096,
        },
        ratingsSummary: {
          aggregateRating: 7.1,
          topRanking: {
            rank: 2184,
          },
          voteCount: 107814,
        },
        releaseYear: {
          year: 2024,
          endYear: null,
        },
        titleEpisode: null,
        titleText: {
          text: "Challengers",
        },
        titleType: {
          id: "movie",
          text: "Movie",
          displayableProperty: {
            value: {
              plainText: "",
            },
          },
          categories: [
            {
              id: "movie",
              text: "Movie",
              value: "movie",
            },
          ],
          canHaveEpisodes: false,
          isSeries: false,
          isEpisode: false,
        },
        series: null,
        watchOptionsByCategory: {
          categorizedWatchOptionsList: [
            {
              watchOptions: [
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.epix",
                    categoryType: "SUBSCRIPTION",
                    description: {
                      value: "MGM+ with subscription",
                    },
                    name: {
                      value: "MGM+",
                    },
                    refTagFragment: "epix",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/76b69991-2343-4544-8742-4a62f576c1fe._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/48d664d7-e2b4-423f-a1ed-454c1fbdbe83._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on MGM+",
                  },
                  description: {
                    value: "MGM+ with subscription",
                  },
                  shortDescription: null,
                  link: "https://mgmplus.com/",
                },
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.prime_video.epix",
                    categoryType: "SUBSCRIPTION",
                    description: {
                      value: "with Prime Video Channels",
                    },
                    name: {
                      value: "MGM+",
                    },
                    refTagFragment: "pvc_epix",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/fc82fd58-5458-43a7-bf6e-2c220bc252bd._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/f93bcf1a-b541-4534-96c9-d75bf78ce8ce._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on MGM+",
                  },
                  description: {
                    value: "with Prime Video Channels",
                  },
                  shortDescription: null,
                  link: "aiv://aiv/view?gti=amzn1.dv.gti.afb19248-a0b3-4592-962b-acc35b69c750",
                },
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.prime_video.PRIME",
                    categoryType: "SUBSCRIPTION",
                    description: {
                      value: "included with Prime",
                    },
                    name: {
                      value: "Prime Video",
                    },
                    refTagFragment: "pvs_piv",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/e062ea53-945a-42cb-8d15-6405531687ec._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/75f35a85-7a6e-4f1f-bf8b-e4c8556bc4e4._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Prime Video",
                  },
                  description: {
                    value: "included with Prime",
                  },
                  shortDescription: null,
                  link: "aiv://aiv/resume?gti=amzn1.dv.gti.afb19248-a0b3-4592-962b-acc35b69c750",
                },
              ],
            },
            {
              watchOptions: [
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.prime_video",
                    categoryType: "RENT_OR_BUY",
                    description: null,
                    name: {
                      value: "Prime Video",
                    },
                    refTagFragment: "pvt_aiv",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/4c192978-331f-429e-9c97-02d5ed9d436e._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/b63dfed5-e4fa-434c-be14-d2dc2b60fbae._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Prime Video",
                  },
                  description: {
                    value: "rent/buy from $3.99",
                  },
                  shortDescription: {
                    value: "from $3.99",
                  },
                  link: "aiv://aiv/view?gti=amzn1.dv.gti.afb19248-a0b3-4592-962b-acc35b69c750",
                },
              ],
            },
          ],
        },
        latestTrailer: {
          id: "vi2491663897",
          contentType: {
            id: "amzn1.imdb.video.contenttype.trailer",
            displayName: {
              value: "Trailer",
            },
          },
          createdDate: "2024-03-27T14:07:17.103Z",
          description: {
            value:
              "Tashi, a former tennis prodigy turned coach is married to a champion on a losing streak. Her strategy for her husband's redemption takes a surprising turn when he must face off against his former best friend and Tashi's former boyfriend.",
          },
          primaryImage: {
            imageUrl:
              "https://m.media-amazon.com/images/M/MV5BOTg4Y2U5ZTYtMTU1Ni00YWNiLThjOTYtNGIzNzZkMzIxZThlXkEyXkFqcGdeQXZ3ZXNsZXk@._V1_.jpg",
            imageWidth: 2944,
            imageHeight: 1656,
          },
          primaryTitleFragment: {
            id: "tt16426418",
            isAdult: false,
            canRateTitle: {
              isRatable: true,
            },
            originalTitleText: {
              text: "Challengers",
            },
            primaryImage: {
              id: "rm1337609729",
              imageUrl:
                "https://m.media-amazon.com/images/M/MV5BZTcyZGIyODctZGJhOS00MWUyLWI5ZWEtMjg4YzhkMDczMDBhXkEyXkFqcGc@._V1_.jpg",
              imageWidth: 2765,
              imageHeight: 4096,
            },
            ratingsSummary: {
              aggregateRating: 7.1,
              topRanking: {
                rank: 2184,
              },
              voteCount: 107814,
            },
            releaseYear: {
              year: 2024,
              endYear: null,
            },
            titleEpisode: null,
            titleText: {
              text: "Challengers",
            },
            titleType: {
              id: "movie",
              text: "Movie",
              displayableProperty: {
                value: {
                  plainText: "",
                },
              },
              categories: [
                {
                  id: "movie",
                  text: "Movie",
                  value: "movie",
                },
              ],
              canHaveEpisodes: false,
              isSeries: false,
              isEpisode: false,
            },
            series: null,
          },
          name: {
            value: "Official Trailer",
          },
          runtime: {
            unit: "SECONDS",
            value: 109,
          },
        },
        plot: {
          id: "po6346124",
          author: null,
          plotText: {
            plainText:
              "Tashi, a former tennis prodigy turned coach, transformed her husband into a champion. But to overcome a recent losing streak and redeem himself, he'll need to face off against his former best friend and Tashi's ex-boyfriend.",
          },
          correctionLink: {
            url: "https://m.imdb.com/title/tt16426418/contribution/plot/po6346124/edit",
          },
          reportingLink: {
            url: "https://m.imdb.com/title/tt16426418/contribution/plot/po6346124/report",
          },
        },
        releaseDate: {
          day: 26,
          month: 4,
          year: 2024,
          country: {
            id: "US",
            text: "United States",
          },
          restriction: null,
          releaseAttributes: [],
        },
        titleCertificate: {
          rating: "R",
          certificateCountry: {
            id: "US",
            text: "United States",
          },
          ratingReason:
            "Rated R for language throughout, some sexual content and graphic nudity",
        },
        titleRuntime: {
          seconds: 7860,
          displayableProperty: {
            qualifiersInMarkdownList: null,
          },
        },
      },
      {
        id: "tt26659814",
        isAdult: false,
        canRateTitle: {
          isRatable: true,
        },
        originalTitleText: {
          text: "Auron Mein Kahan Dum Tha",
        },
        primaryImage: {
          id: "rm1010462721",
          imageUrl:
            "https://m.media-amazon.com/images/M/MV5BYjYxMjE0N2UtNGFkOC00NTliLWI1ODEtNWQ1ZmUyYjdmYmU4XkEyXkFqcGc@._V1_.jpg",
          imageWidth: 3000,
          imageHeight: 3000,
        },
        ratingsSummary: {
          aggregateRating: 7.3,
          topRanking: null,
          voteCount: 39428,
        },
        releaseYear: {
          year: 2024,
          endYear: null,
        },
        titleEpisode: null,
        titleText: {
          text: "Auron Mein Kahan Dum Tha",
        },
        titleType: {
          id: "movie",
          text: "Movie",
          displayableProperty: {
            value: {
              plainText: "",
            },
          },
          categories: [
            {
              id: "movie",
              text: "Movie",
              value: "movie",
            },
          ],
          canHaveEpisodes: false,
          isSeries: false,
          isEpisode: false,
        },
        series: null,
        watchOptionsByCategory: {
          categorizedWatchOptionsList: [
            {
              watchOptions: [
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.prime_video.PRIME",
                    categoryType: "SUBSCRIPTION",
                    description: {
                      value: "included with Prime",
                    },
                    name: {
                      value: "Prime Video",
                    },
                    refTagFragment: "pvs_piv",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/e062ea53-945a-42cb-8d15-6405531687ec._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/75f35a85-7a6e-4f1f-bf8b-e4c8556bc4e4._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Prime Video",
                  },
                  description: {
                    value: "included with Prime",
                  },
                  shortDescription: null,
                  link: "aiv://aiv/resume?gti=amzn1.dv.gti.8f7d747a-ab13-4a85-9572-6311ae20c7ba",
                },
              ],
            },
          ],
        },
        latestTrailer: {
          id: "vi2822096409",
          contentType: {
            id: "amzn1.imdb.video.contenttype.trailer",
            displayName: {
              value: "Trailer",
            },
          },
          createdDate: "2024-06-14T08:37:51.454Z",
          description: {
            value:
              "Epic. Intense. Unforgettable! \n#AuronMeinKahanDumTha Trailer Out Now! \n\nStarring Ajay Devgn, Tabu, Jimmy Shergill, Shantanu Maheshwari, and Saiee Manjrekar, and directed by Neeraj Pandey. Set to release on July 5, 2024.\nProduced by Narendra Hirawat, Kumar Mangat Pathak, Sangeeta Ahir, and Shital Bhatia.",
          },
          primaryImage: {
            imageUrl:
              "https://m.media-amazon.com/images/M/MV5BZjkzNjI1YzQtNmQ4NS00YzRiLWEzYjMtMjkwZjFjZjE5MDYxXkEyXkFqcGdeQXRyYW5zY29kZS13b3JrZmxvdw@@._V1_.jpg",
            imageWidth: 1920,
            imageHeight: 1080,
          },
          primaryTitleFragment: {
            id: "tt26659814",
            isAdult: false,
            canRateTitle: {
              isRatable: true,
            },
            originalTitleText: {
              text: "Auron Mein Kahan Dum Tha",
            },
            primaryImage: {
              id: "rm1010462721",
              imageUrl:
                "https://m.media-amazon.com/images/M/MV5BYjYxMjE0N2UtNGFkOC00NTliLWI1ODEtNWQ1ZmUyYjdmYmU4XkEyXkFqcGc@._V1_.jpg",
              imageWidth: 3000,
              imageHeight: 3000,
            },
            ratingsSummary: {
              aggregateRating: 7.3,
              topRanking: null,
              voteCount: 39428,
            },
            releaseYear: {
              year: 2024,
              endYear: null,
            },
            titleEpisode: null,
            titleText: {
              text: "Auron Mein Kahan Dum Tha",
            },
            titleType: {
              id: "movie",
              text: "Movie",
              displayableProperty: {
                value: {
                  plainText: "",
                },
              },
              categories: [
                {
                  id: "movie",
                  text: "Movie",
                  value: "movie",
                },
              ],
              canHaveEpisodes: false,
              isSeries: false,
              isEpisode: false,
            },
            series: null,
          },
          name: {
            value: "Auron Mein Kahan Dum Tha (Official Trailer)",
          },
          runtime: {
            unit: "SECONDS",
            value: 185,
          },
        },
        plot: {
          id: "po7320457",
          author: null,
          plotText: {
            plainText:
              "After 20 years in prison, a man reunites with his lost love and the truth behind his crimes is revealed.",
          },
          correctionLink: {
            url: "https://m.imdb.com/title/tt26659814/contribution/plot/po7320457/edit",
          },
          reportingLink: {
            url: "https://m.imdb.com/title/tt26659814/contribution/plot/po7320457/report",
          },
        },
        releaseDate: {
          day: 2,
          month: 8,
          year: 2024,
          country: {
            id: "IN",
            text: "India",
          },
          restriction: null,
          releaseAttributes: [],
        },
        titleCertificate: null,
        titleRuntime: {
          seconds: 9000,
          displayableProperty: {
            qualifiersInMarkdownList: null,
          },
        },
      },
      {
        id: "tt17279496",
        isAdult: false,
        canRateTitle: {
          isRatable: true,
        },
        originalTitleText: {
          text: "Civil War",
        },
        primaryImage: {
          id: "rm1657225473",
          imageUrl:
            "https://m.media-amazon.com/images/M/MV5BYTkzMjc0YzgtY2E0Yi00NDBlLWI0MWUtODY1ZjExMDAyOWZiXkEyXkFqcGc@._V1_.jpg",
          imageWidth: 8100,
          imageHeight: 12000,
        },
        ratingsSummary: {
          aggregateRating: 7,
          topRanking: {
            rank: 2465,
          },
          voteCount: 180165,
        },
        releaseYear: {
          year: 2024,
          endYear: null,
        },
        titleEpisode: null,
        titleText: {
          text: "Civil War",
        },
        titleType: {
          id: "movie",
          text: "Movie",
          displayableProperty: {
            value: {
              plainText: "",
            },
          },
          categories: [
            {
              id: "movie",
              text: "Movie",
              value: "movie",
            },
          ],
          canHaveEpisodes: false,
          isSeries: false,
          isEpisode: false,
        },
        series: null,
        watchOptionsByCategory: {
          categorizedWatchOptionsList: [
            {
              watchOptions: [
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.prime_video.hbomaxus",
                    categoryType: "SUBSCRIPTION",
                    description: {
                      value: "with Prime Video Channels",
                    },
                    name: {
                      value: "Max",
                    },
                    refTagFragment: "hbomax",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/3e152962-a236-46be-aa94-2a48296d7129._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/7cdcbf4e-6afe-4136-be75-cd6f2d237c63._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Max",
                  },
                  description: {
                    value: "with Prime Video Channels",
                  },
                  shortDescription: null,
                  link: "aiv://aiv/view?gti=amzn1.dv.gti.bfb2c3e6-ae5e-4a7c-97c4-fd5e65de5d90",
                },
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.hbo_max",
                    categoryType: "SUBSCRIPTION",
                    description: {
                      value: "with subscription",
                    },
                    name: {
                      value: "Max",
                    },
                    refTagFragment: "hbomax",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/7660eee6-3846-43e9-aadd-bff7846554fb._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/609ae2bb-6e79-45ae-bd76-75da3afac406._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Max",
                  },
                  description: {
                    value: "with subscription",
                  },
                  shortDescription: null,
                  link: "https://play.max.com/video/watch/04e49231-89a5-4f7d-97e0-6a9d5e24e694",
                },
              ],
            },
            {
              watchOptions: [
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.prime_video",
                    categoryType: "RENT_OR_BUY",
                    description: null,
                    name: {
                      value: "Prime Video",
                    },
                    refTagFragment: "pvt_aiv",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/4c192978-331f-429e-9c97-02d5ed9d436e._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/b63dfed5-e4fa-434c-be14-d2dc2b60fbae._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Prime Video",
                  },
                  description: {
                    value: "rent/buy from $4.99",
                  },
                  shortDescription: {
                    value: "from $4.99",
                  },
                  link: "aiv://aiv/view?gti=amzn1.dv.gti.bfb2c3e6-ae5e-4a7c-97c4-fd5e65de5d90",
                },
              ],
            },
          ],
        },
        latestTrailer: {
          id: "vi1756939801",
          contentType: {
            id: "amzn1.imdb.video.contenttype.trailer",
            displayName: {
              value: "Trailer",
            },
          },
          createdDate: "2024-02-21T17:04:25.481Z",
          description: {
            value: "Trailer 2",
          },
          primaryImage: {
            imageUrl:
              "https://m.media-amazon.com/images/M/MV5BNmFlZTA0NWMtYmFhNS00YjYwLWFlYmMtYjk3OTViNWRkZjc1XkEyXkFqcGdeQVRoaXJkUGFydHlJbmdlc3Rpb25Xb3JrZmxvdw@@._V1_.jpg",
            imageWidth: 1920,
            imageHeight: 1080,
          },
          primaryTitleFragment: {
            id: "tt17279496",
            isAdult: false,
            canRateTitle: {
              isRatable: true,
            },
            originalTitleText: {
              text: "Civil War",
            },
            primaryImage: {
              id: "rm1657225473",
              imageUrl:
                "https://m.media-amazon.com/images/M/MV5BYTkzMjc0YzgtY2E0Yi00NDBlLWI0MWUtODY1ZjExMDAyOWZiXkEyXkFqcGc@._V1_.jpg",
              imageWidth: 8100,
              imageHeight: 12000,
            },
            ratingsSummary: {
              aggregateRating: 7,
              topRanking: {
                rank: 2465,
              },
              voteCount: 180165,
            },
            releaseYear: {
              year: 2024,
              endYear: null,
            },
            titleEpisode: null,
            titleText: {
              text: "Civil War",
            },
            titleType: {
              id: "movie",
              text: "Movie",
              displayableProperty: {
                value: {
                  plainText: "",
                },
              },
              categories: [
                {
                  id: "movie",
                  text: "Movie",
                  value: "movie",
                },
              ],
              canHaveEpisodes: false,
              isSeries: false,
              isEpisode: false,
            },
            series: null,
          },
          name: {
            value: "Civil War",
          },
          runtime: {
            unit: "SECONDS",
            value: 84,
          },
        },
        plot: {
          id: "po6404028",
          author: null,
          plotText: {
            plainText:
              "A journey across a dystopian future America, following a team of military-embedded journalists as they race against time to reach DC before rebel factions descend upon the White House.",
          },
          correctionLink: {
            url: "https://m.imdb.com/title/tt17279496/contribution/plot/po6404028/edit",
          },
          reportingLink: {
            url: "https://m.imdb.com/title/tt17279496/contribution/plot/po6404028/report",
          },
        },
        releaseDate: {
          day: 12,
          month: 4,
          year: 2024,
          country: {
            id: "US",
            text: "United States",
          },
          restriction: null,
          releaseAttributes: [],
        },
        titleCertificate: {
          rating: "R",
          certificateCountry: {
            id: "US",
            text: "United States",
          },
          ratingReason:
            "Rated R for strong violent content, bloody/disturbing images, and language throughout",
        },
        titleRuntime: {
          seconds: 6540,
          displayableProperty: {
            qualifiersInMarkdownList: null,
          },
        },
      },
      {
        id: "tt0137523",
        isAdult: false,
        canRateTitle: {
          isRatable: true,
        },
        originalTitleText: {
          text: "Fight Club",
        },
        primaryImage: {
          id: "rm1412004864",
          imageUrl:
            "https://m.media-amazon.com/images/M/MV5BOTgyOGQ1NDItNGU3Ny00MjU3LTg2YWEtNmEyYjBiMjI1Y2M5XkEyXkFqcGc@._V1_.jpg",
          imageWidth: 1066,
          imageHeight: 1600,
        },
        ratingsSummary: {
          aggregateRating: 8.8,
          topRanking: {
            rank: 13,
          },
          voteCount: 2384520,
        },
        releaseYear: {
          year: 1999,
          endYear: null,
        },
        titleEpisode: null,
        titleText: {
          text: "Fight Club",
        },
        titleType: {
          id: "movie",
          text: "Movie",
          displayableProperty: {
            value: {
              plainText: "",
            },
          },
          categories: [
            {
              id: "movie",
              text: "Movie",
              value: "movie",
            },
          ],
          canHaveEpisodes: false,
          isSeries: false,
          isEpisode: false,
        },
        series: null,
        watchOptionsByCategory: {
          categorizedWatchOptionsList: [
            {
              watchOptions: [
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.hulu",
                    categoryType: "SUBSCRIPTION",
                    description: {
                      value: "on Hulu.com and the Hulu app",
                    },
                    name: {
                      value: "Hulu",
                    },
                    refTagFragment: "hulu",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/454c994e-acf4-49ef-83d5-8fa06c8a5eab._V1_.png",
                        width: 512,
                        height: 512,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/67022a68-fde3-4078-8bd0-0ebc72efe8ad._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Hulu",
                  },
                  description: {
                    value: "on Hulu.com and the Hulu app",
                  },
                  shortDescription: null,
                  link: "http://www.hulu.com?d=Amazon",
                },
              ],
            },
            {
              watchOptions: [
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.prime_video",
                    categoryType: "RENT_OR_BUY",
                    description: null,
                    name: {
                      value: "Prime Video",
                    },
                    refTagFragment: "pvt_aiv",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/4c192978-331f-429e-9c97-02d5ed9d436e._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/b63dfed5-e4fa-434c-be14-d2dc2b60fbae._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Prime Video",
                  },
                  description: {
                    value: "rent/buy from $3.99",
                  },
                  shortDescription: {
                    value: "from $3.99",
                  },
                  link: "aiv://aiv/view?gti=amzn1.dv.gti.84aa074e-d217-477f-9242-3e62c961c14b",
                },
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.amazon",
                    categoryType: "RENT_OR_BUY",
                    description: {
                      value: "Amazon",
                    },
                    name: {
                      value: "Amazon",
                    },
                    refTagFragment: "amazon",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/b26d1036-b801-4e57-8ce8-70c40cea751f._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/b6a99b0d-356a-4dae-9ffc-248e123b204b._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Search on Amazon",
                  },
                  description: {
                    value: "search for Blu-ray and DVD",
                  },
                  shortDescription: {
                    value: "search Amazon",
                  },
                  link: "com.amazon.mobile.shopping://amazon.com/s?i=movies-tv&k=Fight+Club",
                },
              ],
            },
          ],
        },
        latestTrailer: {
          id: "vi123455001",
          contentType: {
            id: "amzn1.imdb.video.contenttype.trailer",
            displayName: {
              value: "Trailer",
            },
          },
          createdDate: "2024-09-23T15:17:08.166Z",
          description: {
            value:
              "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
          },
          primaryImage: {
            imageUrl:
              "https://m.media-amazon.com/images/M/MV5BMzVjNDRkMTYtMTczYS00ZTEyLWI3NTQtYTc3NWE4MTY3OGNkXkEyXkFqcGdeQWRvb2xpbmhk._V1_.jpg",
            imageWidth: 1408,
            imageHeight: 792,
          },
          primaryTitleFragment: {
            id: "tt0137523",
            isAdult: false,
            canRateTitle: {
              isRatable: true,
            },
            originalTitleText: {
              text: "Fight Club",
            },
            primaryImage: {
              id: "rm1412004864",
              imageUrl:
                "https://m.media-amazon.com/images/M/MV5BOTgyOGQ1NDItNGU3Ny00MjU3LTg2YWEtNmEyYjBiMjI1Y2M5XkEyXkFqcGc@._V1_.jpg",
              imageWidth: 1066,
              imageHeight: 1600,
            },
            ratingsSummary: {
              aggregateRating: 8.8,
              topRanking: {
                rank: 13,
              },
              voteCount: 2384520,
            },
            releaseYear: {
              year: 1999,
              endYear: null,
            },
            titleEpisode: null,
            titleText: {
              text: "Fight Club",
            },
            titleType: {
              id: "movie",
              text: "Movie",
              displayableProperty: {
                value: {
                  plainText: "",
                },
              },
              categories: [
                {
                  id: "movie",
                  text: "Movie",
                  value: "movie",
                },
              ],
              canHaveEpisodes: false,
              isSeries: false,
              isEpisode: false,
            },
            series: null,
          },
          name: {
            value: "Official Trailer - 20th Anniversary",
          },
          runtime: {
            unit: "SECONDS",
            value: 138,
          },
        },
        plot: {
          id: "po1060063",
          author: null,
          plotText: {
            plainText:
              "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
          },
          correctionLink: {
            url: "https://m.imdb.com/title/tt0137523/contribution/plot/po1060063/edit",
          },
          reportingLink: {
            url: "https://m.imdb.com/title/tt0137523/contribution/plot/po1060063/report",
          },
        },
        releaseDate: {
          day: 15,
          month: 10,
          year: 1999,
          country: {
            id: "US",
            text: "United States",
          },
          restriction: null,
          releaseAttributes: [],
        },
        titleCertificate: {
          rating: "R",
          certificateCountry: {
            id: "US",
            text: "United States",
          },
          ratingReason:
            "Rated R for disturbing and graphic depiction of violent anti-social behavior, sexuality and language",
        },
        titleRuntime: {
          seconds: 8340,
          displayableProperty: {
            qualifiersInMarkdownList: null,
          },
        },
      },
      {
        id: "tt15239678",
        isAdult: false,
        canRateTitle: {
          isRatable: true,
        },
        originalTitleText: {
          text: "Dune: Part Two",
        },
        primaryImage: {
          id: "rm1391346433",
          imageUrl:
            "https://m.media-amazon.com/images/M/MV5BNTc0YmQxMjEtODI5MC00NjFiLTlkMWUtOGQ5NjFmYWUyZGJhXkEyXkFqcGc@._V1_.jpg",
          imageWidth: 2764,
          imageHeight: 4096,
        },
        ratingsSummary: {
          aggregateRating: 8.5,
          topRanking: {
            rank: 47,
          },
          voteCount: 530015,
        },
        releaseYear: {
          year: 2024,
          endYear: null,
        },
        titleEpisode: null,
        titleText: {
          text: "Dune: Part Two",
        },
        titleType: {
          id: "movie",
          text: "Movie",
          displayableProperty: {
            value: {
              plainText: "",
            },
          },
          categories: [
            {
              id: "movie",
              text: "Movie",
              value: "movie",
            },
          ],
          canHaveEpisodes: false,
          isSeries: false,
          isEpisode: false,
        },
        series: null,
        watchOptionsByCategory: {
          categorizedWatchOptionsList: [
            {
              watchOptions: [
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.prime_video.hbomaxus",
                    categoryType: "SUBSCRIPTION",
                    description: {
                      value: "with Prime Video Channels",
                    },
                    name: {
                      value: "Max",
                    },
                    refTagFragment: "hbomax",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/3e152962-a236-46be-aa94-2a48296d7129._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/7cdcbf4e-6afe-4136-be75-cd6f2d237c63._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Max",
                  },
                  description: {
                    value: "with Prime Video Channels",
                  },
                  shortDescription: null,
                  link: "aiv://aiv/view?gti=amzn1.dv.gti.9392c069-96f9-421b-ac7a-275308e1327a",
                },
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.hbo_max",
                    categoryType: "SUBSCRIPTION",
                    description: {
                      value: "with subscription",
                    },
                    name: {
                      value: "Max",
                    },
                    refTagFragment: "hbomax",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/7660eee6-3846-43e9-aadd-bff7846554fb._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/609ae2bb-6e79-45ae-bd76-75da3afac406._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Max",
                  },
                  description: {
                    value: "with subscription",
                  },
                  shortDescription: null,
                  link: "https://play.max.com/video/watch/914be9f6-e1b2-4f5f-aa34-de07a2a3423b",
                },
              ],
            },
            {
              watchOptions: [
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.prime_video",
                    categoryType: "RENT_OR_BUY",
                    description: null,
                    name: {
                      value: "Prime Video",
                    },
                    refTagFragment: "pvt_aiv",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/4c192978-331f-429e-9c97-02d5ed9d436e._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/b63dfed5-e4fa-434c-be14-d2dc2b60fbae._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Prime Video",
                  },
                  description: {
                    value: "rent/buy from $3.99",
                  },
                  shortDescription: {
                    value: "from $3.99",
                  },
                  link: "aiv://aiv/view?gti=amzn1.dv.gti.9392c069-96f9-421b-ac7a-275308e1327a",
                },
              ],
            },
          ],
        },
        latestTrailer: {
          id: "vi3332425241",
          contentType: {
            id: "amzn1.imdb.video.contenttype.trailer",
            displayName: {
              value: "Trailer",
            },
          },
          createdDate: "2024-02-28T16:15:17.343Z",
          description: {
            value:
              "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir becomes troubled by visions of a dark future.",
          },
          primaryImage: {
            imageUrl:
              "https://m.media-amazon.com/images/M/MV5BYTg4Mjc1MTktZmMwNy00YWY0LTk4MGEtNTM0NDU3YWZmMDQ2XkEyXkFqcGdeQXZ3ZXNsZXk@._V1_.jpg",
            imageWidth: 1681,
            imageHeight: 946,
          },
          primaryTitleFragment: {
            id: "tt15239678",
            isAdult: false,
            canRateTitle: {
              isRatable: true,
            },
            originalTitleText: {
              text: "Dune: Part Two",
            },
            primaryImage: {
              id: "rm1391346433",
              imageUrl:
                "https://m.media-amazon.com/images/M/MV5BNTc0YmQxMjEtODI5MC00NjFiLTlkMWUtOGQ5NjFmYWUyZGJhXkEyXkFqcGc@._V1_.jpg",
              imageWidth: 2764,
              imageHeight: 4096,
            },
            ratingsSummary: {
              aggregateRating: 8.5,
              topRanking: {
                rank: 47,
              },
              voteCount: 530015,
            },
            releaseYear: {
              year: 2024,
              endYear: null,
            },
            titleEpisode: null,
            titleText: {
              text: "Dune: Part Two",
            },
            titleType: {
              id: "movie",
              text: "Movie",
              displayableProperty: {
                value: {
                  plainText: "",
                },
              },
              categories: [
                {
                  id: "movie",
                  text: "Movie",
                  value: "movie",
                },
              ],
              canHaveEpisodes: false,
              isSeries: false,
              isEpisode: false,
            },
            series: null,
          },
          name: {
            value: "Final Trailer",
          },
          runtime: {
            unit: "SECONDS",
            value: 31,
          },
        },
        plot: {
          id: "po7013293",
          author: null,
          plotText: {
            plainText:
              "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
          },
          correctionLink: {
            url: "https://m.imdb.com/title/tt15239678/contribution/plot/po7013293/edit",
          },
          reportingLink: {
            url: "https://m.imdb.com/title/tt15239678/contribution/plot/po7013293/report",
          },
        },
        releaseDate: {
          day: 1,
          month: 3,
          year: 2024,
          country: {
            id: "US",
            text: "United States",
          },
          restriction: null,
          releaseAttributes: [],
        },
        titleCertificate: {
          rating: "PG-13",
          certificateCountry: {
            id: "US",
            text: "United States",
          },
          ratingReason:
            "Rated PG-13 for sequences of strong violence, some suggestive material and brief strong language.",
        },
        titleRuntime: {
          seconds: 9960,
          displayableProperty: {
            qualifiersInMarkdownList: null,
          },
        },
      },
      {
        id: "tt1877830",
        isAdult: false,
        canRateTitle: {
          isRatable: true,
        },
        originalTitleText: {
          text: "The Batman",
        },
        primaryImage: {
          id: "rm3486063105",
          imageUrl:
            "https://m.media-amazon.com/images/M/MV5BMmU5NGJlMzAtMGNmOC00YjJjLTgyMzUtNjAyYmE4Njg5YWMyXkEyXkFqcGc@._V1_.jpg",
          imageWidth: 2764,
          imageHeight: 4096,
        },
        ratingsSummary: {
          aggregateRating: 7.8,
          topRanking: {
            rank: 645,
          },
          voteCount: 823608,
        },
        releaseYear: {
          year: 2022,
          endYear: null,
        },
        titleEpisode: null,
        titleText: {
          text: "The Batman",
        },
        titleType: {
          id: "movie",
          text: "Movie",
          displayableProperty: {
            value: {
              plainText: "",
            },
          },
          categories: [
            {
              id: "movie",
              text: "Movie",
              value: "movie",
            },
          ],
          canHaveEpisodes: false,
          isSeries: false,
          isEpisode: false,
        },
        series: null,
        watchOptionsByCategory: {
          categorizedWatchOptionsList: [
            {
              watchOptions: [
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.prime_video.hbomaxus",
                    categoryType: "SUBSCRIPTION",
                    description: {
                      value: "with Prime Video Channels",
                    },
                    name: {
                      value: "Max",
                    },
                    refTagFragment: "hbomax",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/3e152962-a236-46be-aa94-2a48296d7129._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/7cdcbf4e-6afe-4136-be75-cd6f2d237c63._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Max",
                  },
                  description: {
                    value: "with Prime Video Channels",
                  },
                  shortDescription: null,
                  link: "aiv://aiv/view?gti=amzn1.dv.gti.f50f8c44-66ba-4e83-94bb-82fb40c52159",
                },
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.hbo_max",
                    categoryType: "SUBSCRIPTION",
                    description: {
                      value: "with subscription",
                    },
                    name: {
                      value: "Max",
                    },
                    refTagFragment: "hbomax",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/7660eee6-3846-43e9-aadd-bff7846554fb._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/609ae2bb-6e79-45ae-bd76-75da3afac406._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Max",
                  },
                  description: {
                    value: "with subscription",
                  },
                  shortDescription: null,
                  link: "https://play.max.com/video/watch/306aa55d-38c5-4614-b75e-ca7433887790",
                },
              ],
            },
            {
              watchOptions: [
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.prime_video",
                    categoryType: "RENT_OR_BUY",
                    description: null,
                    name: {
                      value: "Prime Video",
                    },
                    refTagFragment: "pvt_aiv",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/4c192978-331f-429e-9c97-02d5ed9d436e._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/b63dfed5-e4fa-434c-be14-d2dc2b60fbae._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Prime Video",
                  },
                  description: {
                    value: "rent/buy from $3.99",
                  },
                  shortDescription: {
                    value: "from $3.99",
                  },
                  link: "aiv://aiv/view?gti=amzn1.dv.gti.f50f8c44-66ba-4e83-94bb-82fb40c52159",
                },
              ],
            },
          ],
        },
        latestTrailer: {
          id: "vi3215114777",
          contentType: {
            id: "amzn1.imdb.video.contenttype.trailer",
            displayName: {
              value: "Trailer",
            },
          },
          createdDate: "2022-04-12T21:09:58.105Z",
          description: {
            value:
              "When the Riddler, a sadistic serial killer, begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
          },
          primaryImage: {
            imageUrl:
              "https://m.media-amazon.com/images/M/MV5BMTdjOTQ1NDItYjBkYy00OTA3LTk3NDItOTk5YTg4NGZmYmZhXkEyXkFqcGdeQWRpZWdtb25n._V1_.jpg",
            imageWidth: 1920,
            imageHeight: 1080,
          },
          primaryTitleFragment: {
            id: "tt1877830",
            isAdult: false,
            canRateTitle: {
              isRatable: true,
            },
            originalTitleText: {
              text: "The Batman",
            },
            primaryImage: {
              id: "rm3486063105",
              imageUrl:
                "https://m.media-amazon.com/images/M/MV5BMmU5NGJlMzAtMGNmOC00YjJjLTgyMzUtNjAyYmE4Njg5YWMyXkEyXkFqcGc@._V1_.jpg",
              imageWidth: 2764,
              imageHeight: 4096,
            },
            ratingsSummary: {
              aggregateRating: 7.8,
              topRanking: {
                rank: 645,
              },
              voteCount: 823608,
            },
            releaseYear: {
              year: 2022,
              endYear: null,
            },
            titleEpisode: null,
            titleText: {
              text: "The Batman",
            },
            titleType: {
              id: "movie",
              text: "Movie",
              displayableProperty: {
                value: {
                  plainText: "",
                },
              },
              categories: [
                {
                  id: "movie",
                  text: "Movie",
                  value: "movie",
                },
              ],
              canHaveEpisodes: false,
              isSeries: false,
              isEpisode: false,
            },
            series: null,
          },
          name: {
            value: "Official Trailer",
          },
          runtime: {
            unit: "SECONDS",
            value: 30,
          },
        },
        plot: {
          id: "po2117916",
          author: null,
          plotText: {
            plainText:
              "When a sadistic serial killer begins murdering key political figures in Gotham, The Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
          },
          correctionLink: {
            url: "https://m.imdb.com/title/tt1877830/contribution/plot/po2117916/edit",
          },
          reportingLink: {
            url: "https://m.imdb.com/title/tt1877830/contribution/plot/po2117916/report",
          },
        },
        releaseDate: {
          day: 4,
          month: 3,
          year: 2022,
          country: {
            id: "US",
            text: "United States",
          },
          restriction: null,
          releaseAttributes: [],
        },
        titleCertificate: {
          rating: "PG-13",
          certificateCountry: {
            id: "US",
            text: "United States",
          },
          ratingReason:
            "Rated PG-13 for strong violent and disturbing content, drug content, strong language, and some suggestive material",
        },
        titleRuntime: {
          seconds: 10560,
          displayableProperty: {
            qualifiersInMarkdownList: null,
          },
        },
      },
      {
        id: "tt0111161",
        isAdult: false,
        canRateTitle: {
          isRatable: true,
        },
        originalTitleText: {
          text: "The Shawshank Redemption",
        },
        primaryImage: {
          id: "rm1690056449",
          imageUrl:
            "https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_.jpg",
          imageWidth: 1200,
          imageHeight: 1800,
        },
        ratingsSummary: {
          aggregateRating: 9.3,
          topRanking: {
            rank: 1,
          },
          voteCount: 2952528,
        },
        releaseYear: {
          year: 1994,
          endYear: null,
        },
        titleEpisode: null,
        titleText: {
          text: "The Shawshank Redemption",
        },
        titleType: {
          id: "movie",
          text: "Movie",
          displayableProperty: {
            value: {
              plainText: "",
            },
          },
          categories: [
            {
              id: "movie",
              text: "Movie",
              value: "movie",
            },
          ],
          canHaveEpisodes: false,
          isSeries: false,
          isEpisode: false,
        },
        series: null,
        watchOptionsByCategory: {
          categorizedWatchOptionsList: [
            {
              watchOptions: [
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.tubi",
                    categoryType: "SUBSCRIPTION",
                    description: {
                      value: "Go to tubitv.com",
                    },
                    name: {
                      value: "Tubi",
                    },
                    refTagFragment: "tubi",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/ad111408-8fc2-4f4c-9094-3c2a1cb7048c._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/827c565d-983a-4f0e-8927-d107d1f30a56._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Tubi",
                  },
                  description: {
                    value: "Go to tubitv.com",
                  },
                  shortDescription: null,
                  link: "https://tubitv.com/",
                },
              ],
            },
            {
              watchOptions: [
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.prime_video",
                    categoryType: "RENT_OR_BUY",
                    description: null,
                    name: {
                      value: "Prime Video",
                    },
                    refTagFragment: "pvt_aiv",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/4c192978-331f-429e-9c97-02d5ed9d436e._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/b63dfed5-e4fa-434c-be14-d2dc2b60fbae._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Prime Video",
                  },
                  description: {
                    value: "rent/buy from $3.99",
                  },
                  shortDescription: {
                    value: "from $3.99",
                  },
                  link: "aiv://aiv/view?gti=amzn1.dv.gti.20b4c3cf-b703-aebb-41bd-0dc683f8c0c8",
                },
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.amazon",
                    categoryType: "RENT_OR_BUY",
                    description: {
                      value: "Amazon",
                    },
                    name: {
                      value: "Amazon",
                    },
                    refTagFragment: "amazon",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/b26d1036-b801-4e57-8ce8-70c40cea751f._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/b6a99b0d-356a-4dae-9ffc-248e123b204b._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Search on Amazon",
                  },
                  description: {
                    value: "search for Blu-ray and DVD",
                  },
                  shortDescription: {
                    value: "search Amazon",
                  },
                  link: "com.amazon.mobile.shopping://amazon.com/s?i=movies-tv&k=The+Shawshank+Redemption",
                },
              ],
            },
          ],
        },
        latestTrailer: {
          id: "vi3877612057",
          contentType: {
            id: "amzn1.imdb.video.contenttype.trailer",
            displayName: {
              value: "Trailer",
            },
          },
          createdDate: "2014-03-05T14:13:19Z",
          description: {
            value:
              "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.\r\n",
          },
          primaryImage: {
            imageUrl:
              "https://m.media-amazon.com/images/M/MV5BNjQ2NDA3MDcxMF5BMl5BanBnXkFtZTgwMjE5NTU0NzE@._V1_.jpg",
            imageWidth: 640,
            imageHeight: 480,
          },
          primaryTitleFragment: {
            id: "tt0111161",
            isAdult: false,
            canRateTitle: {
              isRatable: true,
            },
            originalTitleText: {
              text: "The Shawshank Redemption",
            },
            primaryImage: {
              id: "rm1690056449",
              imageUrl:
                "https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_.jpg",
              imageWidth: 1200,
              imageHeight: 1800,
            },
            ratingsSummary: {
              aggregateRating: 9.3,
              topRanking: {
                rank: 1,
              },
              voteCount: 2952528,
            },
            releaseYear: {
              year: 1994,
              endYear: null,
            },
            titleEpisode: null,
            titleText: {
              text: "The Shawshank Redemption",
            },
            titleType: {
              id: "movie",
              text: "Movie",
              displayableProperty: {
                value: {
                  plainText: "",
                },
              },
              categories: [
                {
                  id: "movie",
                  text: "Movie",
                  value: "movie",
                },
              ],
              canHaveEpisodes: false,
              isSeries: false,
              isEpisode: false,
            },
            series: null,
          },
          name: {
            value: "Official Trailer",
          },
          runtime: {
            unit: "SECONDS",
            value: 131,
          },
        },
        plot: {
          id: "po1124508",
          author: null,
          plotText: {
            plainText:
              "A banker convicted of uxoricide forms a friendship over a quarter century with a hardened convict, while maintaining his innocence and trying to remain hopeful through simple compassion.",
          },
          correctionLink: {
            url: "https://m.imdb.com/title/tt0111161/contribution/plot/po1124508/edit",
          },
          reportingLink: {
            url: "https://m.imdb.com/title/tt0111161/contribution/plot/po1124508/report",
          },
        },
        releaseDate: {
          day: 14,
          month: 10,
          year: 1994,
          country: {
            id: "US",
            text: "United States",
          },
          restriction: null,
          releaseAttributes: [],
        },
        titleCertificate: {
          rating: "R",
          certificateCountry: {
            id: "US",
            text: "United States",
          },
          ratingReason: "Rated R for language and prison violence",
        },
        titleRuntime: {
          seconds: 8520,
          displayableProperty: {
            qualifiersInMarkdownList: null,
          },
        },
      },
      {
        id: "tt0944947",
        isAdult: false,
        canRateTitle: {
          isRatable: true,
        },
        originalTitleText: {
          text: "Game of Thrones",
        },
        primaryImage: {
          id: "rm3885121281",
          imageUrl:
            "https://m.media-amazon.com/images/M/MV5BOGY3NTg1ODMtOGIzZS00YWFiLTgzYzktNzBiYWZkYjcwNGRhXkEyXkFqcGc@._V1_.jpg",
          imageWidth: 1000,
          imageHeight: 1500,
        },
        ratingsSummary: {
          aggregateRating: 9.2,
          topRanking: {
            rank: 13,
          },
          voteCount: 2355124,
        },
        releaseYear: {
          year: 2011,
          endYear: 2019,
        },
        titleEpisode: null,
        titleText: {
          text: "Game of Thrones",
        },
        titleType: {
          id: "tvSeries",
          text: "TV Series",
          displayableProperty: {
            value: {
              plainText: "TV Series",
            },
          },
          categories: [
            {
              id: "tv",
              text: "TV",
              value: "tv",
            },
          ],
          canHaveEpisodes: true,
          isSeries: true,
          isEpisode: false,
        },
        series: null,
        watchOptionsByCategory: {
          categorizedWatchOptionsList: [
            {
              watchOptions: [
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.prime_video.hbomaxus",
                    categoryType: "SUBSCRIPTION",
                    description: {
                      value: "with Prime Video Channels",
                    },
                    name: {
                      value: "Max",
                    },
                    refTagFragment: "hbomax",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/3e152962-a236-46be-aa94-2a48296d7129._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/7cdcbf4e-6afe-4136-be75-cd6f2d237c63._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Max",
                  },
                  description: {
                    value: "S1-8 with Prime Video Channels",
                  },
                  shortDescription: {
                    value: "S1-8",
                  },
                  link: "aiv://aiv/view?gti=amzn1.dv.gti.1ad8b490-650c-4a68-ad26-c8041d756712",
                },
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.hbo_max",
                    categoryType: "SUBSCRIPTION",
                    description: {
                      value: "with subscription",
                    },
                    name: {
                      value: "Max",
                    },
                    refTagFragment: "hbomax",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/7660eee6-3846-43e9-aadd-bff7846554fb._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/609ae2bb-6e79-45ae-bd76-75da3afac406._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Max",
                  },
                  description: {
                    value: "S1-8 with subscription",
                  },
                  shortDescription: {
                    value: "S1-8",
                  },
                  link: "https://play.max.com/show/4f6b4985-2dc9-4ab6-ac79-d60f0860b0ac",
                },
              ],
            },
            {
              watchOptions: [
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.prime_video",
                    categoryType: "RENT_OR_BUY",
                    description: null,
                    name: {
                      value: "Prime Video",
                    },
                    refTagFragment: "pvt_aiv",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/4c192978-331f-429e-9c97-02d5ed9d436e._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/b63dfed5-e4fa-434c-be14-d2dc2b60fbae._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Prime Video",
                  },
                  description: {
                    value: "buy from $17.94",
                  },
                  shortDescription: {
                    value: "from $17.94",
                  },
                  link: "aiv://aiv/view?gti=amzn1.dv.gti.1ad8b490-650c-4a68-ad26-c8041d756712",
                },
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.amazon",
                    categoryType: "RENT_OR_BUY",
                    description: {
                      value: "Amazon",
                    },
                    name: {
                      value: "Amazon",
                    },
                    refTagFragment: "amazon",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/b26d1036-b801-4e57-8ce8-70c40cea751f._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/b6a99b0d-356a-4dae-9ffc-248e123b204b._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Search on Amazon",
                  },
                  description: {
                    value: "search for Blu-ray and DVD",
                  },
                  shortDescription: {
                    value: "search Amazon",
                  },
                  link: "com.amazon.mobile.shopping://amazon.com/s?i=movies-tv&k=Game+of+Thrones",
                },
              ],
            },
          ],
        },
        latestTrailer: {
          id: "vi1988544281",
          contentType: {
            id: "amzn1.imdb.video.contenttype.trailer",
            displayName: {
              value: "Trailer",
            },
          },
          createdDate: "2023-08-06T13:15:10.905Z",
          description: {
            value: "Game Of Thrones: Complete Series",
          },
          primaryImage: {
            imageUrl:
              "https://m.media-amazon.com/images/M/MV5BNmFiYjA2ZjgtYjA3YS00NjUzLWE2MGMtYzlmYzI0ZTRmYTA4XkEyXkFqcGdeQVRoaXJkUGFydHlJbmdlc3Rpb25Xb3JrZmxvdw@@._V1_.jpg",
            imageWidth: 649,
            imageHeight: 365,
          },
          primaryTitleFragment: {
            id: "tt0944947",
            isAdult: false,
            canRateTitle: {
              isRatable: true,
            },
            originalTitleText: {
              text: "Game of Thrones",
            },
            primaryImage: {
              id: "rm3885121281",
              imageUrl:
                "https://m.media-amazon.com/images/M/MV5BOGY3NTg1ODMtOGIzZS00YWFiLTgzYzktNzBiYWZkYjcwNGRhXkEyXkFqcGc@._V1_.jpg",
              imageWidth: 1000,
              imageHeight: 1500,
            },
            ratingsSummary: {
              aggregateRating: 9.2,
              topRanking: {
                rank: 13,
              },
              voteCount: 2355124,
            },
            releaseYear: {
              year: 2011,
              endYear: 2019,
            },
            titleEpisode: null,
            titleText: {
              text: "Game of Thrones",
            },
            titleType: {
              id: "tvSeries",
              text: "TV Series",
              displayableProperty: {
                value: {
                  plainText: "TV Series",
                },
              },
              categories: [
                {
                  id: "tv",
                  text: "TV",
                  value: "tv",
                },
              ],
              canHaveEpisodes: true,
              isSeries: true,
              isEpisode: false,
            },
            series: null,
          },
          name: {
            value: "Game Of Thrones: Complete Series",
          },
          runtime: {
            unit: "SECONDS",
            value: 151,
          },
        },
        plot: {
          id: "po2596634",
          author: null,
          plotText: {
            plainText:
              "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
          },
          correctionLink: {
            url: "https://m.imdb.com/title/tt0944947/contribution/plot/po2596634/edit",
          },
          reportingLink: {
            url: "https://m.imdb.com/title/tt0944947/contribution/plot/po2596634/report",
          },
        },
        releaseDate: {
          day: 17,
          month: 4,
          year: 2011,
          country: {
            id: "US",
            text: "United States",
          },
          restriction: null,
          releaseAttributes: [],
        },
        titleCertificate: {
          rating: "TV-MA",
          certificateCountry: {
            id: "US",
            text: "United States",
          },
          ratingReason: null,
        },
        titleRuntime: {
          seconds: 3600,
          displayableProperty: {
            qualifiersInMarkdownList: null,
          },
        },
      },
      {
        id: "tt33609561",
        isAdult: false,
        canRateTitle: {
          isRatable: true,
        },
        originalTitleText: {
          text: "Zindaginama",
        },
        primaryImage: {
          id: "rm420700161",
          imageUrl:
            "https://m.media-amazon.com/images/M/MV5BYjhmMjkwMzQtNDkxNS00Nzc0LWI1MzQtNTQzMzE2NzQzMjc3XkEyXkFqcGc@._V1_.jpg",
          imageWidth: 1080,
          imageHeight: 1080,
        },
        ratingsSummary: {
          aggregateRating: 10,
          topRanking: null,
          voteCount: 3148,
        },
        releaseYear: {
          year: 2024,
          endYear: null,
        },
        titleEpisode: null,
        titleText: {
          text: "Zindaginama",
        },
        titleType: {
          id: "tvSeries",
          text: "TV Series",
          displayableProperty: {
            value: {
              plainText: "TV Series",
            },
          },
          categories: [
            {
              id: "tv",
              text: "TV",
              value: "tv",
            },
          ],
          canHaveEpisodes: true,
          isSeries: true,
          isEpisode: false,
        },
        series: null,
        watchOptionsByCategory: {
          categorizedWatchOptionsList: [],
        },
        latestTrailer: null,
        plot: {
          id: "po8218577",
          author: null,
          plotText: {
            plainText:
              "Six interlinked stories tackle India's mental health stigma, encouraging open dialogue and sensitivity towards those struggling with psychological issues.",
          },
          correctionLink: {
            url: "https://m.imdb.com/title/tt33609561/contribution/plot/po8218577/edit",
          },
          reportingLink: {
            url: "https://m.imdb.com/title/tt33609561/contribution/plot/po8218577/report",
          },
        },
        releaseDate: {
          day: 10,
          month: 10,
          year: 2024,
          country: {
            id: "IN",
            text: "India",
          },
          restriction: null,
          releaseAttributes: [],
        },
        titleCertificate: null,
        titleRuntime: null,
      },
      {
        id: "tt22375054",
        isAdult: false,
        canRateTitle: {
          isRatable: true,
        },
        originalTitleText: {
          text: "Strange Darling",
        },
        primaryImage: {
          id: "rm267154433",
          imageUrl:
            "https://m.media-amazon.com/images/M/MV5BNDE2OTQ0NjEtNmEwMC00NmRjLThiOGMtN2M1N2Q2YWY0NGY4XkEyXkFqcGc@._V1_.jpg",
          imageWidth: 1080,
          imageHeight: 1600,
        },
        ratingsSummary: {
          aggregateRating: 7.2,
          topRanking: null,
          voteCount: 18265,
        },
        releaseYear: {
          year: 2023,
          endYear: null,
        },
        titleEpisode: null,
        titleText: {
          text: "Strange Darling",
        },
        titleType: {
          id: "movie",
          text: "Movie",
          displayableProperty: {
            value: {
              plainText: "",
            },
          },
          categories: [
            {
              id: "movie",
              text: "Movie",
              value: "movie",
            },
          ],
          canHaveEpisodes: false,
          isSeries: false,
          isEpisode: false,
        },
        series: null,
        watchOptionsByCategory: {
          categorizedWatchOptionsList: [
            {
              watchOptions: [
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.prime_video",
                    categoryType: "RENT_OR_BUY",
                    description: null,
                    name: {
                      value: "Prime Video",
                    },
                    refTagFragment: "pvt_aiv",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/4c192978-331f-429e-9c97-02d5ed9d436e._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/b63dfed5-e4fa-434c-be14-d2dc2b60fbae._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Prime Video",
                  },
                  description: {
                    value: "rent/buy from $5.99",
                  },
                  shortDescription: {
                    value: "from $5.99",
                  },
                  link: "aiv://aiv/view?gti=amzn1.dv.gti.fcc29189-00b3-451b-8fb1-accdd123387f",
                },
              ],
            },
          ],
        },
        latestTrailer: {
          id: "vi4214539801",
          contentType: {
            id: "amzn1.imdb.video.contenttype.trailer",
            displayName: {
              value: "Trailer",
            },
          },
          createdDate: "2024-06-13T15:34:07.751Z",
          description: {
            value: "One day in the twisted love life of a serial killer.",
          },
          primaryImage: {
            imageUrl:
              "https://m.media-amazon.com/images/M/MV5BOGRiZWU3Y2YtZWZhNC00ZTQ3LTk2NmQtNTJkMDMxOWE2MTM2XkEyXkFqcGdeQXRyYW5zY29kZS13b3JrZmxvdw@@._V1_.jpg",
            imageWidth: 1920,
            imageHeight: 1080,
          },
          primaryTitleFragment: {
            id: "tt22375054",
            isAdult: false,
            canRateTitle: {
              isRatable: true,
            },
            originalTitleText: {
              text: "Strange Darling",
            },
            primaryImage: {
              id: "rm267154433",
              imageUrl:
                "https://m.media-amazon.com/images/M/MV5BNDE2OTQ0NjEtNmEwMC00NmRjLThiOGMtN2M1N2Q2YWY0NGY4XkEyXkFqcGc@._V1_.jpg",
              imageWidth: 1080,
              imageHeight: 1600,
            },
            ratingsSummary: {
              aggregateRating: 7.2,
              topRanking: null,
              voteCount: 18265,
            },
            releaseYear: {
              year: 2023,
              endYear: null,
            },
            titleEpisode: null,
            titleText: {
              text: "Strange Darling",
            },
            titleType: {
              id: "movie",
              text: "Movie",
              displayableProperty: {
                value: {
                  plainText: "",
                },
              },
              categories: [
                {
                  id: "movie",
                  text: "Movie",
                  value: "movie",
                },
              ],
              canHaveEpisodes: false,
              isSeries: false,
              isEpisode: false,
            },
            series: null,
          },
          name: {
            value: "Official Trailer",
          },
          runtime: {
            unit: "SECONDS",
            value: 107,
          },
        },
        plot: {
          id: "po6837828",
          author: null,
          plotText: {
            plainText:
              "Nothing is what it seems when a twisted one-night stand spirals into a serial killer's vicious murder spree.",
          },
          correctionLink: {
            url: "https://m.imdb.com/title/tt22375054/contribution/plot/po6837828/edit",
          },
          reportingLink: {
            url: "https://m.imdb.com/title/tt22375054/contribution/plot/po6837828/report",
          },
        },
        releaseDate: {
          day: 23,
          month: 8,
          year: 2024,
          country: {
            id: "US",
            text: "United States",
          },
          restriction: null,
          releaseAttributes: [],
        },
        titleCertificate: {
          rating: "R",
          certificateCountry: {
            id: "US",
            text: "United States",
          },
          ratingReason:
            "Rated R for strong/bloody violent content, sexual material, drug use and language.",
        },
        titleRuntime: {
          seconds: 5820,
          displayableProperty: {
            qualifiersInMarkdownList: [
              {
                plainText: "United States",
              },
            ],
          },
        },
      },
      {
        id: "tt9813792",
        isAdult: false,
        canRateTitle: {
          isRatable: true,
        },
        originalTitleText: {
          text: "From",
        },
        primaryImage: {
          id: "rm2002022145",
          imageUrl:
            "https://m.media-amazon.com/images/M/MV5BYzM5ZWMxOGEtZjEyMC00YjQ0LThiYjEtZjVkZGEzN2NlOGEwXkEyXkFqcGc@._V1_.jpg",
          imageWidth: 1296,
          imageHeight: 1920,
        },
        ratingsSummary: {
          aggregateRating: 7.8,
          topRanking: {
            rank: 1181,
          },
          voteCount: 94794,
        },
        releaseYear: {
          year: 2022,
          endYear: null,
        },
        titleEpisode: null,
        titleText: {
          text: "From",
        },
        titleType: {
          id: "tvSeries",
          text: "TV Series",
          displayableProperty: {
            value: {
              plainText: "TV Series",
            },
          },
          categories: [
            {
              id: "tv",
              text: "TV",
              value: "tv",
            },
          ],
          canHaveEpisodes: true,
          isSeries: true,
          isEpisode: false,
        },
        series: null,
        watchOptionsByCategory: {
          categorizedWatchOptionsList: [
            {
              watchOptions: [
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.epix",
                    categoryType: "SUBSCRIPTION",
                    description: {
                      value: "MGM+ with subscription",
                    },
                    name: {
                      value: "MGM+",
                    },
                    refTagFragment: "epix",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/76b69991-2343-4544-8742-4a62f576c1fe._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/48d664d7-e2b4-423f-a1ed-454c1fbdbe83._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on MGM+",
                  },
                  description: {
                    value: "S1-3 MGM+ with subscription",
                  },
                  shortDescription: {
                    value: "S1-3",
                  },
                  link: "https://mgmplus.com/",
                },
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.prime_video.epix",
                    categoryType: "SUBSCRIPTION",
                    description: {
                      value: "with Prime Video Channels",
                    },
                    name: {
                      value: "MGM+",
                    },
                    refTagFragment: "pvc_epix",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/fc82fd58-5458-43a7-bf6e-2c220bc252bd._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/f93bcf1a-b541-4534-96c9-d75bf78ce8ce._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on MGM+",
                  },
                  description: {
                    value: "S1-3 with Prime Video Channels",
                  },
                  shortDescription: {
                    value: "S1-3",
                  },
                  link: "aiv://aiv/view?gti=amzn1.dv.gti.ff933791-74c5-43ef-917d-5cca9a7b1c74",
                },
              ],
            },
            {
              watchOptions: [
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.prime_video",
                    categoryType: "RENT_OR_BUY",
                    description: null,
                    name: {
                      value: "Prime Video",
                    },
                    refTagFragment: "pvt_aiv",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/4c192978-331f-429e-9c97-02d5ed9d436e._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/b63dfed5-e4fa-434c-be14-d2dc2b60fbae._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Prime Video",
                  },
                  description: {
                    value: "buy from $9.99",
                  },
                  shortDescription: {
                    value: "from $9.99",
                  },
                  link: "aiv://aiv/view?gti=amzn1.dv.gti.ff933791-74c5-43ef-917d-5cca9a7b1c74",
                },
              ],
            },
          ],
        },
        latestTrailer: {
          id: "vi4196386329",
          contentType: {
            id: "amzn1.imdb.video.contenttype.trailer",
            displayName: {
              value: "Trailer",
            },
          },
          createdDate: "2024-07-27T17:45:08.685Z",
          description: {
            value:
              "Unravel the mystery of a city in middle U.S.A. that imprisons everyone who enters. As the residents struggle to maintain a sense of normality and seek a way out, they must also survive the threats of the surrounding forest.",
          },
          primaryImage: {
            imageUrl:
              "https://m.media-amazon.com/images/M/MV5BOTM5NzFlNTktNWZmMC00ZTI0LWFiMzgtOGQ0NDIwMGNiYjcyXkEyXkFqcGdeQXZ3ZXNsZXk@._V1_.jpg",
            imageWidth: 4798,
            imageHeight: 2699,
          },
          primaryTitleFragment: {
            id: "tt9813792",
            isAdult: false,
            canRateTitle: {
              isRatable: true,
            },
            originalTitleText: {
              text: "From",
            },
            primaryImage: {
              id: "rm2002022145",
              imageUrl:
                "https://m.media-amazon.com/images/M/MV5BYzM5ZWMxOGEtZjEyMC00YjQ0LThiYjEtZjVkZGEzN2NlOGEwXkEyXkFqcGc@._V1_.jpg",
              imageWidth: 1296,
              imageHeight: 1920,
            },
            ratingsSummary: {
              aggregateRating: 7.8,
              topRanking: {
                rank: 1181,
              },
              voteCount: 94794,
            },
            releaseYear: {
              year: 2022,
              endYear: null,
            },
            titleEpisode: null,
            titleText: {
              text: "From",
            },
            titleType: {
              id: "tvSeries",
              text: "TV Series",
              displayableProperty: {
                value: {
                  plainText: "TV Series",
                },
              },
              categories: [
                {
                  id: "tv",
                  text: "TV",
                  value: "tv",
                },
              ],
              canHaveEpisodes: true,
              isSeries: true,
              isEpisode: false,
            },
            series: null,
          },
          name: {
            value: "Official Trailer - Season 3",
          },
          runtime: {
            unit: "SECONDS",
            value: 146,
          },
        },
        plot: {
          id: "po6450598",
          author: null,
          plotText: {
            plainText:
              "Unravel the mystery of a city in middle U.S.A. that imprisons everyone who enters. As the residents struggle to maintain a sense of normality and seek a way out, they must also survive the threats of the surrounding forest.",
          },
          correctionLink: {
            url: "https://m.imdb.com/title/tt9813792/contribution/plot/po6450598/edit",
          },
          reportingLink: {
            url: "https://m.imdb.com/title/tt9813792/contribution/plot/po6450598/report",
          },
        },
        releaseDate: {
          day: 20,
          month: 2,
          year: 2022,
          country: {
            id: "US",
            text: "United States",
          },
          restriction: null,
          releaseAttributes: [],
        },
        titleCertificate: {
          rating: "TV-MA",
          certificateCountry: {
            id: "US",
            text: "United States",
          },
          ratingReason: null,
        },
        titleRuntime: {
          seconds: 3120,
          displayableProperty: {
            qualifiersInMarkdownList: null,
          },
        },
      },
      {
        id: "tt0094721",
        isAdult: false,
        canRateTitle: {
          isRatable: true,
        },
        originalTitleText: {
          text: "Beetlejuice",
        },
        primaryImage: {
          id: "rm2212181760",
          imageUrl:
            "https://m.media-amazon.com/images/M/MV5BYjkwNzVlNDEtMTJlNy00OTdlLTljYWItM2RkZmZkYzY3YjM2XkEyXkFqcGc@._V1_.jpg",
          imageWidth: 1005,
          imageHeight: 1500,
        },
        ratingsSummary: {
          aggregateRating: 7.5,
          topRanking: {
            rank: 1322,
          },
          voteCount: 380671,
        },
        releaseYear: {
          year: 1988,
          endYear: null,
        },
        titleEpisode: null,
        titleText: {
          text: "Beetlejuice",
        },
        titleType: {
          id: "movie",
          text: "Movie",
          displayableProperty: {
            value: {
              plainText: "",
            },
          },
          categories: [
            {
              id: "movie",
              text: "Movie",
              value: "movie",
            },
          ],
          canHaveEpisodes: false,
          isSeries: false,
          isEpisode: false,
        },
        series: null,
        watchOptionsByCategory: {
          categorizedWatchOptionsList: [
            {
              watchOptions: [
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.prime_video.hbomaxus",
                    categoryType: "SUBSCRIPTION",
                    description: {
                      value: "with Prime Video Channels",
                    },
                    name: {
                      value: "Max",
                    },
                    refTagFragment: "hbomax",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/3e152962-a236-46be-aa94-2a48296d7129._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/7cdcbf4e-6afe-4136-be75-cd6f2d237c63._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Max",
                  },
                  description: {
                    value: "with Prime Video Channels",
                  },
                  shortDescription: null,
                  link: "aiv://aiv/view?gti=amzn1.dv.gti.a43cdd55-9694-4527-98c2-cebed7834774",
                },
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.hbo_max",
                    categoryType: "SUBSCRIPTION",
                    description: {
                      value: "with subscription",
                    },
                    name: {
                      value: "Max",
                    },
                    refTagFragment: "hbomax",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/7660eee6-3846-43e9-aadd-bff7846554fb._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/609ae2bb-6e79-45ae-bd76-75da3afac406._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Max",
                  },
                  description: {
                    value: "with subscription",
                  },
                  shortDescription: null,
                  link: "https://play.max.com/video/watch/1c402303-4b26-452f-ab66-550dc08e94c8",
                },
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.rokuchannel",
                    categoryType: "SUBSCRIPTION",
                    description: {
                      value: "Watch free on The Roku Channel",
                    },
                    name: {
                      value: "The Roku Channel",
                    },
                    refTagFragment: "rokuchannel",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/5ed2b144-6e87-46b6-aae3-55663c5327b1._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/c85bfc80-aca5-440e-948b-e76bbe0eae50._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on The Roku Channel",
                  },
                  description: {
                    value: "Watch free on The Roku Channel",
                  },
                  shortDescription: null,
                  link: "https://therokuchannel.roku.com/details/71c2950afd515ef28c6046e221dcc6c1",
                },
              ],
            },
            {
              watchOptions: [
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.prime_video",
                    categoryType: "RENT_OR_BUY",
                    description: null,
                    name: {
                      value: "Prime Video",
                    },
                    refTagFragment: "pvt_aiv",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/4c192978-331f-429e-9c97-02d5ed9d436e._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/b63dfed5-e4fa-434c-be14-d2dc2b60fbae._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Prime Video",
                  },
                  description: {
                    value: "rent/buy from $3.79",
                  },
                  shortDescription: {
                    value: "from $3.79",
                  },
                  link: "aiv://aiv/view?gti=amzn1.dv.gti.a43cdd55-9694-4527-98c2-cebed7834774",
                },
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.amazon",
                    categoryType: "RENT_OR_BUY",
                    description: {
                      value: "Amazon",
                    },
                    name: {
                      value: "Amazon",
                    },
                    refTagFragment: "amazon",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/b26d1036-b801-4e57-8ce8-70c40cea751f._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/b6a99b0d-356a-4dae-9ffc-248e123b204b._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Search on Amazon",
                  },
                  description: {
                    value: "search for Blu-ray and DVD",
                  },
                  shortDescription: {
                    value: "search Amazon",
                  },
                  link: "com.amazon.mobile.shopping://amazon.com/s?i=movies-tv&k=Beetlejuice",
                },
              ],
            },
          ],
        },
        latestTrailer: {
          id: "vi28951065",
          contentType: {
            id: "amzn1.imdb.video.contenttype.trailer",
            displayName: {
              value: "Trailer",
            },
          },
          createdDate: "2022-04-04T23:27:44.499Z",
          description: {
            value: "Trailer 1",
          },
          primaryImage: {
            imageUrl:
              "https://m.media-amazon.com/images/M/MV5BMDVhOTI0ZDgtYjQxNC00MDNhLWJmNjctNDQwMjZlMGU0ODA4XkEyXkFqcGdeQVRoaXJkUGFydHlJbmdlc3Rpb25Xb3JrZmxvdw@@._V1_.jpg",
            imageWidth: 1920,
            imageHeight: 1080,
          },
          primaryTitleFragment: {
            id: "tt0094721",
            isAdult: false,
            canRateTitle: {
              isRatable: true,
            },
            originalTitleText: {
              text: "Beetlejuice",
            },
            primaryImage: {
              id: "rm2212181760",
              imageUrl:
                "https://m.media-amazon.com/images/M/MV5BYjkwNzVlNDEtMTJlNy00OTdlLTljYWItM2RkZmZkYzY3YjM2XkEyXkFqcGc@._V1_.jpg",
              imageWidth: 1005,
              imageHeight: 1500,
            },
            ratingsSummary: {
              aggregateRating: 7.5,
              topRanking: {
                rank: 1322,
              },
              voteCount: 380671,
            },
            releaseYear: {
              year: 1988,
              endYear: null,
            },
            titleEpisode: null,
            titleText: {
              text: "Beetlejuice",
            },
            titleType: {
              id: "movie",
              text: "Movie",
              displayableProperty: {
                value: {
                  plainText: "",
                },
              },
              categories: [
                {
                  id: "movie",
                  text: "Movie",
                  value: "movie",
                },
              ],
              canHaveEpisodes: false,
              isSeries: false,
              isEpisode: false,
            },
            series: null,
          },
          name: {
            value: "Beetlejuice",
          },
          runtime: {
            unit: "SECONDS",
            value: 87,
          },
        },
        plot: {
          id: "po3411955",
          author: null,
          plotText: {
            plainText:
              "The spirits of a deceased couple are harassed by an unbearable family that has moved into their home, and hire a malicious spirit to drive them out.",
          },
          correctionLink: {
            url: "https://m.imdb.com/title/tt0094721/contribution/plot/po3411955/edit",
          },
          reportingLink: {
            url: "https://m.imdb.com/title/tt0094721/contribution/plot/po3411955/report",
          },
        },
        releaseDate: {
          day: 30,
          month: 3,
          year: 1988,
          country: {
            id: "US",
            text: "United States",
          },
          restriction: null,
          releaseAttributes: [],
        },
        titleCertificate: {
          rating: "PG",
          certificateCountry: {
            id: "US",
            text: "United States",
          },
          ratingReason: null,
        },
        titleRuntime: {
          seconds: 5520,
          displayableProperty: {
            qualifiersInMarkdownList: null,
          },
        },
      },
      {
        id: "tt1375666",
        isAdult: false,
        canRateTitle: {
          isRatable: true,
        },
        originalTitleText: {
          text: "Inception",
        },
        primaryImage: {
          id: "rm3426651392",
          imageUrl:
            "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
          imageWidth: 700,
          imageHeight: 1037,
        },
        ratingsSummary: {
          aggregateRating: 8.8,
          topRanking: {
            rank: 14,
          },
          voteCount: 2603747,
        },
        releaseYear: {
          year: 2010,
          endYear: null,
        },
        titleEpisode: null,
        titleText: {
          text: "Inception",
        },
        titleType: {
          id: "movie",
          text: "Movie",
          displayableProperty: {
            value: {
              plainText: "",
            },
          },
          categories: [
            {
              id: "movie",
              text: "Movie",
              value: "movie",
            },
          ],
          canHaveEpisodes: false,
          isSeries: false,
          isEpisode: false,
        },
        series: null,
        watchOptionsByCategory: {
          categorizedWatchOptionsList: [
            {
              watchOptions: [
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.prime_video",
                    categoryType: "RENT_OR_BUY",
                    description: null,
                    name: {
                      value: "Prime Video",
                    },
                    refTagFragment: "pvt_aiv",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/4c192978-331f-429e-9c97-02d5ed9d436e._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/b63dfed5-e4fa-434c-be14-d2dc2b60fbae._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Prime Video",
                  },
                  description: {
                    value: "rent/buy from $3.79",
                  },
                  shortDescription: {
                    value: "from $3.79",
                  },
                  link: "aiv://aiv/view?gti=amzn1.dv.gti.04a9f72c-f9c8-c4d1-f97b-6d7ad986a51f",
                },
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.amazon",
                    categoryType: "RENT_OR_BUY",
                    description: {
                      value: "Amazon",
                    },
                    name: {
                      value: "Amazon",
                    },
                    refTagFragment: "amazon",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/b26d1036-b801-4e57-8ce8-70c40cea751f._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/b6a99b0d-356a-4dae-9ffc-248e123b204b._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Search on Amazon",
                  },
                  description: {
                    value: "search for Blu-ray and DVD",
                  },
                  shortDescription: {
                    value: "search Amazon",
                  },
                  link: "com.amazon.mobile.shopping://amazon.com/s?i=movies-tv&k=Inception",
                },
              ],
            },
          ],
        },
        latestTrailer: {
          id: "vi2959588889",
          contentType: {
            id: "amzn1.imdb.video.contenttype.trailer",
            displayName: {
              value: "Trailer",
            },
          },
          createdDate: "2020-08-02T21:45:05.803Z",
          description: {
            value:
              "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.\r\n\r\n",
          },
          primaryImage: {
            imageUrl:
              "https://m.media-amazon.com/images/M/MV5BMTQ1ZmIzOTAtNDcwZi00NDVkLWE4NWItYWNhZGY1MmVlZGU0XkEyXkFqcGdeQWRvb2xpbmhk._V1_.jpg",
            imageWidth: 1905,
            imageHeight: 1071,
          },
          primaryTitleFragment: {
            id: "tt1375666",
            isAdult: false,
            canRateTitle: {
              isRatable: true,
            },
            originalTitleText: {
              text: "Inception",
            },
            primaryImage: {
              id: "rm3426651392",
              imageUrl:
                "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
              imageWidth: 700,
              imageHeight: 1037,
            },
            ratingsSummary: {
              aggregateRating: 8.8,
              topRanking: {
                rank: 14,
              },
              voteCount: 2603747,
            },
            releaseYear: {
              year: 2010,
              endYear: null,
            },
            titleEpisode: null,
            titleText: {
              text: "Inception",
            },
            titleType: {
              id: "movie",
              text: "Movie",
              displayableProperty: {
                value: {
                  plainText: "",
                },
              },
              categories: [
                {
                  id: "movie",
                  text: "Movie",
                  value: "movie",
                },
              ],
              canHaveEpisodes: false,
              isSeries: false,
              isEpisode: false,
            },
            series: null,
          },
          name: {
            value: "10th Anniversary Dream Trailer",
          },
          runtime: {
            unit: "SECONDS",
            value: 105,
          },
        },
        plot: {
          id: "po2032202",
          author: null,
          plotText: {
            plainText:
              "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
          },
          correctionLink: {
            url: "https://m.imdb.com/title/tt1375666/contribution/plot/po2032202/edit",
          },
          reportingLink: {
            url: "https://m.imdb.com/title/tt1375666/contribution/plot/po2032202/report",
          },
        },
        releaseDate: {
          day: 16,
          month: 7,
          year: 2010,
          country: {
            id: "US",
            text: "United States",
          },
          restriction: null,
          releaseAttributes: [],
        },
        titleCertificate: {
          rating: "PG-13",
          certificateCountry: {
            id: "US",
            text: "United States",
          },
          ratingReason:
            "Rated PG-13 for sequences of violence and action throughout",
        },
        titleRuntime: {
          seconds: 8880,
          displayableProperty: {
            qualifiersInMarkdownList: null,
          },
        },
      },
      {
        id: "tt2560140",
        isAdult: false,
        canRateTitle: {
          isRatable: true,
        },
        originalTitleText: {
          text: "Shingeki no Kyojin",
        },
        primaryImage: {
          id: "rm2459906561",
          imageUrl:
            "https://m.media-amazon.com/images/M/MV5BNjY4MDQxZTItM2JjMi00NjM5LTk0MWYtOTBlNTY2YjBiNmFjXkEyXkFqcGc@._V1_.jpg",
          imageWidth: 889,
          imageHeight: 1200,
        },
        ratingsSummary: {
          aggregateRating: 9.1,
          topRanking: {
            rank: 23,
          },
          voteCount: 551883,
        },
        releaseYear: {
          year: 2013,
          endYear: 2023,
        },
        titleEpisode: null,
        titleText: {
          text: "Attack on Titan",
        },
        titleType: {
          id: "tvSeries",
          text: "TV Series",
          displayableProperty: {
            value: {
              plainText: "TV Series",
            },
          },
          categories: [
            {
              id: "tv",
              text: "TV",
              value: "tv",
            },
          ],
          canHaveEpisodes: true,
          isSeries: true,
          isEpisode: false,
        },
        series: null,
        watchOptionsByCategory: {
          categorizedWatchOptionsList: [
            {
              watchOptions: [
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.adultswim",
                    categoryType: "SUBSCRIPTION",
                    description: {
                      value: "Go to adultswim.com",
                    },
                    name: {
                      value: "adultswim",
                    },
                    refTagFragment: "ad_sw",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/f283b0a7-ae68-46ab-899f-98bf04ed753e._V1_.png",
                        width: 512,
                        height: 512,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/80a94f20-6774-47bd-9245-f36a43eaea92._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on adultswim",
                  },
                  description: {
                    value: "S4 Go to adultswim.com",
                  },
                  shortDescription: {
                    value: "S4",
                  },
                  link: "https://www.adultswim.com/",
                },
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.cartoon",
                    categoryType: "SUBSCRIPTION",
                    description: {
                      value: "Go to cartoonnetwork.com",
                    },
                    name: {
                      value: "Cartoon Network",
                    },
                    refTagFragment: "cartoon",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/6a9567fe-516c-4baf-945b-7c92206da898._V1_.jpg",
                        width: 512,
                        height: 512,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/65add0ca-592a-4955-b2f3-7a93e242a6e6._V1_.jpg",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Cartoon Network",
                  },
                  description: {
                    value: "S1-2 Go to cartoonnetwork.com",
                  },
                  shortDescription: {
                    value: "S1-2",
                  },
                  link: "https://www.cartoonnetwork.com/video",
                },
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.prime_video.crunchyroll",
                    categoryType: "SUBSCRIPTION",
                    description: {
                      value: "with Prime Video Channels",
                    },
                    name: {
                      value: "Crunchyroll",
                    },
                    refTagFragment: "pvc_crunchyroll",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/9bbd89c0-4801-4797-8595-4abb771cc341._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/4e5c28e9-74ef-428d-9205-f850a83c6483._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Crunchyroll",
                  },
                  description: {
                    value: "S1-4 with Prime Video Channels",
                  },
                  shortDescription: {
                    value: "S1-4",
                  },
                  link: "aiv://aiv/view?gti=amzn1.dv.gti.5eacf84a-4e95-6ecb-83e4-f9141b719074",
                },
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.hulu",
                    categoryType: "SUBSCRIPTION",
                    description: {
                      value: "on Hulu.com and the Hulu app",
                    },
                    name: {
                      value: "Hulu",
                    },
                    refTagFragment: "hulu",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/454c994e-acf4-49ef-83d5-8fa06c8a5eab._V1_.png",
                        width: 512,
                        height: 512,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/67022a68-fde3-4078-8bd0-0ebc72efe8ad._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Hulu",
                  },
                  description: {
                    value: "S1-4 on Hulu.com and the Hulu app",
                  },
                  shortDescription: {
                    value: "S1-4",
                  },
                  link: "http://www.hulu.com?d=Amazon",
                },
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.prime_video.hbomaxus",
                    categoryType: "SUBSCRIPTION",
                    description: {
                      value: "with Prime Video Channels",
                    },
                    name: {
                      value: "Max",
                    },
                    refTagFragment: "hbomax",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/3e152962-a236-46be-aa94-2a48296d7129._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/7cdcbf4e-6afe-4136-be75-cd6f2d237c63._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Max",
                  },
                  description: {
                    value: "S1 with Prime Video Channels",
                  },
                  shortDescription: {
                    value: "S1",
                  },
                  link: "aiv://aiv/view?gti=amzn1.dv.gti.76a76520-31a5-4f1b-80ab-aba746b143c1",
                },
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.hbo_max",
                    categoryType: "SUBSCRIPTION",
                    description: {
                      value: "with subscription",
                    },
                    name: {
                      value: "Max",
                    },
                    refTagFragment: "hbomax",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/7660eee6-3846-43e9-aadd-bff7846554fb._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/609ae2bb-6e79-45ae-bd76-75da3afac406._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Max",
                  },
                  description: {
                    value: "S1 with subscription",
                  },
                  shortDescription: {
                    value: "S1",
                  },
                  link: "https://play.max.com/show/476d1f29-f660-421f-9fa2-cce5be5f9040",
                },
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.prime_video.toku",
                    categoryType: "SUBSCRIPTION",
                    description: {
                      value: "with Prime Video Channels",
                    },
                    name: {
                      value: "Toku",
                    },
                    refTagFragment: "pvc_toku",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/73ca4467-c503-4a29-b5e3-e2a118b2988f._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/c858ad80-118d-4189-a93b-4aabd12ecb78._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Toku",
                  },
                  description: {
                    value: "S1-2 with Prime Video Channels",
                  },
                  shortDescription: {
                    value: "S1-2",
                  },
                  link: "aiv://aiv/view?gti=amzn1.dv.gti.bcb0ef63-456a-9295-c2eb-459c81103425",
                },
              ],
            },
            {
              watchOptions: [
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.prime_video",
                    categoryType: "RENT_OR_BUY",
                    description: null,
                    name: {
                      value: "Prime Video",
                    },
                    refTagFragment: "pvt_aiv",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/4c192978-331f-429e-9c97-02d5ed9d436e._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/b63dfed5-e4fa-434c-be14-d2dc2b60fbae._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Prime Video",
                  },
                  description: {
                    value: "buy from $7.99",
                  },
                  shortDescription: {
                    value: "from $7.99",
                  },
                  link: "aiv://aiv/view?gti=amzn1.dv.gti.caadac8f-2c39-377d-cce6-9ba85123dea6",
                },
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.amazon",
                    categoryType: "RENT_OR_BUY",
                    description: {
                      value: "Amazon",
                    },
                    name: {
                      value: "Amazon",
                    },
                    refTagFragment: "amazon",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/b26d1036-b801-4e57-8ce8-70c40cea751f._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/b6a99b0d-356a-4dae-9ffc-248e123b204b._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Search on Amazon",
                  },
                  description: {
                    value: "search for Blu-ray and DVD",
                  },
                  shortDescription: {
                    value: "search Amazon",
                  },
                  link: "com.amazon.mobile.shopping://amazon.com/s?i=movies-tv&k=Shingeki+no+Kyojin",
                },
              ],
            },
          ],
        },
        latestTrailer: {
          id: "vi3191457561",
          contentType: {
            id: "amzn1.imdb.video.contenttype.trailer",
            displayName: {
              value: "Trailer",
            },
          },
          createdDate: "2023-11-03T14:36:21.150Z",
          description: {
            value:
              "After his hometown is destroyed and his mother is killed, young Eren Jaeger vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction.",
          },
          primaryImage: {
            imageUrl:
              "https://m.media-amazon.com/images/M/MV5BYzg0ZWUyMWMtNDYyMi00ODY1LWI1M2ItZDc2NDc5Y2ZhODkxXkEyXkFqcGdeQXNvbG5vbXM@._V1_.jpg",
            imageWidth: 1920,
            imageHeight: 1080,
          },
          primaryTitleFragment: {
            id: "tt2560140",
            isAdult: false,
            canRateTitle: {
              isRatable: true,
            },
            originalTitleText: {
              text: "Shingeki no Kyojin",
            },
            primaryImage: {
              id: "rm2459906561",
              imageUrl:
                "https://m.media-amazon.com/images/M/MV5BNjY4MDQxZTItM2JjMi00NjM5LTk0MWYtOTBlNTY2YjBiNmFjXkEyXkFqcGc@._V1_.jpg",
              imageWidth: 889,
              imageHeight: 1200,
            },
            ratingsSummary: {
              aggregateRating: 9.1,
              topRanking: {
                rank: 23,
              },
              voteCount: 551883,
            },
            releaseYear: {
              year: 2013,
              endYear: 2023,
            },
            titleEpisode: null,
            titleText: {
              text: "Attack on Titan",
            },
            titleType: {
              id: "tvSeries",
              text: "TV Series",
              displayableProperty: {
                value: {
                  plainText: "TV Series",
                },
              },
              categories: [
                {
                  id: "tv",
                  text: "TV",
                  value: "tv",
                },
              ],
              canHaveEpisodes: true,
              isSeries: true,
              isEpisode: false,
            },
            series: null,
          },
          name: {
            value: "Finale Trailer - Final Season",
          },
          runtime: {
            unit: "SECONDS",
            value: 91,
          },
        },
        plot: {
          id: "po2092684",
          author: null,
          plotText: {
            plainText:
              "After his hometown is destroyed, young Eren Jaeger vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction.",
          },
          correctionLink: {
            url: "https://m.imdb.com/title/tt2560140/contribution/plot/po2092684/edit",
          },
          reportingLink: {
            url: "https://m.imdb.com/title/tt2560140/contribution/plot/po2092684/report",
          },
        },
        releaseDate: {
          day: 28,
          month: 9,
          year: 2013,
          country: {
            id: "US",
            text: "United States",
          },
          restriction: null,
          releaseAttributes: [],
        },
        titleCertificate: {
          rating: "TV-MA",
          certificateCountry: {
            id: "US",
            text: "United States",
          },
          ratingReason: null,
        },
        titleRuntime: {
          seconds: 1440,
          displayableProperty: {
            qualifiersInMarkdownList: null,
          },
        },
      },
      {
        id: "tt15398776",
        isAdult: false,
        canRateTitle: {
          isRatable: true,
        },
        originalTitleText: {
          text: "Oppenheimer",
        },
        primaryImage: {
          id: "rm2670601217",
          imageUrl:
            "https://m.media-amazon.com/images/M/MV5BN2JkMDc5MGQtZjg3YS00NmFiLWIyZmQtZTJmNTM5MjVmYTQ4XkEyXkFqcGc@._V1_.jpg",
          imageWidth: 2331,
          imageHeight: 3454,
        },
        ratingsSummary: {
          aggregateRating: 8.3,
          topRanking: {
            rank: 106,
          },
          voteCount: 805837,
        },
        releaseYear: {
          year: 2023,
          endYear: null,
        },
        titleEpisode: null,
        titleText: {
          text: "Oppenheimer",
        },
        titleType: {
          id: "movie",
          text: "Movie",
          displayableProperty: {
            value: {
              plainText: "",
            },
          },
          categories: [
            {
              id: "movie",
              text: "Movie",
              value: "movie",
            },
          ],
          canHaveEpisodes: false,
          isSeries: false,
          isEpisode: false,
        },
        series: null,
        watchOptionsByCategory: {
          categorizedWatchOptionsList: [
            {
              watchOptions: [
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.prime_video.PRIME",
                    categoryType: "SUBSCRIPTION",
                    description: {
                      value: "included with Prime",
                    },
                    name: {
                      value: "Prime Video",
                    },
                    refTagFragment: "pvs_piv",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/e062ea53-945a-42cb-8d15-6405531687ec._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/75f35a85-7a6e-4f1f-bf8b-e4c8556bc4e4._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Prime Video",
                  },
                  description: {
                    value: "included with Prime",
                  },
                  shortDescription: null,
                  link: "aiv://aiv/resume?gti=amzn1.dv.gti.f60cf07a-7363-411e-9f4a-b93b568ef3d3",
                },
              ],
            },
            {
              watchOptions: [
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.prime_video",
                    categoryType: "RENT_OR_BUY",
                    description: null,
                    name: {
                      value: "Prime Video",
                    },
                    refTagFragment: "pvt_aiv",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/4c192978-331f-429e-9c97-02d5ed9d436e._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/b63dfed5-e4fa-434c-be14-d2dc2b60fbae._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Prime Video",
                  },
                  description: {
                    value: "rent/buy from $3.99",
                  },
                  shortDescription: {
                    value: "from $3.99",
                  },
                  link: "aiv://aiv/view?gti=amzn1.dv.gti.f60cf07a-7363-411e-9f4a-b93b568ef3d3",
                },
              ],
            },
          ],
        },
        latestTrailer: {
          id: "vi2053751833",
          contentType: {
            id: "amzn1.imdb.video.contenttype.trailer",
            displayName: {
              value: "Trailer",
            },
          },
          createdDate: "2023-05-08T10:28:56.460Z",
          description: {
            value:
              "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
          },
          primaryImage: {
            imageUrl:
              "https://m.media-amazon.com/images/M/MV5BMzdiYWE1NDgtMmZhZS00ZmU4LWI5ZmItMTEzZDlkY2ViYzBlXkEyXkFqcGdeQWFybm8@._V1_.jpg",
            imageWidth: 603,
            imageHeight: 339,
          },
          primaryTitleFragment: {
            id: "tt15398776",
            isAdult: false,
            canRateTitle: {
              isRatable: true,
            },
            originalTitleText: {
              text: "Oppenheimer",
            },
            primaryImage: {
              id: "rm2670601217",
              imageUrl:
                "https://m.media-amazon.com/images/M/MV5BN2JkMDc5MGQtZjg3YS00NmFiLWIyZmQtZTJmNTM5MjVmYTQ4XkEyXkFqcGc@._V1_.jpg",
              imageWidth: 2331,
              imageHeight: 3454,
            },
            ratingsSummary: {
              aggregateRating: 8.3,
              topRanking: {
                rank: 106,
              },
              voteCount: 805837,
            },
            releaseYear: {
              year: 2023,
              endYear: null,
            },
            titleEpisode: null,
            titleText: {
              text: "Oppenheimer",
            },
            titleType: {
              id: "movie",
              text: "Movie",
              displayableProperty: {
                value: {
                  plainText: "",
                },
              },
              categories: [
                {
                  id: "movie",
                  text: "Movie",
                  value: "movie",
                },
              ],
              canHaveEpisodes: false,
              isSeries: false,
              isEpisode: false,
            },
            series: null,
          },
          name: {
            value: "Official Trailer",
          },
          runtime: {
            unit: "SECONDS",
            value: 187,
          },
        },
        plot: {
          id: "po6201773",
          author: null,
          plotText: {
            plainText:
              "A dramatization of the life story of J. Robert Oppenheimer, the physicist who had a large hand in the development of the atomic bomb, thus helping end World War 2. We see his life from university days all the way to post-WW2.",
          },
          correctionLink: {
            url: "https://m.imdb.com/title/tt15398776/contribution/plot/po6201773/edit",
          },
          reportingLink: {
            url: "https://m.imdb.com/title/tt15398776/contribution/plot/po6201773/report",
          },
        },
        releaseDate: {
          day: 21,
          month: 7,
          year: 2023,
          country: {
            id: "US",
            text: "United States",
          },
          restriction: null,
          releaseAttributes: [],
        },
        titleCertificate: {
          rating: "R",
          certificateCountry: {
            id: "US",
            text: "United States",
          },
          ratingReason: "Rated R for some sexuality, nudity and language",
        },
        titleRuntime: {
          seconds: 10800,
          displayableProperty: {
            qualifiersInMarkdownList: null,
          },
        },
      },
      {
        id: "tt0109830",
        isAdult: false,
        canRateTitle: {
          isRatable: true,
        },
        originalTitleText: {
          text: "Forrest Gump",
        },
        primaryImage: {
          id: "rm1954748672",
          imageUrl:
            "https://m.media-amazon.com/images/M/MV5BNDYwNzVjMTItZmU5YS00YjQ5LTljYjgtMjY2NDVmYWMyNWFmXkEyXkFqcGc@._V1_.jpg",
          imageWidth: 558,
          imageHeight: 809,
        },
        ratingsSummary: {
          aggregateRating: 8.8,
          topRanking: {
            rank: 11,
          },
          voteCount: 2310050,
        },
        releaseYear: {
          year: 1994,
          endYear: null,
        },
        titleEpisode: null,
        titleText: {
          text: "Forrest Gump",
        },
        titleType: {
          id: "movie",
          text: "Movie",
          displayableProperty: {
            value: {
              plainText: "",
            },
          },
          categories: [
            {
              id: "movie",
              text: "Movie",
              value: "movie",
            },
          ],
          canHaveEpisodes: false,
          isSeries: false,
          isEpisode: false,
        },
        series: null,
        watchOptionsByCategory: {
          categorizedWatchOptionsList: [
            {
              watchOptions: [
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.prime_video.cbsaaca",
                    categoryType: "SUBSCRIPTION",
                    description: {
                      value: "with Prime Video Channels",
                    },
                    name: {
                      value: "Paramount+",
                    },
                    refTagFragment: "pvc_paramount+",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/83230f2a-d6e3-41ed-bf4d-9c4bbddff767._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/ef380fc5-d6b9-44de-9ad7-c91baefebf4e._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Paramount+",
                  },
                  description: {
                    value: "with Prime Video Channels",
                  },
                  shortDescription: null,
                  link: "aiv://aiv/view?gti=amzn1.dv.gti.f4a9f7ae-8751-637f-45fe-baf203e8df44",
                },
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.cbs_aa",
                    categoryType: "SUBSCRIPTION",
                    description: {
                      value: "with subscription",
                    },
                    name: {
                      value: "Paramount+",
                    },
                    refTagFragment: "paramount+",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/e49120ab-6b5f-4646-9948-ae0938f24ddd._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/c5b957f1-4220-47c0-b5e0-bbbad817fc1f._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Paramount+",
                  },
                  description: {
                    value: "with subscription",
                  },
                  shortDescription: null,
                  link: "https://www.cbs.com/all-access/",
                },
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.pluto",
                    categoryType: "SUBSCRIPTION",
                    description: {
                      value: "Go to pluto.tv",
                    },
                    name: {
                      value: "Pluto TV",
                    },
                    refTagFragment: "pluto",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/643318a5-306a-4a10-bf34-2d05985d2786._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/ca986b38-0182-4a91-b9a3-8d61c84d4e59._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Pluto TV",
                  },
                  description: {
                    value: "Go to pluto.tv",
                  },
                  shortDescription: null,
                  link: "https://pluto.tv/on-demand/movies/629ff609cb032400134d42bc?utm_source=amazon&utm_medium=ossearch",
                },
              ],
            },
            {
              watchOptions: [
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.prime_video",
                    categoryType: "RENT_OR_BUY",
                    description: null,
                    name: {
                      value: "Prime Video",
                    },
                    refTagFragment: "pvt_aiv",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/4c192978-331f-429e-9c97-02d5ed9d436e._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/b63dfed5-e4fa-434c-be14-d2dc2b60fbae._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Prime Video",
                  },
                  description: {
                    value: "rent/buy from $3.79",
                  },
                  shortDescription: {
                    value: "from $3.79",
                  },
                  link: "aiv://aiv/view?gti=amzn1.dv.gti.f4a9f7ae-8751-637f-45fe-baf203e8df44",
                },
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.amazon",
                    categoryType: "RENT_OR_BUY",
                    description: {
                      value: "Amazon",
                    },
                    name: {
                      value: "Amazon",
                    },
                    refTagFragment: "amazon",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/b26d1036-b801-4e57-8ce8-70c40cea751f._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/b6a99b0d-356a-4dae-9ffc-248e123b204b._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Search on Amazon",
                  },
                  description: {
                    value: "search for Blu-ray and DVD",
                  },
                  shortDescription: {
                    value: "search Amazon",
                  },
                  link: "com.amazon.mobile.shopping://amazon.com/s?i=movies-tv&k=Forrest+Gump",
                },
              ],
            },
          ],
        },
        latestTrailer: {
          id: "vi3567517977",
          contentType: {
            id: "amzn1.imdb.video.contenttype.trailer",
            displayName: {
              value: "Trailer",
            },
          },
          createdDate: "2008-04-11T13:59:31Z",
          description: {
            value: "Trailer 1 for Forrest Gump",
          },
          primaryImage: {
            imageUrl:
              "https://m.media-amazon.com/images/M/MV5BYzQyMWQ1ODMtZGE2OS00YzQyLWE2OWYtZmU5OGFiMWMwYmIyXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg",
            imageWidth: 480,
            imageHeight: 360,
          },
          primaryTitleFragment: {
            id: "tt0109830",
            isAdult: false,
            canRateTitle: {
              isRatable: true,
            },
            originalTitleText: {
              text: "Forrest Gump",
            },
            primaryImage: {
              id: "rm1954748672",
              imageUrl:
                "https://m.media-amazon.com/images/M/MV5BNDYwNzVjMTItZmU5YS00YjQ5LTljYjgtMjY2NDVmYWMyNWFmXkEyXkFqcGc@._V1_.jpg",
              imageWidth: 558,
              imageHeight: 809,
            },
            ratingsSummary: {
              aggregateRating: 8.8,
              topRanking: {
                rank: 11,
              },
              voteCount: 2310050,
            },
            releaseYear: {
              year: 1994,
              endYear: null,
            },
            titleEpisode: null,
            titleText: {
              text: "Forrest Gump",
            },
            titleType: {
              id: "movie",
              text: "Movie",
              displayableProperty: {
                value: {
                  plainText: "",
                },
              },
              categories: [
                {
                  id: "movie",
                  text: "Movie",
                  value: "movie",
                },
              ],
              canHaveEpisodes: false,
              isSeries: false,
              isEpisode: false,
            },
            series: null,
          },
          name: {
            value: "Forrest Gump",
          },
          runtime: {
            unit: "SECONDS",
            value: 234,
          },
        },
        plot: {
          id: "po3484400",
          author: null,
          plotText: {
            plainText:
              "The history of the United States from the 1950s to the '70s unfolds from the perspective of an Alabama man with an IQ of 75, who yearns to be reunited with his childhood sweetheart.",
          },
          correctionLink: {
            url: "https://m.imdb.com/title/tt0109830/contribution/plot/po3484400/edit",
          },
          reportingLink: {
            url: "https://m.imdb.com/title/tt0109830/contribution/plot/po3484400/report",
          },
        },
        releaseDate: {
          day: 6,
          month: 7,
          year: 1994,
          country: {
            id: "US",
            text: "United States",
          },
          restriction: null,
          releaseAttributes: [],
        },
        titleCertificate: {
          rating: "PG-13",
          certificateCountry: {
            id: "US",
            text: "United States",
          },
          ratingReason:
            "Rated PG-13 for drug content, some sensuality and war violence",
        },
        titleRuntime: {
          seconds: 8520,
          displayableProperty: {
            qualifiersInMarkdownList: null,
          },
        },
      },
      {
        id: "tt8228288",
        isAdult: false,
        canRateTitle: {
          isRatable: true,
        },
        originalTitleText: {
          text: "El hoyo",
        },
        primaryImage: {
          id: "rm1208652545",
          imageUrl:
            "https://m.media-amazon.com/images/M/MV5BYjUyZjNmYmMtNjA1My00ZWMyLTliZGQtODgzZjIxM2Y4NGI1XkEyXkFqcGc@._V1_.jpg",
          imageWidth: 1984,
          imageHeight: 2835,
        },
        ratingsSummary: {
          aggregateRating: 7,
          topRanking: {
            rank: 2605,
          },
          voteCount: 291131,
        },
        releaseYear: {
          year: 2019,
          endYear: null,
        },
        titleEpisode: null,
        titleText: {
          text: "The Platform",
        },
        titleType: {
          id: "movie",
          text: "Movie",
          displayableProperty: {
            value: {
              plainText: "",
            },
          },
          categories: [
            {
              id: "movie",
              text: "Movie",
              value: "movie",
            },
          ],
          canHaveEpisodes: false,
          isSeries: false,
          isEpisode: false,
        },
        series: null,
        watchOptionsByCategory: {
          categorizedWatchOptionsList: [
            {
              watchOptions: [
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.netflix",
                    categoryType: "SUBSCRIPTION",
                    description: {
                      value: "with subscription",
                    },
                    name: {
                      value: "Netflix",
                    },
                    refTagFragment: "netflix",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/f409199e-794d-4822-acf9-38bca16baa5e._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/9516b142-0c88-4475-a39b-97c06546cdc5._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Netflix",
                  },
                  description: {
                    value: "with subscription",
                  },
                  shortDescription: null,
                  link: "https://www.netflix.com/watch/81128579?source=imdb",
                },
              ],
            },
          ],
        },
        latestTrailer: {
          id: "vi2275851801",
          contentType: {
            id: "amzn1.imdb.video.contenttype.trailer",
            displayName: {
              value: "Trailer",
            },
          },
          createdDate: "2020-03-08T23:54:58.587Z",
          description: {
            value:
              "Inside a vertical prison system, inmates are assigned to a level and forced to ration food from a platform that moves between the floors.",
          },
          primaryImage: {
            imageUrl:
              "https://m.media-amazon.com/images/M/MV5BY2EwYTdmOWUtMzI2Mi00NjU1LWFkZjItOThhZTVkYTlmNzhjXkEyXkFqcGdeQWFybm8@._V1_.jpg",
            imageWidth: 1200,
            imageHeight: 600,
          },
          primaryTitleFragment: {
            id: "tt8228288",
            isAdult: false,
            canRateTitle: {
              isRatable: true,
            },
            originalTitleText: {
              text: "El hoyo",
            },
            primaryImage: {
              id: "rm1208652545",
              imageUrl:
                "https://m.media-amazon.com/images/M/MV5BYjUyZjNmYmMtNjA1My00ZWMyLTliZGQtODgzZjIxM2Y4NGI1XkEyXkFqcGc@._V1_.jpg",
              imageWidth: 1984,
              imageHeight: 2835,
            },
            ratingsSummary: {
              aggregateRating: 7,
              topRanking: {
                rank: 2605,
              },
              voteCount: 291131,
            },
            releaseYear: {
              year: 2019,
              endYear: null,
            },
            titleEpisode: null,
            titleText: {
              text: "The Platform",
            },
            titleType: {
              id: "movie",
              text: "Movie",
              displayableProperty: {
                value: {
                  plainText: "",
                },
              },
              categories: [
                {
                  id: "movie",
                  text: "Movie",
                  value: "movie",
                },
              ],
              canHaveEpisodes: false,
              isSeries: false,
              isEpisode: false,
            },
            series: null,
          },
          name: {
            value: "Official Trailer",
          },
          runtime: {
            unit: "SECONDS",
            value: 109,
          },
        },
        plot: {
          id: "po4673075",
          author: null,
          plotText: {
            plainText:
              "In a prison where inmates are fed on a descending platform, those on the upper levels take more than their fair share while those below are left to starve on scraps and one man decides to change the system.",
          },
          correctionLink: {
            url: "https://m.imdb.com/title/tt8228288/contribution/plot/po4673075/edit",
          },
          reportingLink: {
            url: "https://m.imdb.com/title/tt8228288/contribution/plot/po4673075/report",
          },
        },
        releaseDate: {
          day: 20,
          month: 3,
          year: 2020,
          country: {
            id: "US",
            text: "United States",
          },
          restriction: null,
          releaseAttributes: [
            {
              text: "internet",
            },
          ],
        },
        titleCertificate: {
          rating: "TV-MA",
          certificateCountry: {
            id: "US",
            text: "United States",
          },
          ratingReason: null,
        },
        titleRuntime: {
          seconds: 5640,
          displayableProperty: {
            qualifiersInMarkdownList: null,
          },
        },
      },
      {
        id: "tt0110912",
        isAdult: false,
        canRateTitle: {
          isRatable: true,
        },
        originalTitleText: {
          text: "Pulp Fiction",
        },
        primaryImage: {
          id: "rm1959546112",
          imageUrl:
            "https://m.media-amazon.com/images/M/MV5BYTViYTE3ZGQtNDBlMC00ZTAyLTkyODMtZGRiZDg0MjA2YThkXkEyXkFqcGc@._V1_.jpg",
          imageWidth: 1055,
          imageHeight: 1536,
        },
        ratingsSummary: {
          aggregateRating: 8.9,
          topRanking: {
            rank: 8,
          },
          voteCount: 2267371,
        },
        releaseYear: {
          year: 1994,
          endYear: null,
        },
        titleEpisode: null,
        titleText: {
          text: "Pulp Fiction",
        },
        titleType: {
          id: "movie",
          text: "Movie",
          displayableProperty: {
            value: {
              plainText: "",
            },
          },
          categories: [
            {
              id: "movie",
              text: "Movie",
              value: "movie",
            },
          ],
          canHaveEpisodes: false,
          isSeries: false,
          isEpisode: false,
        },
        series: null,
        watchOptionsByCategory: {
          categorizedWatchOptionsList: [
            {
              watchOptions: [
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.prime_video.cbsaaca",
                    categoryType: "SUBSCRIPTION",
                    description: {
                      value: "with Prime Video Channels",
                    },
                    name: {
                      value: "Paramount+",
                    },
                    refTagFragment: "pvc_paramount+",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/83230f2a-d6e3-41ed-bf4d-9c4bbddff767._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/ef380fc5-d6b9-44de-9ad7-c91baefebf4e._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Paramount+",
                  },
                  description: {
                    value: "with Prime Video Channels",
                  },
                  shortDescription: null,
                  link: "aiv://aiv/view?gti=amzn1.dv.gti.cda28875-e3a1-4642-898c-404569ab2127",
                },
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.cbs_aa",
                    categoryType: "SUBSCRIPTION",
                    description: {
                      value: "with subscription",
                    },
                    name: {
                      value: "Paramount+",
                    },
                    refTagFragment: "paramount+",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/e49120ab-6b5f-4646-9948-ae0938f24ddd._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/c5b957f1-4220-47c0-b5e0-bbbad817fc1f._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Paramount+",
                  },
                  description: {
                    value: "with subscription",
                  },
                  shortDescription: null,
                  link: "https://www.cbs.com/all-access/",
                },
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.pluto",
                    categoryType: "SUBSCRIPTION",
                    description: {
                      value: "Go to pluto.tv",
                    },
                    name: {
                      value: "Pluto TV",
                    },
                    refTagFragment: "pluto",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/643318a5-306a-4a10-bf34-2d05985d2786._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/ca986b38-0182-4a91-b9a3-8d61c84d4e59._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Pluto TV",
                  },
                  description: {
                    value: "Go to pluto.tv",
                  },
                  shortDescription: null,
                  link: "https://pluto.tv/on-demand/movies/6083159eff0640001a6721ac?utm_source=amazon&utm_medium=ossearch",
                },
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.prime_video.PRIME",
                    categoryType: "SUBSCRIPTION",
                    description: {
                      value: "included with Prime",
                    },
                    name: {
                      value: "Prime Video",
                    },
                    refTagFragment: "pvs_piv",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/e062ea53-945a-42cb-8d15-6405531687ec._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/75f35a85-7a6e-4f1f-bf8b-e4c8556bc4e4._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Prime Video",
                  },
                  description: {
                    value: "included with Prime",
                  },
                  shortDescription: null,
                  link: "aiv://aiv/resume?gti=amzn1.dv.gti.cda28875-e3a1-4642-898c-404569ab2127",
                },
              ],
            },
            {
              watchOptions: [
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.prime_video",
                    categoryType: "RENT_OR_BUY",
                    description: null,
                    name: {
                      value: "Prime Video",
                    },
                    refTagFragment: "pvt_aiv",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/4c192978-331f-429e-9c97-02d5ed9d436e._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/b63dfed5-e4fa-434c-be14-d2dc2b60fbae._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Prime Video",
                  },
                  description: {
                    value: "rent/buy from $3.59",
                  },
                  shortDescription: {
                    value: "from $3.59",
                  },
                  link: "aiv://aiv/view?gti=amzn1.dv.gti.cda28875-e3a1-4642-898c-404569ab2127",
                },
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.amazon",
                    categoryType: "RENT_OR_BUY",
                    description: {
                      value: "Amazon",
                    },
                    name: {
                      value: "Amazon",
                    },
                    refTagFragment: "amazon",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/b26d1036-b801-4e57-8ce8-70c40cea751f._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/b6a99b0d-356a-4dae-9ffc-248e123b204b._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Search on Amazon",
                  },
                  description: {
                    value: "search for Blu-ray and DVD",
                  },
                  shortDescription: {
                    value: "search Amazon",
                  },
                  link: "com.amazon.mobile.shopping://amazon.com/s?i=movies-tv&k=Pulp+Fiction",
                },
              ],
            },
          ],
        },
        latestTrailer: {
          id: "vi2620371481",
          contentType: {
            id: "amzn1.imdb.video.contenttype.trailer",
            displayName: {
              value: "Trailer",
            },
          },
          createdDate: "2015-12-16T10:51:07Z",
          description: {
            value:
              "The lives of two mob hit men, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
          },
          primaryImage: {
            imageUrl:
              "https://m.media-amazon.com/images/M/MV5BMjI5MzgxMTQ4M15BMl5BanBnXkFtZTgwNjczMTk0NzE@._V1_.jpg",
            imageWidth: 1280,
            imageHeight: 720,
          },
          primaryTitleFragment: {
            id: "tt0110912",
            isAdult: false,
            canRateTitle: {
              isRatable: true,
            },
            originalTitleText: {
              text: "Pulp Fiction",
            },
            primaryImage: {
              id: "rm1959546112",
              imageUrl:
                "https://m.media-amazon.com/images/M/MV5BYTViYTE3ZGQtNDBlMC00ZTAyLTkyODMtZGRiZDg0MjA2YThkXkEyXkFqcGc@._V1_.jpg",
              imageWidth: 1055,
              imageHeight: 1536,
            },
            ratingsSummary: {
              aggregateRating: 8.9,
              topRanking: {
                rank: 8,
              },
              voteCount: 2267371,
            },
            releaseYear: {
              year: 1994,
              endYear: null,
            },
            titleEpisode: null,
            titleText: {
              text: "Pulp Fiction",
            },
            titleType: {
              id: "movie",
              text: "Movie",
              displayableProperty: {
                value: {
                  plainText: "",
                },
              },
              categories: [
                {
                  id: "movie",
                  text: "Movie",
                  value: "movie",
                },
              ],
              canHaveEpisodes: false,
              isSeries: false,
              isEpisode: false,
            },
            series: null,
          },
          name: {
            value: "Official Trailer",
          },
          runtime: {
            unit: "SECONDS",
            value: 81,
          },
        },
        plot: {
          id: "po1049126",
          author: null,
          plotText: {
            plainText:
              "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
          },
          correctionLink: {
            url: "https://m.imdb.com/title/tt0110912/contribution/plot/po1049126/edit",
          },
          reportingLink: {
            url: "https://m.imdb.com/title/tt0110912/contribution/plot/po1049126/report",
          },
        },
        releaseDate: {
          day: 14,
          month: 10,
          year: 1994,
          country: {
            id: "US",
            text: "United States",
          },
          restriction: null,
          releaseAttributes: [],
        },
        titleCertificate: {
          rating: "R",
          certificateCountry: {
            id: "US",
            text: "United States",
          },
          ratingReason:
            "Rated R for strong graphic violence and drug use, pervasive strong language and some sexuality",
        },
        titleRuntime: {
          seconds: 9240,
          displayableProperty: {
            qualifiersInMarkdownList: null,
          },
        },
      },
      {
        id: "tt0120737",
        isAdult: false,
        canRateTitle: {
          isRatable: true,
        },
        originalTitleText: {
          text: "The Lord of the Rings: The Fellowship of the Ring",
        },
        primaryImage: {
          id: "rm3592958976",
          imageUrl:
            "https://m.media-amazon.com/images/M/MV5BNzIxMDQ2YTctNDY4MC00ZTRhLTk4ODQtMTVlOWY4NTdiYmMwXkEyXkFqcGc@._V1_.jpg",
          imageWidth: 1978,
          imageHeight: 2936,
        },
        ratingsSummary: {
          aggregateRating: 8.9,
          topRanking: {
            rank: 9,
          },
          voteCount: 2050915,
        },
        releaseYear: {
          year: 2001,
          endYear: null,
        },
        titleEpisode: null,
        titleText: {
          text: "The Lord of the Rings: The Fellowship of the Ring",
        },
        titleType: {
          id: "movie",
          text: "Movie",
          displayableProperty: {
            value: {
              plainText: "",
            },
          },
          categories: [
            {
              id: "movie",
              text: "Movie",
              value: "movie",
            },
          ],
          canHaveEpisodes: false,
          isSeries: false,
          isEpisode: false,
        },
        series: null,
        watchOptionsByCategory: {
          categorizedWatchOptionsList: [
            {
              watchOptions: [
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.prime_video.hbomaxus",
                    categoryType: "SUBSCRIPTION",
                    description: {
                      value: "with Prime Video Channels",
                    },
                    name: {
                      value: "Max",
                    },
                    refTagFragment: "hbomax",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/3e152962-a236-46be-aa94-2a48296d7129._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/7cdcbf4e-6afe-4136-be75-cd6f2d237c63._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Max",
                  },
                  description: {
                    value: "with Prime Video Channels",
                  },
                  shortDescription: null,
                  link: "aiv://aiv/view?gti=amzn1.dv.gti.a5d191d4-4d20-47d5-92cf-f5623bd117ec",
                },
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.hbo_max",
                    categoryType: "SUBSCRIPTION",
                    description: {
                      value: "with subscription",
                    },
                    name: {
                      value: "Max",
                    },
                    refTagFragment: "hbomax",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/7660eee6-3846-43e9-aadd-bff7846554fb._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/609ae2bb-6e79-45ae-bd76-75da3afac406._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Max",
                  },
                  description: {
                    value: "with subscription",
                  },
                  shortDescription: null,
                  link: "https://play.max.com/video/watch/44154a70-ac47-4ac7-a2d4-01a57609dec2",
                },
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.prime_video.PRIME",
                    categoryType: "SUBSCRIPTION",
                    description: {
                      value: "included with Prime",
                    },
                    name: {
                      value: "Prime Video",
                    },
                    refTagFragment: "pvs_piv",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/e062ea53-945a-42cb-8d15-6405531687ec._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/75f35a85-7a6e-4f1f-bf8b-e4c8556bc4e4._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Prime Video",
                  },
                  description: {
                    value: "included with Prime",
                  },
                  shortDescription: null,
                  link: "aiv://aiv/resume?gti=amzn1.dv.gti.84a9f6d5-bc3f-73a3-e41f-a82b4ff83e67",
                },
              ],
            },
            {
              watchOptions: [
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.prime_video",
                    categoryType: "RENT_OR_BUY",
                    description: null,
                    name: {
                      value: "Prime Video",
                    },
                    refTagFragment: "pvt_aiv",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/4c192978-331f-429e-9c97-02d5ed9d436e._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/b63dfed5-e4fa-434c-be14-d2dc2b60fbae._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Prime Video",
                  },
                  description: {
                    value: "rent/buy from $3.79",
                  },
                  shortDescription: {
                    value: "from $3.79",
                  },
                  link: "aiv://aiv/view?gti=amzn1.dv.gti.84a9f6d5-bc3f-73a3-e41f-a82b4ff83e67",
                },
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.amazon",
                    categoryType: "RENT_OR_BUY",
                    description: {
                      value: "Amazon",
                    },
                    name: {
                      value: "Amazon",
                    },
                    refTagFragment: "amazon",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/b26d1036-b801-4e57-8ce8-70c40cea751f._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/b6a99b0d-356a-4dae-9ffc-248e123b204b._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Search on Amazon",
                  },
                  description: {
                    value: "search for Blu-ray and DVD",
                  },
                  shortDescription: {
                    value: "search Amazon",
                  },
                  link: "com.amazon.mobile.shopping://amazon.com/s?i=movies-tv&k=The+Lord+of+the+Rings%3A+The+Fellowship+of+the+Ring",
                },
              ],
            },
          ],
        },
        latestTrailer: {
          id: "vi684573465",
          contentType: {
            id: "amzn1.imdb.video.contenttype.trailer",
            displayName: {
              value: "Trailer",
            },
          },
          createdDate: "2021-12-20T13:23:10.483Z",
          description: {
            value:
              "A shy young hobbit named Frodo Baggins inherits a simple gold ring. He knows the ring has power, but not that he alone holds the secret to the survival--or enslavement--of the entire world. Now Frodo, accompanied by a wizard, an elf, a dwarf, two men and three loyal hobbit friends, must become the greatest hero the world has ever known to save the land and the people he loves.",
          },
          primaryImage: {
            imageUrl:
              "https://m.media-amazon.com/images/M/MV5BMzQ2YjI2YzgtZmNmMy00ZjUyLWE0NGItY2Y3NjUzZWM4NmM3XkEyXkFqcGdeQWxiaWFtb250._V1_.jpg",
            imageWidth: 1920,
            imageHeight: 1080,
          },
          primaryTitleFragment: {
            id: "tt0120737",
            isAdult: false,
            canRateTitle: {
              isRatable: true,
            },
            originalTitleText: {
              text: "The Lord of the Rings: The Fellowship of the Ring",
            },
            primaryImage: {
              id: "rm3592958976",
              imageUrl:
                "https://m.media-amazon.com/images/M/MV5BNzIxMDQ2YTctNDY4MC00ZTRhLTk4ODQtMTVlOWY4NTdiYmMwXkEyXkFqcGc@._V1_.jpg",
              imageWidth: 1978,
              imageHeight: 2936,
            },
            ratingsSummary: {
              aggregateRating: 8.9,
              topRanking: {
                rank: 9,
              },
              voteCount: 2050915,
            },
            releaseYear: {
              year: 2001,
              endYear: null,
            },
            titleEpisode: null,
            titleText: {
              text: "The Lord of the Rings: The Fellowship of the Ring",
            },
            titleType: {
              id: "movie",
              text: "Movie",
              displayableProperty: {
                value: {
                  plainText: "",
                },
              },
              categories: [
                {
                  id: "movie",
                  text: "Movie",
                  value: "movie",
                },
              ],
              canHaveEpisodes: false,
              isSeries: false,
              isEpisode: false,
            },
            series: null,
          },
          name: {
            value: "Official Trailer",
          },
          runtime: {
            unit: "SECONDS",
            value: 114,
          },
        },
        plot: {
          id: "po0950152",
          author: null,
          plotText: {
            plainText:
              "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
          },
          correctionLink: {
            url: "https://m.imdb.com/title/tt0120737/contribution/plot/po0950152/edit",
          },
          reportingLink: {
            url: "https://m.imdb.com/title/tt0120737/contribution/plot/po0950152/report",
          },
        },
        releaseDate: {
          day: 19,
          month: 12,
          year: 2001,
          country: {
            id: "US",
            text: "United States",
          },
          restriction: null,
          releaseAttributes: [],
        },
        titleCertificate: {
          rating: "PG-13",
          certificateCountry: {
            id: "US",
            text: "United States",
          },
          ratingReason: null,
        },
        titleRuntime: {
          seconds: 10680,
          displayableProperty: {
            qualifiersInMarkdownList: null,
          },
        },
      },
      {
        id: "tt0167260",
        isAdult: false,
        canRateTitle: {
          isRatable: true,
        },
        originalTitleText: {
          text: "The Lord of the Rings: The Return of the King",
        },
        primaryImage: {
          id: "rm584928512",
          imageUrl:
            "https://m.media-amazon.com/images/M/MV5BMTZkMjBjNWMtZGI5OC00MGU0LTk4ZTItODg2NWM3NTVmNWQ4XkEyXkFqcGc@._V1_.jpg",
          imageWidth: 800,
          imageHeight: 1185,
        },
        ratingsSummary: {
          aggregateRating: 9,
          topRanking: {
            rank: 6,
          },
          voteCount: 2021301,
        },
        releaseYear: {
          year: 2003,
          endYear: null,
        },
        titleEpisode: null,
        titleText: {
          text: "The Lord of the Rings: The Return of the King",
        },
        titleType: {
          id: "movie",
          text: "Movie",
          displayableProperty: {
            value: {
              plainText: "",
            },
          },
          categories: [
            {
              id: "movie",
              text: "Movie",
              value: "movie",
            },
          ],
          canHaveEpisodes: false,
          isSeries: false,
          isEpisode: false,
        },
        series: null,
        watchOptionsByCategory: {
          categorizedWatchOptionsList: [
            {
              watchOptions: [
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.prime_video.hbomaxus",
                    categoryType: "SUBSCRIPTION",
                    description: {
                      value: "with Prime Video Channels",
                    },
                    name: {
                      value: "Max",
                    },
                    refTagFragment: "hbomax",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/3e152962-a236-46be-aa94-2a48296d7129._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/7cdcbf4e-6afe-4136-be75-cd6f2d237c63._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Max",
                  },
                  description: {
                    value: "with Prime Video Channels",
                  },
                  shortDescription: null,
                  link: "aiv://aiv/view?gti=amzn1.dv.gti.91d91081-a2e1-4004-af7d-4efb31e99e27",
                },
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.hbo_max",
                    categoryType: "SUBSCRIPTION",
                    description: {
                      value: "with subscription",
                    },
                    name: {
                      value: "Max",
                    },
                    refTagFragment: "hbomax",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/7660eee6-3846-43e9-aadd-bff7846554fb._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/609ae2bb-6e79-45ae-bd76-75da3afac406._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Max",
                  },
                  description: {
                    value: "with subscription",
                  },
                  shortDescription: null,
                  link: "https://play.max.com/video/watch/7b78e88c-4711-437b-ad8d-727adcbc35c6",
                },
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.prime_video.PRIME",
                    categoryType: "SUBSCRIPTION",
                    description: {
                      value: "included with Prime",
                    },
                    name: {
                      value: "Prime Video",
                    },
                    refTagFragment: "pvs_piv",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/e062ea53-945a-42cb-8d15-6405531687ec._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/75f35a85-7a6e-4f1f-bf8b-e4c8556bc4e4._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Prime Video",
                  },
                  description: {
                    value: "included with Prime",
                  },
                  shortDescription: null,
                  link: "aiv://aiv/resume?gti=amzn1.dv.gti.91d91081-a2e1-4004-af7d-4efb31e99e27",
                },
              ],
            },
            {
              watchOptions: [
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.prime_video",
                    categoryType: "RENT_OR_BUY",
                    description: null,
                    name: {
                      value: "Prime Video",
                    },
                    refTagFragment: "pvt_aiv",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/4c192978-331f-429e-9c97-02d5ed9d436e._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/b63dfed5-e4fa-434c-be14-d2dc2b60fbae._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Prime Video",
                  },
                  description: {
                    value: "rent/buy from $3.99",
                  },
                  shortDescription: {
                    value: "from $3.99",
                  },
                  link: "aiv://aiv/view?gti=amzn1.dv.gti.91d91081-a2e1-4004-af7d-4efb31e99e27",
                },
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.amazon",
                    categoryType: "RENT_OR_BUY",
                    description: {
                      value: "Amazon",
                    },
                    name: {
                      value: "Amazon",
                    },
                    refTagFragment: "amazon",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/b26d1036-b801-4e57-8ce8-70c40cea751f._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/b6a99b0d-356a-4dae-9ffc-248e123b204b._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Search on Amazon",
                  },
                  description: {
                    value: "search for Blu-ray and DVD",
                  },
                  shortDescription: {
                    value: "search Amazon",
                  },
                  link: "com.amazon.mobile.shopping://amazon.com/s?i=movies-tv&k=The+Lord+of+the+Rings%3A+The+Return+of+the+King",
                },
              ],
            },
          ],
        },
        latestTrailer: {
          id: "vi2081145881",
          contentType: {
            id: "amzn1.imdb.video.contenttype.trailer",
            displayName: {
              value: "Trailer",
            },
          },
          createdDate: "2023-04-13T17:05:16.346Z",
          description: {
            value: "Fathom Events Trailer",
          },
          primaryImage: {
            imageUrl:
              "https://m.media-amazon.com/images/M/MV5BNmVhNjhkMTAtN2I1YS00Y2Q1LWI1NTYtOGIxNzVhNzY4OGE0XkEyXkFqcGdeQVRoaXJkUGFydHlJbmdlc3Rpb25Xb3JrZmxvdw@@._V1_.jpg",
            imageWidth: 1920,
            imageHeight: 1080,
          },
          primaryTitleFragment: {
            id: "tt0167260",
            isAdult: false,
            canRateTitle: {
              isRatable: true,
            },
            originalTitleText: {
              text: "The Lord of the Rings: The Return of the King",
            },
            primaryImage: {
              id: "rm584928512",
              imageUrl:
                "https://m.media-amazon.com/images/M/MV5BMTZkMjBjNWMtZGI5OC00MGU0LTk4ZTItODg2NWM3NTVmNWQ4XkEyXkFqcGc@._V1_.jpg",
              imageWidth: 800,
              imageHeight: 1185,
            },
            ratingsSummary: {
              aggregateRating: 9,
              topRanking: {
                rank: 6,
              },
              voteCount: 2021301,
            },
            releaseYear: {
              year: 2003,
              endYear: null,
            },
            titleEpisode: null,
            titleText: {
              text: "The Lord of the Rings: The Return of the King",
            },
            titleType: {
              id: "movie",
              text: "Movie",
              displayableProperty: {
                value: {
                  plainText: "",
                },
              },
              categories: [
                {
                  id: "movie",
                  text: "Movie",
                  value: "movie",
                },
              ],
              canHaveEpisodes: false,
              isSeries: false,
              isEpisode: false,
            },
            series: null,
          },
          name: {
            value: "The Lord Of The Rings: The Return Of The King",
          },
          runtime: {
            unit: "SECONDS",
            value: 31,
          },
        },
        plot: {
          id: "po1000992",
          author: null,
          plotText: {
            plainText:
              "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
          },
          correctionLink: {
            url: "https://m.imdb.com/title/tt0167260/contribution/plot/po1000992/edit",
          },
          reportingLink: {
            url: "https://m.imdb.com/title/tt0167260/contribution/plot/po1000992/report",
          },
        },
        releaseDate: {
          day: 17,
          month: 12,
          year: 2003,
          country: {
            id: "US",
            text: "United States",
          },
          restriction: null,
          releaseAttributes: [],
        },
        titleCertificate: {
          rating: "PG-13",
          certificateCountry: {
            id: "US",
            text: "United States",
          },
          ratingReason:
            "Rated PG-13 for intense epic battle sequences and frightening images",
        },
        titleRuntime: {
          seconds: 12060,
          displayableProperty: {
            qualifiersInMarkdownList: null,
          },
        },
      },
      {
        id: "tt0068646",
        isAdult: false,
        canRateTitle: {
          isRatable: true,
        },
        originalTitleText: {
          text: "The Godfather",
        },
        primaryImage: {
          id: "rm746868224",
          imageUrl:
            "https://m.media-amazon.com/images/M/MV5BYTJkNGQyZDgtZDQ0NC00MDM0LWEzZWQtYzUzZDEwMDljZWNjXkEyXkFqcGc@._V1_.jpg",
          imageWidth: 1396,
          imageHeight: 1982,
        },
        ratingsSummary: {
          aggregateRating: 9.2,
          topRanking: {
            rank: 2,
          },
          voteCount: 2058267,
        },
        releaseYear: {
          year: 1972,
          endYear: null,
        },
        titleEpisode: null,
        titleText: {
          text: "The Godfather",
        },
        titleType: {
          id: "movie",
          text: "Movie",
          displayableProperty: {
            value: {
              plainText: "",
            },
          },
          categories: [
            {
              id: "movie",
              text: "Movie",
              value: "movie",
            },
          ],
          canHaveEpisodes: false,
          isSeries: false,
          isEpisode: false,
        },
        series: null,
        watchOptionsByCategory: {
          categorizedWatchOptionsList: [
            {
              watchOptions: [
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.prime_video.cbsaaca",
                    categoryType: "SUBSCRIPTION",
                    description: {
                      value: "with Prime Video Channels",
                    },
                    name: {
                      value: "Paramount+",
                    },
                    refTagFragment: "pvc_paramount+",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/83230f2a-d6e3-41ed-bf4d-9c4bbddff767._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/ef380fc5-d6b9-44de-9ad7-c91baefebf4e._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Paramount+",
                  },
                  description: {
                    value: "with Prime Video Channels",
                  },
                  shortDescription: null,
                  link: "aiv://aiv/view?gti=amzn1.dv.gti.64a9f786-efb1-28d3-bf27-6038d12cc53a",
                },
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.cbs_aa",
                    categoryType: "SUBSCRIPTION",
                    description: {
                      value: "with subscription",
                    },
                    name: {
                      value: "Paramount+",
                    },
                    refTagFragment: "paramount+",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/e49120ab-6b5f-4646-9948-ae0938f24ddd._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/c5b957f1-4220-47c0-b5e0-bbbad817fc1f._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Paramount+",
                  },
                  description: {
                    value: "with subscription",
                  },
                  shortDescription: null,
                  link: "https://www.cbs.com/all-access/",
                },
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.pluto",
                    categoryType: "SUBSCRIPTION",
                    description: {
                      value: "Go to pluto.tv",
                    },
                    name: {
                      value: "Pluto TV",
                    },
                    refTagFragment: "pluto",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/643318a5-306a-4a10-bf34-2d05985d2786._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/ca986b38-0182-4a91-b9a3-8d61c84d4e59._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Pluto TV",
                  },
                  description: {
                    value: "Go to pluto.tv",
                  },
                  shortDescription: null,
                  link: "https://pluto.tv/on-demand/movies/6137ee7dc79f030013e056d0?utm_source=amazon&utm_medium=ossearch",
                },
              ],
            },
            {
              watchOptions: [
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.prime_video",
                    categoryType: "RENT_OR_BUY",
                    description: null,
                    name: {
                      value: "Prime Video",
                    },
                    refTagFragment: "pvt_aiv",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/4c192978-331f-429e-9c97-02d5ed9d436e._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/b63dfed5-e4fa-434c-be14-d2dc2b60fbae._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Prime Video",
                  },
                  description: {
                    value: "rent/buy from $3.59",
                  },
                  shortDescription: {
                    value: "from $3.59",
                  },
                  link: "aiv://aiv/view?gti=amzn1.dv.gti.64a9f786-efb1-28d3-bf27-6038d12cc53a",
                },
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.amazon",
                    categoryType: "RENT_OR_BUY",
                    description: {
                      value: "Amazon",
                    },
                    name: {
                      value: "Amazon",
                    },
                    refTagFragment: "amazon",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/b26d1036-b801-4e57-8ce8-70c40cea751f._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/b6a99b0d-356a-4dae-9ffc-248e123b204b._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Search on Amazon",
                  },
                  description: {
                    value: "search for Blu-ray and DVD",
                  },
                  shortDescription: {
                    value: "search Amazon",
                  },
                  link: "com.amazon.mobile.shopping://amazon.com/s?i=movies-tv&k=The+Godfather",
                },
              ],
            },
          ],
        },
        latestTrailer: {
          id: "vi1629995801",
          contentType: {
            id: "amzn1.imdb.video.contenttype.trailer",
            displayName: {
              value: "Trailer",
            },
          },
          createdDate: "2022-01-14T17:03:14.994Z",
          description: {
            value: "Trailer 1",
          },
          primaryImage: {
            imageUrl:
              "https://m.media-amazon.com/images/M/MV5BMTkzNTkxMDUtNDJmMi00MjNhLWIyNjItN2RjZmE0MjllNTI0XkEyXkFqcGdeQVRoaXJkUGFydHlJbmdlc3Rpb25Xb3JrZmxvdw@@._V1_.jpg",
            imageWidth: 1920,
            imageHeight: 1080,
          },
          primaryTitleFragment: {
            id: "tt0068646",
            isAdult: false,
            canRateTitle: {
              isRatable: true,
            },
            originalTitleText: {
              text: "The Godfather",
            },
            primaryImage: {
              id: "rm746868224",
              imageUrl:
                "https://m.media-amazon.com/images/M/MV5BYTJkNGQyZDgtZDQ0NC00MDM0LWEzZWQtYzUzZDEwMDljZWNjXkEyXkFqcGc@._V1_.jpg",
              imageWidth: 1396,
              imageHeight: 1982,
            },
            ratingsSummary: {
              aggregateRating: 9.2,
              topRanking: {
                rank: 2,
              },
              voteCount: 2058267,
            },
            releaseYear: {
              year: 1972,
              endYear: null,
            },
            titleEpisode: null,
            titleText: {
              text: "The Godfather",
            },
            titleType: {
              id: "movie",
              text: "Movie",
              displayableProperty: {
                value: {
                  plainText: "",
                },
              },
              categories: [
                {
                  id: "movie",
                  text: "Movie",
                  value: "movie",
                },
              ],
              canHaveEpisodes: false,
              isSeries: false,
              isEpisode: false,
            },
            series: null,
          },
          name: {
            value: "The Godfather",
          },
          runtime: {
            unit: "SECONDS",
            value: 123,
          },
        },
        plot: {
          id: "po1065441",
          author: null,
          plotText: {
            plainText:
              "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
          },
          correctionLink: {
            url: "https://m.imdb.com/title/tt0068646/contribution/plot/po1065441/edit",
          },
          reportingLink: {
            url: "https://m.imdb.com/title/tt0068646/contribution/plot/po1065441/report",
          },
        },
        releaseDate: {
          day: 24,
          month: 3,
          year: 1972,
          country: {
            id: "US",
            text: "United States",
          },
          restriction: null,
          releaseAttributes: [],
        },
        titleCertificate: {
          rating: "R",
          certificateCountry: {
            id: "US",
            text: "United States",
          },
          ratingReason: null,
        },
        titleRuntime: {
          seconds: 10500,
          displayableProperty: {
            qualifiersInMarkdownList: null,
          },
        },
      },
      {
        id: "tt8864596",
        isAdult: false,
        canRateTitle: {
          isRatable: true,
        },
        originalTitleText: {
          text: "Transformers One",
        },
        primaryImage: {
          id: "rm4185549313",
          imageUrl:
            "https://m.media-amazon.com/images/M/MV5BZWI1ZDY1YTQtMjRkNy00ZDZhLWE3OTItMTIwNzliY2Y1MTZhXkEyXkFqcGc@._V1_.jpg",
          imageWidth: 1013,
          imageHeight: 1500,
        },
        ratingsSummary: {
          aggregateRating: 7.8,
          topRanking: null,
          voteCount: 14849,
        },
        releaseYear: {
          year: 2024,
          endYear: null,
        },
        titleEpisode: null,
        titleText: {
          text: "Transformers One",
        },
        titleType: {
          id: "movie",
          text: "Movie",
          displayableProperty: {
            value: {
              plainText: "",
            },
          },
          categories: [
            {
              id: "movie",
              text: "Movie",
              value: "movie",
            },
          ],
          canHaveEpisodes: false,
          isSeries: false,
          isEpisode: false,
        },
        series: null,
        watchOptionsByCategory: {
          categorizedWatchOptionsList: [],
        },
        latestTrailer: {
          id: "vi1784137241",
          contentType: {
            id: "amzn1.imdb.video.contenttype.trailer",
            displayName: {
              value: "Trailer",
            },
          },
          createdDate: "2024-09-19T17:03:55.375Z",
          description: {
            value: "Final Trailer",
          },
          primaryImage: {
            imageUrl:
              "https://m.media-amazon.com/images/M/MV5BOWVmYzMwNmItYzhhYS00YzdmLWIwYzMtNTBmYjc4NjM3MDg3XkEyXkFqcGdeQVRoaXJkUGFydHlJbmdlc3Rpb25Xb3JrZmxvdw@@._V1_.jpg",
            imageWidth: 1920,
            imageHeight: 1080,
          },
          primaryTitleFragment: {
            id: "tt8864596",
            isAdult: false,
            canRateTitle: {
              isRatable: true,
            },
            originalTitleText: {
              text: "Transformers One",
            },
            primaryImage: {
              id: "rm4185549313",
              imageUrl:
                "https://m.media-amazon.com/images/M/MV5BZWI1ZDY1YTQtMjRkNy00ZDZhLWE3OTItMTIwNzliY2Y1MTZhXkEyXkFqcGc@._V1_.jpg",
              imageWidth: 1013,
              imageHeight: 1500,
            },
            ratingsSummary: {
              aggregateRating: 7.8,
              topRanking: null,
              voteCount: 14849,
            },
            releaseYear: {
              year: 2024,
              endYear: null,
            },
            titleEpisode: null,
            titleText: {
              text: "Transformers One",
            },
            titleType: {
              id: "movie",
              text: "Movie",
              displayableProperty: {
                value: {
                  plainText: "",
                },
              },
              categories: [
                {
                  id: "movie",
                  text: "Movie",
                  value: "movie",
                },
              ],
              canHaveEpisodes: false,
              isSeries: false,
              isEpisode: false,
            },
            series: null,
          },
          name: {
            value: "Transformers One",
          },
          runtime: {
            unit: "SECONDS",
            value: 100,
          },
        },
        plot: {
          id: "po5123244",
          author: null,
          plotText: {
            plainText:
              "The untold origin story of Optimus Prime and Megatron, better known as sworn enemies, but who once were friends bonded like brothers who changed the fate of Cybertron forever.",
          },
          correctionLink: {
            url: "https://m.imdb.com/title/tt8864596/contribution/plot/po5123244/edit",
          },
          reportingLink: {
            url: "https://m.imdb.com/title/tt8864596/contribution/plot/po5123244/report",
          },
        },
        releaseDate: {
          day: 20,
          month: 9,
          year: 2024,
          country: {
            id: "US",
            text: "United States",
          },
          restriction: null,
          releaseAttributes: [],
        },
        titleCertificate: {
          rating: "PG",
          certificateCountry: {
            id: "US",
            text: "United States",
          },
          ratingReason:
            "Rated PG for sci-fi violence and animated action throughout, and language.",
        },
        titleRuntime: {
          seconds: 6240,
          displayableProperty: {
            qualifiersInMarkdownList: null,
          },
        },
      },
      {
        id: "tt0133093",
        isAdult: false,
        canRateTitle: {
          isRatable: true,
        },
        originalTitleText: {
          text: "The Matrix",
        },
        primaryImage: {
          id: "rm525547776",
          imageUrl:
            "https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_.jpg",
          imageWidth: 2100,
          imageHeight: 3156,
        },
        ratingsSummary: {
          aggregateRating: 8.7,
          topRanking: {
            rank: 16,
          },
          voteCount: 2096418,
        },
        releaseYear: {
          year: 1999,
          endYear: null,
        },
        titleEpisode: null,
        titleText: {
          text: "The Matrix",
        },
        titleType: {
          id: "movie",
          text: "Movie",
          displayableProperty: {
            value: {
              plainText: "",
            },
          },
          categories: [
            {
              id: "movie",
              text: "Movie",
              value: "movie",
            },
          ],
          canHaveEpisodes: false,
          isSeries: false,
          isEpisode: false,
        },
        series: null,
        watchOptionsByCategory: {
          categorizedWatchOptionsList: [
            {
              watchOptions: [
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.rokuchannel",
                    categoryType: "SUBSCRIPTION",
                    description: {
                      value: "Watch free on The Roku Channel",
                    },
                    name: {
                      value: "The Roku Channel",
                    },
                    refTagFragment: "rokuchannel",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/5ed2b144-6e87-46b6-aae3-55663c5327b1._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/c85bfc80-aca5-440e-948b-e76bbe0eae50._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on The Roku Channel",
                  },
                  description: {
                    value: "Watch free on The Roku Channel",
                  },
                  shortDescription: null,
                  link: "https://therokuchannel.roku.com/details/e981c230598059f2bf41f94156700488",
                },
              ],
            },
            {
              watchOptions: [
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.prime_video",
                    categoryType: "RENT_OR_BUY",
                    description: null,
                    name: {
                      value: "Prime Video",
                    },
                    refTagFragment: "pvt_aiv",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/4c192978-331f-429e-9c97-02d5ed9d436e._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/b63dfed5-e4fa-434c-be14-d2dc2b60fbae._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Prime Video",
                  },
                  description: {
                    value: "rent/buy from $3.99",
                  },
                  shortDescription: {
                    value: "from $3.99",
                  },
                  link: "aiv://aiv/view?gti=amzn1.dv.gti.dea9f6b7-e0a0-38c9-7467-d6079c6fb4f0",
                },
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.amazon",
                    categoryType: "RENT_OR_BUY",
                    description: {
                      value: "Amazon",
                    },
                    name: {
                      value: "Amazon",
                    },
                    refTagFragment: "amazon",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/b26d1036-b801-4e57-8ce8-70c40cea751f._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/b6a99b0d-356a-4dae-9ffc-248e123b204b._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Search on Amazon",
                  },
                  description: {
                    value: "search for Blu-ray and DVD",
                  },
                  shortDescription: {
                    value: "search Amazon",
                  },
                  link: "com.amazon.mobile.shopping://amazon.com/s?i=movies-tv&k=The+Matrix",
                },
              ],
            },
          ],
        },
        latestTrailer: {
          id: "vi1032782617",
          contentType: {
            id: "amzn1.imdb.video.contenttype.trailer",
            displayName: {
              value: "Trailer",
            },
          },
          createdDate: "2008-12-19T07:12:53Z",
          description: {
            value:
              "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers. ",
          },
          primaryImage: {
            imageUrl:
              "https://m.media-amazon.com/images/M/MV5BNDQ4NTRmN2ItYjgzMS00MzY3LWEwNmYtYmE2ODllZDdhNGI1XkEyXkFqcGdeQXdvbmtpbQ@@._V1_.jpg",
            imageWidth: 2048,
            imageHeight: 1066,
          },
          primaryTitleFragment: {
            id: "tt0133093",
            isAdult: false,
            canRateTitle: {
              isRatable: true,
            },
            originalTitleText: {
              text: "The Matrix",
            },
            primaryImage: {
              id: "rm525547776",
              imageUrl:
                "https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_.jpg",
              imageWidth: 2100,
              imageHeight: 3156,
            },
            ratingsSummary: {
              aggregateRating: 8.7,
              topRanking: {
                rank: 16,
              },
              voteCount: 2096418,
            },
            releaseYear: {
              year: 1999,
              endYear: null,
            },
            titleEpisode: null,
            titleText: {
              text: "The Matrix",
            },
            titleType: {
              id: "movie",
              text: "Movie",
              displayableProperty: {
                value: {
                  plainText: "",
                },
              },
              categories: [
                {
                  id: "movie",
                  text: "Movie",
                  value: "movie",
                },
              ],
              canHaveEpisodes: false,
              isSeries: false,
              isEpisode: false,
            },
            series: null,
          },
          name: {
            value: "Theatrical Trailer",
          },
          runtime: {
            unit: "SECONDS",
            value: 146,
          },
        },
        plot: {
          id: "po0951007",
          author: null,
          plotText: {
            plainText:
              "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
          },
          correctionLink: {
            url: "https://m.imdb.com/title/tt0133093/contribution/plot/po0951007/edit",
          },
          reportingLink: {
            url: "https://m.imdb.com/title/tt0133093/contribution/plot/po0951007/report",
          },
        },
        releaseDate: {
          day: 31,
          month: 3,
          year: 1999,
          country: {
            id: "US",
            text: "United States",
          },
          restriction: null,
          releaseAttributes: [],
        },
        titleCertificate: {
          rating: "R",
          certificateCountry: {
            id: "US",
            text: "United States",
          },
          ratingReason: "Rated R for sci-fi violence and brief language",
        },
        titleRuntime: {
          seconds: 8160,
          displayableProperty: {
            qualifiersInMarkdownList: null,
          },
        },
      },
      {
        id: "tt0114369",
        isAdult: false,
        canRateTitle: {
          isRatable: true,
        },
        originalTitleText: {
          text: "Se7en",
        },
        primaryImage: {
          id: "rm3116368640",
          imageUrl:
            "https://m.media-amazon.com/images/M/MV5BY2IzNzMxZjctZjUxZi00YzAxLTk3ZjMtODFjODdhMDU5NDM1XkEyXkFqcGc@._V1_.jpg",
          imageWidth: 1801,
          imageHeight: 2815,
        },
        ratingsSummary: {
          aggregateRating: 8.6,
          topRanking: {
            rank: 20,
          },
          voteCount: 1843482,
        },
        releaseYear: {
          year: 1995,
          endYear: null,
        },
        titleEpisode: null,
        titleText: {
          text: "Se7en",
        },
        titleType: {
          id: "movie",
          text: "Movie",
          displayableProperty: {
            value: {
              plainText: "",
            },
          },
          categories: [
            {
              id: "movie",
              text: "Movie",
              value: "movie",
            },
          ],
          canHaveEpisodes: false,
          isSeries: false,
          isEpisode: false,
        },
        series: null,
        watchOptionsByCategory: {
          categorizedWatchOptionsList: [
            {
              watchOptions: [
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.bbc_usa",
                    categoryType: "SUBSCRIPTION",
                    description: {
                      value: "Go to bbcamerica.com",
                    },
                    name: {
                      value: "BBC America",
                    },
                    refTagFragment: "bbc_usa",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/dcd398ba-707c-4272-9d83-daed4e2e1b10._V1_.png",
                        width: 512,
                        height: 512,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/106f2e90-8b17-4063-8511-9dccc54e7b30._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on BBC America",
                  },
                  description: {
                    value: "Go to bbcamerica.com",
                  },
                  shortDescription: null,
                  link: "https://www.bbcamerica.com/all-shows",
                },
              ],
            },
            {
              watchOptions: [
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.prime_video",
                    categoryType: "RENT_OR_BUY",
                    description: null,
                    name: {
                      value: "Prime Video",
                    },
                    refTagFragment: "pvt_aiv",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/4c192978-331f-429e-9c97-02d5ed9d436e._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/b63dfed5-e4fa-434c-be14-d2dc2b60fbae._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Prime Video",
                  },
                  description: {
                    value: "rent/buy from $3.79",
                  },
                  shortDescription: {
                    value: "from $3.79",
                  },
                  link: "aiv://aiv/view?gti=amzn1.dv.gti.58a9f7ae-e989-6bf7-a14d-e7465c7e1aa6",
                },
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.amazon",
                    categoryType: "RENT_OR_BUY",
                    description: {
                      value: "Amazon",
                    },
                    name: {
                      value: "Amazon",
                    },
                    refTagFragment: "amazon",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/b26d1036-b801-4e57-8ce8-70c40cea751f._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/b6a99b0d-356a-4dae-9ffc-248e123b204b._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Search on Amazon",
                  },
                  description: {
                    value: "search for Blu-ray and DVD",
                  },
                  shortDescription: {
                    value: "search Amazon",
                  },
                  link: "com.amazon.mobile.shopping://amazon.com/s?i=movies-tv&k=Se7en",
                },
              ],
            },
          ],
        },
        latestTrailer: {
          id: "vi2508831257",
          contentType: {
            id: "amzn1.imdb.video.contenttype.trailer",
            displayName: {
              value: "Trailer",
            },
          },
          createdDate: "2018-10-29T19:58:54.841Z",
          description: {
            value: "",
          },
          primaryImage: {
            imageUrl:
              "https://m.media-amazon.com/images/M/MV5BZmMxNmJiYzctNGRkZC00YzcxLTgyNjMtMmIxZWVlNDA4ZWRjXkEyXkFqcGdeQXRodW1ibmFpbC1pbml0aWFsaXplcg@@._V1_.jpg",
            imageWidth: 640,
            imageHeight: 360,
          },
          primaryTitleFragment: {
            id: "tt0114369",
            isAdult: false,
            canRateTitle: {
              isRatable: true,
            },
            originalTitleText: {
              text: "Se7en",
            },
            primaryImage: {
              id: "rm3116368640",
              imageUrl:
                "https://m.media-amazon.com/images/M/MV5BY2IzNzMxZjctZjUxZi00YzAxLTk3ZjMtODFjODdhMDU5NDM1XkEyXkFqcGc@._V1_.jpg",
              imageWidth: 1801,
              imageHeight: 2815,
            },
            ratingsSummary: {
              aggregateRating: 8.6,
              topRanking: {
                rank: 20,
              },
              voteCount: 1843482,
            },
            releaseYear: {
              year: 1995,
              endYear: null,
            },
            titleEpisode: null,
            titleText: {
              text: "Se7en",
            },
            titleType: {
              id: "movie",
              text: "Movie",
              displayableProperty: {
                value: {
                  plainText: "",
                },
              },
              categories: [
                {
                  id: "movie",
                  text: "Movie",
                  value: "movie",
                },
              ],
              canHaveEpisodes: false,
              isSeries: false,
              isEpisode: false,
            },
            series: null,
          },
          name: {
            value: "Official Trailer",
          },
          runtime: {
            unit: "SECONDS",
            value: 137,
          },
        },
        plot: {
          id: "po0949295",
          author: null,
          plotText: {
            plainText:
              "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
          },
          correctionLink: {
            url: "https://m.imdb.com/title/tt0114369/contribution/plot/po0949295/edit",
          },
          reportingLink: {
            url: "https://m.imdb.com/title/tt0114369/contribution/plot/po0949295/report",
          },
        },
        releaseDate: {
          day: 22,
          month: 9,
          year: 1995,
          country: {
            id: "US",
            text: "United States",
          },
          restriction: null,
          releaseAttributes: [],
        },
        titleCertificate: {
          rating: "R",
          certificateCountry: {
            id: "US",
            text: "United States",
          },
          ratingReason:
            "Rated R for grisly afterviews of horrific and bizarre killings, and for strong language",
        },
        titleRuntime: {
          seconds: 7620,
          displayableProperty: {
            qualifiersInMarkdownList: null,
          },
        },
      },
      {
        id: "tt1345836",
        isAdult: false,
        canRateTitle: {
          isRatable: true,
        },
        originalTitleText: {
          text: "The Dark Knight Rises",
        },
        primaryImage: {
          id: "rm834516224",
          imageUrl:
            "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_.jpg",
          imageWidth: 486,
          imageHeight: 720,
        },
        ratingsSummary: {
          aggregateRating: 8.4,
          topRanking: {
            rank: 71,
          },
          voteCount: 1863824,
        },
        releaseYear: {
          year: 2012,
          endYear: null,
        },
        titleEpisode: null,
        titleText: {
          text: "The Dark Knight Rises",
        },
        titleType: {
          id: "movie",
          text: "Movie",
          displayableProperty: {
            value: {
              plainText: "",
            },
          },
          categories: [
            {
              id: "movie",
              text: "Movie",
              value: "movie",
            },
          ],
          canHaveEpisodes: false,
          isSeries: false,
          isEpisode: false,
        },
        series: null,
        watchOptionsByCategory: {
          categorizedWatchOptionsList: [
            {
              watchOptions: [
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.prime_video.hbomaxus",
                    categoryType: "SUBSCRIPTION",
                    description: {
                      value: "with Prime Video Channels",
                    },
                    name: {
                      value: "Max",
                    },
                    refTagFragment: "hbomax",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/3e152962-a236-46be-aa94-2a48296d7129._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/7cdcbf4e-6afe-4136-be75-cd6f2d237c63._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Max",
                  },
                  description: {
                    value: "with Prime Video Channels",
                  },
                  shortDescription: null,
                  link: "aiv://aiv/view?gti=amzn1.dv.gti.1ea9f6f7-7781-df4e-60bf-d24b8365b375",
                },
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.hbo_max",
                    categoryType: "SUBSCRIPTION",
                    description: {
                      value: "with subscription",
                    },
                    name: {
                      value: "Max",
                    },
                    refTagFragment: "hbomax",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/7660eee6-3846-43e9-aadd-bff7846554fb._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/609ae2bb-6e79-45ae-bd76-75da3afac406._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Max",
                  },
                  description: {
                    value: "with subscription",
                  },
                  shortDescription: null,
                  link: "https://play.max.com/video/watch/e95435b2-2c89-4788-b711-b7f346f03da9",
                },
              ],
            },
            {
              watchOptions: [
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.prime_video",
                    categoryType: "RENT_OR_BUY",
                    description: null,
                    name: {
                      value: "Prime Video",
                    },
                    refTagFragment: "pvt_aiv",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/4c192978-331f-429e-9c97-02d5ed9d436e._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/b63dfed5-e4fa-434c-be14-d2dc2b60fbae._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Prime Video",
                  },
                  description: {
                    value: "rent/buy from $3.79",
                  },
                  shortDescription: {
                    value: "from $3.79",
                  },
                  link: "aiv://aiv/view?gti=amzn1.dv.gti.1ea9f6f7-7781-df4e-60bf-d24b8365b375",
                },
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.amazon",
                    categoryType: "RENT_OR_BUY",
                    description: {
                      value: "Amazon",
                    },
                    name: {
                      value: "Amazon",
                    },
                    refTagFragment: "amazon",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/b26d1036-b801-4e57-8ce8-70c40cea751f._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/b6a99b0d-356a-4dae-9ffc-248e123b204b._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Search on Amazon",
                  },
                  description: {
                    value: "search for Blu-ray and DVD",
                  },
                  shortDescription: {
                    value: "search Amazon",
                  },
                  link: "com.amazon.mobile.shopping://amazon.com/s?i=movies-tv&k=The+Dark+Knight+Rises",
                },
              ],
            },
          ],
        },
        latestTrailer: {
          id: "vi144884505",
          contentType: {
            id: "amzn1.imdb.video.contenttype.trailer",
            displayName: {
              value: "Trailer",
            },
          },
          createdDate: "2021-09-20T04:45:42.326Z",
          description: {
            value:
              "Eight years after the Joker's reign of anarchy, Batman, with the help of the enigmatic Catwoman, is forced from his exile to save Gotham City from the brutal guerrilla terrorist Bane.",
          },
          primaryImage: {
            imageUrl:
              "https://m.media-amazon.com/images/M/MV5BMGIwYmIwNWYtNzkxZC00YTdmLWI2NmMtYzA0ODZkNTNlZWMwXkEyXkFqcGdeQWFuaW5vc2M@._V1_.jpg",
            imageWidth: 1920,
            imageHeight: 1080,
          },
          primaryTitleFragment: {
            id: "tt1345836",
            isAdult: false,
            canRateTitle: {
              isRatable: true,
            },
            originalTitleText: {
              text: "The Dark Knight Rises",
            },
            primaryImage: {
              id: "rm834516224",
              imageUrl:
                "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_.jpg",
              imageWidth: 486,
              imageHeight: 720,
            },
            ratingsSummary: {
              aggregateRating: 8.4,
              topRanking: {
                rank: 71,
              },
              voteCount: 1863824,
            },
            releaseYear: {
              year: 2012,
              endYear: null,
            },
            titleEpisode: null,
            titleText: {
              text: "The Dark Knight Rises",
            },
            titleType: {
              id: "movie",
              text: "Movie",
              displayableProperty: {
                value: {
                  plainText: "",
                },
              },
              categories: [
                {
                  id: "movie",
                  text: "Movie",
                  value: "movie",
                },
              ],
              canHaveEpisodes: false,
              isSeries: false,
              isEpisode: false,
            },
            series: null,
          },
          name: {
            value: "4K Trailer",
          },
          runtime: {
            unit: "SECONDS",
            value: 132,
          },
        },
        plot: {
          id: "po2244247",
          author: null,
          plotText: {
            plainText:
              "Bane, an imposing terrorist, attacks Gotham City and disrupts its eight-year-long period of peace. This forces Bruce Wayne to come out of hiding and don the cape and cowl of Batman again.",
          },
          correctionLink: {
            url: "https://m.imdb.com/title/tt1345836/contribution/plot/po2244247/edit",
          },
          reportingLink: {
            url: "https://m.imdb.com/title/tt1345836/contribution/plot/po2244247/report",
          },
        },
        releaseDate: {
          day: 20,
          month: 7,
          year: 2012,
          country: {
            id: "US",
            text: "United States",
          },
          restriction: null,
          releaseAttributes: [],
        },
        titleCertificate: {
          rating: "PG-13",
          certificateCountry: {
            id: "US",
            text: "United States",
          },
          ratingReason:
            "Rated PG-13 for intense sequences of violence and action, some sensuality and language",
        },
        titleRuntime: {
          seconds: 9840,
          displayableProperty: {
            qualifiersInMarkdownList: null,
          },
        },
      },
      {
        id: "tt14966898",
        isAdult: false,
        canRateTitle: {
          isRatable: true,
        },
        originalTitleText: {
          text: "Late Night with the Devil",
        },
        primaryImage: {
          id: "rm3617028865",
          imageUrl:
            "https://m.media-amazon.com/images/M/MV5BYTRiNWZlNGMtOTUwZi00ZjE4LWE1ZjEtNWE4MGQ2ZGU5NDliXkEyXkFqcGc@._V1_.jpg",
          imageWidth: 8100,
          imageHeight: 12000,
        },
        ratingsSummary: {
          aggregateRating: 7,
          topRanking: {
            rank: 2549,
          },
          voteCount: 88912,
        },
        releaseYear: {
          year: 2023,
          endYear: null,
        },
        titleEpisode: null,
        titleText: {
          text: "Late Night with the Devil",
        },
        titleType: {
          id: "movie",
          text: "Movie",
          displayableProperty: {
            value: {
              plainText: "",
            },
          },
          categories: [
            {
              id: "movie",
              text: "Movie",
              value: "movie",
            },
          ],
          canHaveEpisodes: false,
          isSeries: false,
          isEpisode: false,
        },
        series: null,
        watchOptionsByCategory: {
          categorizedWatchOptionsList: [
            {
              watchOptions: [
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.prime_video.amcplus",
                    categoryType: "SUBSCRIPTION",
                    description: {
                      value: "with Prime Video Channels",
                    },
                    name: {
                      value: "AMC+",
                    },
                    refTagFragment: "pvc_amcplus",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/ec02c0c5-1831-4d6a-911e-6447fa248f13._V1_.png",
                        width: 512,
                        height: 512,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/8e2d7d82-545c-470e-a3a6-9a7cff1f35d2._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on AMC+",
                  },
                  description: {
                    value: "with Prime Video Channels",
                  },
                  shortDescription: null,
                  link: "aiv://aiv/view?gti=amzn1.dv.gti.94b5a8f2-006f-4751-b341-94f6beecc757",
                },
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.amcplus",
                    categoryType: "SUBSCRIPTION",
                    description: {
                      value: "with subscription",
                    },
                    name: {
                      value: "AMC+",
                    },
                    refTagFragment: "amc_plus",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/65ca7b0b-9822-4f1c-baaf-aa6441b60012._V1_.jpg",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/2e24cf5a-e7a0-44d2-9cde-0fa7c23aa90f._V1_.jpg",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on AMC+",
                  },
                  description: {
                    value: "with subscription",
                  },
                  shortDescription: null,
                  link: "https://www.amcplus.com/?utm_medium=referral&utm_source=imdb&utm_campaign=amc+-brand&utm_keyword=&utm_content=",
                },
              ],
            },
            {
              watchOptions: [
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.prime_video",
                    categoryType: "RENT_OR_BUY",
                    description: null,
                    name: {
                      value: "Prime Video",
                    },
                    refTagFragment: "pvt_aiv",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/4c192978-331f-429e-9c97-02d5ed9d436e._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/b63dfed5-e4fa-434c-be14-d2dc2b60fbae._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Prime Video",
                  },
                  description: {
                    value: "rent/buy from $3.99",
                  },
                  shortDescription: {
                    value: "from $3.99",
                  },
                  link: "aiv://aiv/view?gti=amzn1.dv.gti.94b5a8f2-006f-4751-b341-94f6beecc757",
                },
              ],
            },
          ],
        },
        latestTrailer: {
          id: "vi3868378649",
          contentType: {
            id: "amzn1.imdb.video.contenttype.trailer",
            displayName: {
              value: "Trailer",
            },
          },
          createdDate: "2024-03-13T17:04:40.681Z",
          description: {
            value: "Trailer 1",
          },
          primaryImage: {
            imageUrl:
              "https://m.media-amazon.com/images/M/MV5BODE2OTI2YTctMDJmNi00MzI4LWE2ZTktNGI4MjJhY2FhZjI1XkEyXkFqcGdeQVRoaXJkUGFydHlJbmdlc3Rpb25Xb3JrZmxvdw@@._V1_.jpg",
            imageWidth: 1920,
            imageHeight: 1080,
          },
          primaryTitleFragment: {
            id: "tt14966898",
            isAdult: false,
            canRateTitle: {
              isRatable: true,
            },
            originalTitleText: {
              text: "Late Night with the Devil",
            },
            primaryImage: {
              id: "rm3617028865",
              imageUrl:
                "https://m.media-amazon.com/images/M/MV5BYTRiNWZlNGMtOTUwZi00ZjE4LWE1ZjEtNWE4MGQ2ZGU5NDliXkEyXkFqcGc@._V1_.jpg",
              imageWidth: 8100,
              imageHeight: 12000,
            },
            ratingsSummary: {
              aggregateRating: 7,
              topRanking: {
                rank: 2549,
              },
              voteCount: 88912,
            },
            releaseYear: {
              year: 2023,
              endYear: null,
            },
            titleEpisode: null,
            titleText: {
              text: "Late Night with the Devil",
            },
            titleType: {
              id: "movie",
              text: "Movie",
              displayableProperty: {
                value: {
                  plainText: "",
                },
              },
              categories: [
                {
                  id: "movie",
                  text: "Movie",
                  value: "movie",
                },
              ],
              canHaveEpisodes: false,
              isSeries: false,
              isEpisode: false,
            },
            series: null,
          },
          name: {
            value: "Late Night with the Devil",
          },
          runtime: {
            unit: "SECONDS",
            value: 141,
          },
        },
        plot: {
          id: "po6100925",
          author: null,
          plotText: {
            plainText:
              "A live television broadcast in 1977 goes horribly wrong, unleashing evil into the nation's living rooms.",
          },
          correctionLink: {
            url: "https://m.imdb.com/title/tt14966898/contribution/plot/po6100925/edit",
          },
          reportingLink: {
            url: "https://m.imdb.com/title/tt14966898/contribution/plot/po6100925/report",
          },
        },
        releaseDate: {
          day: 22,
          month: 3,
          year: 2024,
          country: {
            id: "US",
            text: "United States",
          },
          restriction: null,
          releaseAttributes: [],
        },
        titleCertificate: {
          rating: "R",
          certificateCountry: {
            id: "US",
            text: "United States",
          },
          ratingReason:
            "Rated R for violent content, some gore, and language including a sexual reference.",
        },
        titleRuntime: {
          seconds: 5580,
          displayableProperty: {
            qualifiersInMarkdownList: null,
          },
        },
      },
      {
        id: "tt6751668",
        isAdult: false,
        canRateTitle: {
          isRatable: true,
        },
        originalTitleText: {
          text: "Gisaengchung",
        },
        primaryImage: {
          id: "rm3194916865",
          imageUrl:
            "https://m.media-amazon.com/images/M/MV5BYjk1Y2U4MjQtY2ZiNS00OWQyLWI3MmYtZWUwNmRjYWRiNWNhXkEyXkFqcGc@._V1_.jpg",
          imageWidth: 2400,
          imageHeight: 3556,
        },
        ratingsSummary: {
          aggregateRating: 8.5,
          topRanking: {
            rank: 33,
          },
          voteCount: 999884,
        },
        releaseYear: {
          year: 2019,
          endYear: null,
        },
        titleEpisode: null,
        titleText: {
          text: "Parasite",
        },
        titleType: {
          id: "movie",
          text: "Movie",
          displayableProperty: {
            value: {
              plainText: "",
            },
          },
          categories: [
            {
              id: "movie",
              text: "Movie",
              value: "movie",
            },
          ],
          canHaveEpisodes: false,
          isSeries: false,
          isEpisode: false,
        },
        series: null,
        watchOptionsByCategory: {
          categorizedWatchOptionsList: [
            {
              watchOptions: [
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.hbo_max",
                    categoryType: "SUBSCRIPTION",
                    description: {
                      value: "with subscription",
                    },
                    name: {
                      value: "Max",
                    },
                    refTagFragment: "hbomax",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/7660eee6-3846-43e9-aadd-bff7846554fb._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/609ae2bb-6e79-45ae-bd76-75da3afac406._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Max",
                  },
                  description: {
                    value: "with subscription",
                  },
                  shortDescription: null,
                  link: "https://play.max.com/video/watch/ffefdf7b-3aa6-4775-b05a-2d2c4ecbbd2d",
                },
              ],
            },
            {
              watchOptions: [
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.prime_video",
                    categoryType: "RENT_OR_BUY",
                    description: null,
                    name: {
                      value: "Prime Video",
                    },
                    refTagFragment: "pvt_aiv",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/4c192978-331f-429e-9c97-02d5ed9d436e._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/b63dfed5-e4fa-434c-be14-d2dc2b60fbae._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Prime Video",
                  },
                  description: {
                    value: "rent/buy from $3.79",
                  },
                  shortDescription: {
                    value: "from $3.79",
                  },
                  link: "aiv://aiv/view?gti=amzn1.dv.gti.42b6c42f-c031-d500-d37f-f63cabec1fa3",
                },
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.amazon",
                    categoryType: "RENT_OR_BUY",
                    description: {
                      value: "Amazon",
                    },
                    name: {
                      value: "Amazon",
                    },
                    refTagFragment: "amazon",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/b26d1036-b801-4e57-8ce8-70c40cea751f._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/b6a99b0d-356a-4dae-9ffc-248e123b204b._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Search on Amazon",
                  },
                  description: {
                    value: "search for Blu-ray and DVD",
                  },
                  shortDescription: {
                    value: "search Amazon",
                  },
                  link: "com.amazon.mobile.shopping://amazon.com/s?i=movies-tv&k=Gisaengchung",
                },
              ],
            },
          ],
        },
        latestTrailer: {
          id: "vi2240462617",
          contentType: {
            id: "amzn1.imdb.video.contenttype.trailer",
            displayName: {
              value: "Trailer",
            },
          },
          createdDate: "2019-10-06T17:07:03.627Z",
          description: {
            value: "Trailer 2 w/ English subtitiles",
          },
          primaryImage: {
            imageUrl:
              "https://m.media-amazon.com/images/M/MV5BNzM2OWM5NGUtNjQ5ZS00MTA1LWI5YzEtN2UzNzM3ZmYxZWM4XkEyXkFqcGdeQTNwaW5nZXN0._V1_.jpg",
            imageWidth: 1920,
            imageHeight: 1080,
          },
          primaryTitleFragment: {
            id: "tt6751668",
            isAdult: false,
            canRateTitle: {
              isRatable: true,
            },
            originalTitleText: {
              text: "Gisaengchung",
            },
            primaryImage: {
              id: "rm3194916865",
              imageUrl:
                "https://m.media-amazon.com/images/M/MV5BYjk1Y2U4MjQtY2ZiNS00OWQyLWI3MmYtZWUwNmRjYWRiNWNhXkEyXkFqcGc@._V1_.jpg",
              imageWidth: 2400,
              imageHeight: 3556,
            },
            ratingsSummary: {
              aggregateRating: 8.5,
              topRanking: {
                rank: 33,
              },
              voteCount: 999884,
            },
            releaseYear: {
              year: 2019,
              endYear: null,
            },
            titleEpisode: null,
            titleText: {
              text: "Parasite",
            },
            titleType: {
              id: "movie",
              text: "Movie",
              displayableProperty: {
                value: {
                  plainText: "",
                },
              },
              categories: [
                {
                  id: "movie",
                  text: "Movie",
                  value: "movie",
                },
              ],
              canHaveEpisodes: false,
              isSeries: false,
              isEpisode: false,
            },
            series: null,
          },
          name: {
            value: "Parasite",
          },
          runtime: {
            unit: "SECONDS",
            value: 63,
          },
        },
        plot: {
          id: "po5095633",
          author: null,
          plotText: {
            plainText:
              "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
          },
          correctionLink: {
            url: "https://m.imdb.com/title/tt6751668/contribution/plot/po5095633/edit",
          },
          reportingLink: {
            url: "https://m.imdb.com/title/tt6751668/contribution/plot/po5095633/report",
          },
        },
        releaseDate: {
          day: 8,
          month: 11,
          year: 2019,
          country: {
            id: "US",
            text: "United States",
          },
          restriction: null,
          releaseAttributes: [],
        },
        titleCertificate: {
          rating: "R",
          certificateCountry: {
            id: "US",
            text: "United States",
          },
          ratingReason:
            "Rated R for language, some violence and sexual content",
        },
        titleRuntime: {
          seconds: 7920,
          displayableProperty: {
            qualifiersInMarkdownList: null,
          },
        },
      },
      {
        id: "tt5875444",
        isAdult: false,
        canRateTitle: {
          isRatable: true,
        },
        originalTitleText: {
          text: "Slow Horses",
        },
        primaryImage: {
          id: "rm4040583425",
          imageUrl:
            "https://m.media-amazon.com/images/M/MV5BOTdiZDlkYTYtMTMwOC00YzczLWI1ZGEtNWU1ZWZkMDAxNGMxXkEyXkFqcGc@._V1_.jpg",
          imageWidth: 1080,
          imageHeight: 1920,
        },
        ratingsSummary: {
          aggregateRating: 8.2,
          topRanking: {
            rank: 569,
          },
          voteCount: 87803,
        },
        releaseYear: {
          year: 2022,
          endYear: null,
        },
        titleEpisode: null,
        titleText: {
          text: "Slow Horses",
        },
        titleType: {
          id: "tvSeries",
          text: "TV Series",
          displayableProperty: {
            value: {
              plainText: "TV Series",
            },
          },
          categories: [
            {
              id: "tv",
              text: "TV",
              value: "tv",
            },
          ],
          canHaveEpisodes: true,
          isSeries: true,
          isEpisode: false,
        },
        series: null,
        watchOptionsByCategory: {
          categorizedWatchOptionsList: [
            {
              watchOptions: [
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.appletv",
                    categoryType: "SUBSCRIPTION",
                    description: {
                      value: "with subscription",
                    },
                    name: {
                      value: "Apple TV+",
                    },
                    refTagFragment: "appletv",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/d2b632fd-044d-40de-a1c8-fc920e2f5d4d._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/2b1f9c41-9007-447c-9aec-663ad10f5805._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Apple TV+",
                  },
                  description: {
                    value: "S1-4 with subscription",
                  },
                  shortDescription: {
                    value: "S1-4",
                  },
                  link: "https://srv.clickfuse.com/ads/adclkr.php?id=100006140&url=https%3A%2F%2Ftv.apple.com%2Fus%2Fchannel%2Ftvs.sbd.4000",
                },
              ],
            },
          ],
        },
        latestTrailer: {
          id: "vi1057998361",
          contentType: {
            id: "amzn1.imdb.video.contenttype.trailer",
            displayName: {
              value: "Trailer",
            },
          },
          createdDate: "2024-08-13T13:55:12.184Z",
          description: {
            value:
              "Follows a team of British intelligence agents who serve as a dumping ground department of MI5 due to their career-ending mistakes.",
          },
          primaryImage: {
            imageUrl:
              "https://m.media-amazon.com/images/M/MV5BMjg3ZmI5NWQtYmIzOS00ZmRkLWFhNjktNzA1MmUwNGQxZDE1XkEyXkFqcGdeQWFkcmllY2xh._V1_.jpg",
            imageWidth: 2731,
            imageHeight: 1536,
          },
          primaryTitleFragment: {
            id: "tt5875444",
            isAdult: false,
            canRateTitle: {
              isRatable: true,
            },
            originalTitleText: {
              text: "Slow Horses",
            },
            primaryImage: {
              id: "rm4040583425",
              imageUrl:
                "https://m.media-amazon.com/images/M/MV5BOTdiZDlkYTYtMTMwOC00YzczLWI1ZGEtNWU1ZWZkMDAxNGMxXkEyXkFqcGc@._V1_.jpg",
              imageWidth: 1080,
              imageHeight: 1920,
            },
            ratingsSummary: {
              aggregateRating: 8.2,
              topRanking: {
                rank: 569,
              },
              voteCount: 87803,
            },
            releaseYear: {
              year: 2022,
              endYear: null,
            },
            titleEpisode: null,
            titleText: {
              text: "Slow Horses",
            },
            titleType: {
              id: "tvSeries",
              text: "TV Series",
              displayableProperty: {
                value: {
                  plainText: "TV Series",
                },
              },
              categories: [
                {
                  id: "tv",
                  text: "TV",
                  value: "tv",
                },
              ],
              canHaveEpisodes: true,
              isSeries: true,
              isEpisode: false,
            },
            series: null,
          },
          name: {
            value: "Official Trailer - Season 4",
          },
          runtime: {
            unit: "SECONDS",
            value: 127,
          },
        },
        plot: {
          id: "po4849223",
          author: null,
          plotText: {
            plainText:
              "Follows a team of British intelligence agents who serve as a dumping ground department of MI5 due to their career-ending mistakes.",
          },
          correctionLink: {
            url: "https://m.imdb.com/title/tt5875444/contribution/plot/po4849223/edit",
          },
          reportingLink: {
            url: "https://m.imdb.com/title/tt5875444/contribution/plot/po4849223/report",
          },
        },
        releaseDate: {
          day: 1,
          month: 4,
          year: 2022,
          country: {
            id: "US",
            text: "United States",
          },
          restriction: null,
          releaseAttributes: [
            {
              text: "internet",
            },
          ],
        },
        titleCertificate: {
          rating: "TV-MA",
          certificateCountry: {
            id: "US",
            text: "United States",
          },
          ratingReason: null,
        },
        titleRuntime: null,
      },
      {
        id: "tt0167261",
        isAdult: false,
        canRateTitle: {
          isRatable: true,
        },
        originalTitleText: {
          text: "The Lord of the Rings: The Two Towers",
        },
        primaryImage: {
          id: "rm306845440",
          imageUrl:
            "https://m.media-amazon.com/images/M/MV5BMGQxMDdiOWUtYjc1Ni00YzM1LWE2NjMtZTg3Y2JkMjEzMTJjXkEyXkFqcGc@._V1_.jpg",
          imageWidth: 964,
          imageHeight: 1500,
        },
        ratingsSummary: {
          aggregateRating: 8.8,
          topRanking: {
            rank: 12,
          },
          voteCount: 1822371,
        },
        releaseYear: {
          year: 2002,
          endYear: null,
        },
        titleEpisode: null,
        titleText: {
          text: "The Lord of the Rings: The Two Towers",
        },
        titleType: {
          id: "movie",
          text: "Movie",
          displayableProperty: {
            value: {
              plainText: "",
            },
          },
          categories: [
            {
              id: "movie",
              text: "Movie",
              value: "movie",
            },
          ],
          canHaveEpisodes: false,
          isSeries: false,
          isEpisode: false,
        },
        series: null,
        watchOptionsByCategory: {
          categorizedWatchOptionsList: [
            {
              watchOptions: [
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.prime_video.hbomaxus",
                    categoryType: "SUBSCRIPTION",
                    description: {
                      value: "with Prime Video Channels",
                    },
                    name: {
                      value: "Max",
                    },
                    refTagFragment: "hbomax",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/3e152962-a236-46be-aa94-2a48296d7129._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/7cdcbf4e-6afe-4136-be75-cd6f2d237c63._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Max",
                  },
                  description: {
                    value: "with Prime Video Channels",
                  },
                  shortDescription: null,
                  link: "aiv://aiv/view?gti=amzn1.dv.gti.a2a9f6ce-d700-f70b-88bf-54f0968a48d5",
                },
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.hbo_max",
                    categoryType: "SUBSCRIPTION",
                    description: {
                      value: "with subscription",
                    },
                    name: {
                      value: "Max",
                    },
                    refTagFragment: "hbomax",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/7660eee6-3846-43e9-aadd-bff7846554fb._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/609ae2bb-6e79-45ae-bd76-75da3afac406._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Max",
                  },
                  description: {
                    value: "with subscription",
                  },
                  shortDescription: null,
                  link: "https://play.max.com/video/watch/586a17ef-d09d-49d6-806c-22f8329979ca",
                },
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.prime_video.PRIME",
                    categoryType: "SUBSCRIPTION",
                    description: {
                      value: "included with Prime",
                    },
                    name: {
                      value: "Prime Video",
                    },
                    refTagFragment: "pvs_piv",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/e062ea53-945a-42cb-8d15-6405531687ec._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/75f35a85-7a6e-4f1f-bf8b-e4c8556bc4e4._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Prime Video",
                  },
                  description: {
                    value: "included with Prime",
                  },
                  shortDescription: null,
                  link: "aiv://aiv/resume?gti=amzn1.dv.gti.a2a9f6ce-d700-f70b-88bf-54f0968a48d5",
                },
              ],
            },
            {
              watchOptions: [
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.prime_video",
                    categoryType: "RENT_OR_BUY",
                    description: null,
                    name: {
                      value: "Prime Video",
                    },
                    refTagFragment: "pvt_aiv",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/4c192978-331f-429e-9c97-02d5ed9d436e._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/b63dfed5-e4fa-434c-be14-d2dc2b60fbae._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Prime Video",
                  },
                  description: {
                    value: "rent/buy from $3.79",
                  },
                  shortDescription: {
                    value: "from $3.79",
                  },
                  link: "aiv://aiv/view?gti=amzn1.dv.gti.a2a9f6ce-d700-f70b-88bf-54f0968a48d5",
                },
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.amazon",
                    categoryType: "RENT_OR_BUY",
                    description: {
                      value: "Amazon",
                    },
                    name: {
                      value: "Amazon",
                    },
                    refTagFragment: "amazon",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/b26d1036-b801-4e57-8ce8-70c40cea751f._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/b6a99b0d-356a-4dae-9ffc-248e123b204b._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Search on Amazon",
                  },
                  description: {
                    value: "search for Blu-ray and DVD",
                  },
                  shortDescription: {
                    value: "search Amazon",
                  },
                  link: "com.amazon.mobile.shopping://amazon.com/s?i=movies-tv&k=The+Lord+of+the+Rings%3A+The+Two+Towers",
                },
              ],
            },
          ],
        },
        latestTrailer: {
          id: "vi1170392601",
          contentType: {
            id: "amzn1.imdb.video.contenttype.trailer",
            displayName: {
              value: "Trailer",
            },
          },
          createdDate: "2024-05-25T17:04:07.136Z",
          description: {
            value: "Trailer (FINAL) - Fathom Events Extended Release",
          },
          primaryImage: {
            imageUrl:
              "https://m.media-amazon.com/images/M/MV5BYjNiN2RlZGItNDY5Mi00ZWI4LTkyYTAtZmUyMGFhMDc2NDg3XkEyXkFqcGdeQXRyYW5zY29kZS13b3JrZmxvdw@@._V1_.jpg",
            imageWidth: 1920,
            imageHeight: 1080,
          },
          primaryTitleFragment: {
            id: "tt0167261",
            isAdult: false,
            canRateTitle: {
              isRatable: true,
            },
            originalTitleText: {
              text: "The Lord of the Rings: The Two Towers",
            },
            primaryImage: {
              id: "rm306845440",
              imageUrl:
                "https://m.media-amazon.com/images/M/MV5BMGQxMDdiOWUtYjc1Ni00YzM1LWE2NjMtZTg3Y2JkMjEzMTJjXkEyXkFqcGc@._V1_.jpg",
              imageWidth: 964,
              imageHeight: 1500,
            },
            ratingsSummary: {
              aggregateRating: 8.8,
              topRanking: {
                rank: 12,
              },
              voteCount: 1822371,
            },
            releaseYear: {
              year: 2002,
              endYear: null,
            },
            titleEpisode: null,
            titleText: {
              text: "The Lord of the Rings: The Two Towers",
            },
            titleType: {
              id: "movie",
              text: "Movie",
              displayableProperty: {
                value: {
                  plainText: "",
                },
              },
              categories: [
                {
                  id: "movie",
                  text: "Movie",
                  value: "movie",
                },
              ],
              canHaveEpisodes: false,
              isSeries: false,
              isEpisode: false,
            },
            series: null,
          },
          name: {
            value: "The Lord of the Rings: The Two Towers",
          },
          runtime: {
            unit: "SECONDS",
            value: 21,
          },
        },
        plot: {
          id: "po0952965",
          author: null,
          plotText: {
            plainText:
              "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
          },
          correctionLink: {
            url: "https://m.imdb.com/title/tt0167261/contribution/plot/po0952965/edit",
          },
          reportingLink: {
            url: "https://m.imdb.com/title/tt0167261/contribution/plot/po0952965/report",
          },
        },
        releaseDate: {
          day: 18,
          month: 12,
          year: 2002,
          country: {
            id: "US",
            text: "United States",
          },
          restriction: null,
          releaseAttributes: [],
        },
        titleCertificate: {
          rating: "PG-13",
          certificateCountry: {
            id: "US",
            text: "United States",
          },
          ratingReason: null,
        },
        titleRuntime: {
          seconds: 10740,
          displayableProperty: {
            qualifiersInMarkdownList: null,
          },
        },
      },
      {
        id: "tt2788316",
        isAdult: false,
        canRateTitle: {
          isRatable: true,
        },
        originalTitleText: {
          text: "Shogun",
        },
        primaryImage: {
          id: "rm1455376897",
          imageUrl:
            "https://m.media-amazon.com/images/M/MV5BZmJkMDRjYzEtMWI3Ny00OWE3LWJlNTItMGQ1MTQzMzc3NDY5XkEyXkFqcGc@._V1_.jpg",
          imageWidth: 1200,
          imageHeight: 1500,
        },
        ratingsSummary: {
          aggregateRating: 8.6,
          topRanking: {
            rank: 133,
          },
          voteCount: 181217,
        },
        releaseYear: {
          year: 2024,
          endYear: 2026,
        },
        titleEpisode: null,
        titleText: {
          text: "Shogun",
        },
        titleType: {
          id: "tvSeries",
          text: "TV Series",
          displayableProperty: {
            value: {
              plainText: "TV Series",
            },
          },
          categories: [
            {
              id: "tv",
              text: "TV",
              value: "tv",
            },
          ],
          canHaveEpisodes: true,
          isSeries: true,
          isEpisode: false,
        },
        series: null,
        watchOptionsByCategory: {
          categorizedWatchOptionsList: [
            {
              watchOptions: [
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.hulu",
                    categoryType: "SUBSCRIPTION",
                    description: {
                      value: "on Hulu.com and the Hulu app",
                    },
                    name: {
                      value: "Hulu",
                    },
                    refTagFragment: "hulu",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/454c994e-acf4-49ef-83d5-8fa06c8a5eab._V1_.png",
                        width: 512,
                        height: 512,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/67022a68-fde3-4078-8bd0-0ebc72efe8ad._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Hulu",
                  },
                  description: {
                    value: "S1 on Hulu.com and the Hulu app",
                  },
                  shortDescription: {
                    value: "S1",
                  },
                  link: "http://www.hulu.com?d=Amazon",
                },
              ],
            },
          ],
        },
        latestTrailer: {
          id: "vi87148057",
          contentType: {
            id: "amzn1.imdb.video.contenttype.trailer",
            displayName: {
              value: "Trailer",
            },
          },
          createdDate: "2024-06-10T13:06:58.595Z",
          description: {
            value: "Shogun: The Abyss Of Life",
          },
          primaryImage: {
            imageUrl:
              "https://m.media-amazon.com/images/M/MV5BYTI4OWNhODAtYmZjMi00YzdkLTk0YmQtZDlhMDM4YjUwZGRhXkEyXkFqcGdeQVRoaXJkUGFydHlJbmdlc3Rpb25Xb3JrZmxvdw@@._V1_.jpg",
            imageWidth: 1359,
            imageHeight: 764,
          },
          primaryTitleFragment: {
            id: "tt8888606",
            isAdult: false,
            canRateTitle: {
              isRatable: true,
            },
            originalTitleText: {
              text: "The Abyss of Life",
            },
            primaryImage: {
              id: "rm4143347713",
              imageUrl:
                "https://m.media-amazon.com/images/M/MV5BNWFhZGJiZDAtZDI5NS00N2RmLThjODAtMmVkOWU5NzdlMTMxXkEyXkFqcGc@._V1_.jpg",
              imageWidth: 1920,
              imageHeight: 1080,
            },
            ratingsSummary: {
              aggregateRating: 8.9,
              topRanking: null,
              voteCount: 9068,
            },
            releaseYear: {
              year: 2024,
              endYear: null,
            },
            titleEpisode: {
              displayableEpisodeNumber: {
                displayableSeason: {
                  season: "1",
                  text: "1",
                },
                episodeNumber: {
                  episodeNumber: "8",
                  text: "8",
                },
              },
            },
            titleText: {
              text: "The Abyss of Life",
            },
            titleType: {
              id: "tvEpisode",
              text: "TV Episode",
              displayableProperty: {
                value: {
                  plainText: "TV Episode",
                },
              },
              categories: [
                {
                  id: "tv",
                  text: "TV",
                  value: "tv",
                },
              ],
              canHaveEpisodes: false,
              isSeries: false,
              isEpisode: true,
            },
            series: {
              series: {
                id: "tt2788316",
                isAdult: false,
                canRateTitle: {
                  isRatable: true,
                },
                originalTitleText: {
                  text: "Shogun",
                },
                primaryImage: {
                  id: "rm1455376897",
                  imageUrl:
                    "https://m.media-amazon.com/images/M/MV5BZmJkMDRjYzEtMWI3Ny00OWE3LWJlNTItMGQ1MTQzMzc3NDY5XkEyXkFqcGc@._V1_.jpg",
                  imageWidth: 1200,
                  imageHeight: 1500,
                },
                ratingsSummary: {
                  aggregateRating: 8.6,
                  topRanking: {
                    rank: 133,
                  },
                  voteCount: 181217,
                },
                releaseYear: {
                  year: 2024,
                  endYear: 2026,
                },
                titleEpisode: null,
                titleText: {
                  text: "Shogun",
                },
                titleType: {
                  id: "tvSeries",
                  text: "TV Series",
                  displayableProperty: {
                    value: {
                      plainText: "TV Series",
                    },
                  },
                  categories: [
                    {
                      id: "tv",
                      text: "TV",
                      value: "tv",
                    },
                  ],
                  canHaveEpisodes: true,
                  isSeries: true,
                  isEpisode: false,
                },
              },
            },
          },
          name: {
            value: "Shogun: The Abyss Of Life",
          },
          runtime: {
            unit: "SECONDS",
            value: 31,
          },
        },
        plot: {
          id: "po7393264",
          author: null,
          plotText: {
            plainText:
              "When a mysterious European ship is found marooned in a nearby Japanese fishing village, Lord Yoshii Toranaga discovers secrets that could tip the scales of power and devastate his enemies.",
          },
          correctionLink: {
            url: "https://m.imdb.com/title/tt2788316/contribution/plot/po7393264/edit",
          },
          reportingLink: {
            url: "https://m.imdb.com/title/tt2788316/contribution/plot/po7393264/report",
          },
        },
        releaseDate: {
          day: 27,
          month: 2,
          year: 2024,
          country: {
            id: "US",
            text: "United States",
          },
          restriction: null,
          releaseAttributes: [],
        },
        titleCertificate: {
          rating: "TV-MA",
          certificateCountry: {
            id: "US",
            text: "United States",
          },
          ratingReason: null,
        },
        titleRuntime: {
          seconds: 3600,
          displayableProperty: {
            qualifiersInMarkdownList: null,
          },
        },
      },
      {
        id: "tt1190634",
        isAdult: false,
        canRateTitle: {
          isRatable: true,
        },
        originalTitleText: {
          text: "The Boys",
        },
        primaryImage: {
          id: "rm4040589057",
          imageUrl:
            "https://m.media-amazon.com/images/M/MV5BMWJlN2U5MzItNjU4My00NTM2LWFjOWUtOWFiNjg3ZTMxZDY1XkEyXkFqcGc@._V1_.jpg",
          imageWidth: 1080,
          imageHeight: 1350,
        },
        ratingsSummary: {
          aggregateRating: 8.7,
          topRanking: {
            rank: 110,
          },
          voteCount: 729105,
        },
        releaseYear: {
          year: 2019,
          endYear: null,
        },
        titleEpisode: null,
        titleText: {
          text: "The Boys",
        },
        titleType: {
          id: "tvSeries",
          text: "TV Series",
          displayableProperty: {
            value: {
              plainText: "TV Series",
            },
          },
          categories: [
            {
              id: "tv",
              text: "TV",
              value: "tv",
            },
          ],
          canHaveEpisodes: true,
          isSeries: true,
          isEpisode: false,
        },
        series: null,
        watchOptionsByCategory: {
          categorizedWatchOptionsList: [
            {
              watchOptions: [
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.prime_video.freevee",
                    categoryType: "SUBSCRIPTION",
                    description: {
                      value: "Watch Free on Freevee",
                    },
                    name: {
                      value: "Freevee",
                    },
                    refTagFragment: "fdv",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/119794c1-a963-4cda-84e7-aa9c8cd733d2._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/65662a3b-47eb-4271-9830-773014309b44._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Freevee",
                  },
                  description: {
                    value: "S1-3 Watch Free on Freevee",
                  },
                  shortDescription: {
                    value: "S1-3",
                  },
                  link: "https://www.imdbtv.com/deeplink?contentId=amzn1.dv.gti.5eb510bc-7578-d2dd-49d3-484070a96b52&destination=Playback&type=VOD&ref_tag=imdb_app",
                },
                {
                  provider: {
                    id: "amzn1.imdb.w2w.provider.prime_video.PRIME",
                    categoryType: "SUBSCRIPTION",
                    description: {
                      value: "included with Prime",
                    },
                    name: {
                      value: "Prime Video",
                    },
                    refTagFragment: "pvs_piv",
                    logos: {
                      icon: {
                        url: "https://m.media-amazon.com/images/M/e062ea53-945a-42cb-8d15-6405531687ec._V1_.png",
                        width: 500,
                        height: 500,
                      },
                      slate: {
                        url: "https://m.media-amazon.com/images/M/75f35a85-7a6e-4f1f-bf8b-e4c8556bc4e4._V1_.png",
                        width: 1280,
                        height: 720,
                      },
                    },
                  },
                  title: {
                    value: "Watch on Prime Video",
                  },
                  description: {
                    value: "S1-4 included with Prime",
                  },
                  shortDescription: {
                    value: "S1-4",
                  },
                  link: "aiv://aiv/resume?gti=amzn1.dv.gti.5eb510bc-7578-d2dd-49d3-484070a96b52",
                },
              ],
            },
          ],
        },
        latestTrailer: {
          id: "vi53855769",
          contentType: {
            id: "amzn1.imdb.video.contenttype.trailer",
            displayName: {
              value: "Trailer",
            },
          },
          createdDate: "2024-06-13T19:13:53.768Z",
          description: {
            value: "Stream Season Four of THE BOYS on Prime Video",
          },
          primaryImage: {
            imageUrl:
              "https://m.media-amazon.com/images/M/MV5BNTQ1OTJmODQtZDg5My00MGYyLWI3N2EtYmI0ZTBiZmU2ODNmXkEyXkFqcGdeQXZ3ZXNsZXk@._V1_.jpg",
            imageWidth: 2098,
            imageHeight: 1180,
          },
          primaryTitleFragment: {
            id: "tt1190634",
            isAdult: false,
            canRateTitle: {
              isRatable: true,
            },
            originalTitleText: {
              text: "The Boys",
            },
            primaryImage: {
              id: "rm4040589057",
              imageUrl:
                "https://m.media-amazon.com/images/M/MV5BMWJlN2U5MzItNjU4My00NTM2LWFjOWUtOWFiNjg3ZTMxZDY1XkEyXkFqcGc@._V1_.jpg",
              imageWidth: 1080,
              imageHeight: 1350,
            },
            ratingsSummary: {
              aggregateRating: 8.7,
              topRanking: {
                rank: 110,
              },
              voteCount: 729105,
            },
            releaseYear: {
              year: 2019,
              endYear: null,
            },
            titleEpisode: null,
            titleText: {
              text: "The Boys",
            },
            titleType: {
              id: "tvSeries",
              text: "TV Series",
              displayableProperty: {
                value: {
                  plainText: "TV Series",
                },
              },
              categories: [
                {
                  id: "tv",
                  text: "TV",
                  value: "tv",
                },
              ],
              canHaveEpisodes: true,
              isSeries: true,
              isEpisode: false,
            },
            series: null,
          },
          name: {
            value: "Watch Season Four | Now on Prime Video",
          },
          runtime: {
            unit: "SECONDS",
            value: 61,
          },
        },
        plot: {
          id: "po1232844",
          author: null,
          plotText: {
            plainText:
              "A group of vigilantes set out to take down corrupt superheroes who abuse their superpowers.",
          },
          correctionLink: {
            url: "https://m.imdb.com/title/tt1190634/contribution/plot/po1232844/edit",
          },
          reportingLink: {
            url: "https://m.imdb.com/title/tt1190634/contribution/plot/po1232844/report",
          },
        },
        releaseDate: {
          day: 26,
          month: 7,
          year: 2019,
          country: {
            id: "US",
            text: "United States",
          },
          restriction: null,
          releaseAttributes: [
            {
              text: "internet",
            },
          ],
        },
        titleCertificate: {
          rating: "TV-MA",
          certificateCountry: {
            id: "US",
            text: "United States",
          },
          ratingReason: null,
        },
        titleRuntime: {
          seconds: 3600,
          displayableProperty: {
            qualifiersInMarkdownList: null,
          },
        },
      },
    ].slice(0, 10);

    this.dataList = arr.map((movie: any) => {
      return {
        name: movie?.originalTitleText?.text,
        image: movie?.primaryImage?.imageUrl,
        ratings: movie?.ratingsSummary?.aggregateRating,
        year: movie?.releaseYear?.year,
      };
    });
  }

  moviewPurchaseModel(item: any) {
    const dialogRef = this.dialog.open(MovieBookingModelComponent, {
      width: "45vw",
      maxHeight: "85vh",
      autoFocus: false,
      disableClose: true,
      data: {
        data: item,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result != undefined) {
        if (result.status) {
          this.msgHandelService.showSuccessMsg(
            "",
            "Successfully purchased ticket"
          );

          this.router.navigateByUrl("/tickets");
        }
      }
    });
  }

  private getMoviesData() {
    this.loading = true;
    this.dashboardService.getMovies().subscribe(
      (response) => {
        this.loading = false;

        if (response?.data?.list) {
          this.dataList = response?.data?.list;
        }

        console.log("response----", response);
      },
      (error) => {
        this.loading = false;
        this.msgHandelService.handleError(error);
      }
    );
  }
}
