import { TvShow } from 'src/app/domain/types/tvshow';
import { selectTvShows, selectTvShowDetail } from '../tvshows.selector';
describe('NgRx Selectors', () => {
    it('should select the tvShows from state', () => {
        const showDetail: TvShow = {
            id: 0,
            url: '',
            name: '',
            type: '',
            language: '',
            genres: [],
            status: '',
            runtime: 0,
            averageRuntime: 0,
            premiered: new Date(),
            ended: new Date(),
            officialSite: '',
            schedule: {
                time: '',
                days: []
            },
            rating: {
                average: 0
            },
            weight: 0,
            network: {
                id: 0,
                name: '',
                country: {
                    name: '',
                    code: '',
                    timezone: ''
                },
                officialSite: ''
            },
            webChannel: null,
            dvdCountry: null,
            externals: {
                tvrage: 0,
                thetvdb: 0,
                imdb: ''
            },
            image: {
                medium: '',
                original: ''
            },
            summary: '',
            updated: 0,
            _links: {
                self: {
                    href: ''
                },
                previousepisode: {
                    href: ''
                }
            }
        }
        const mockState = {
            tvShows: {
                showsList: [],
                showDetail: showDetail,
            },
        };
        const selectedShows = selectTvShows.projector(mockState.tvShows);

        expect(selectedShows).toEqual([]);
    });

    it('should select the showDetail from state', () => {
        const showDetail: TvShow = {
            id: 0,
            url: '',
            name: '',
            type: '',
            language: '',
            genres: [],
            status: '',
            runtime: 0,
            averageRuntime: 0,
            premiered: new Date(),
            ended: new Date(),
            officialSite: '',
            schedule: {
                time: '',
                days: []
            },
            rating: {
                average: 0
            },
            weight: 0,
            network: {
                id: 0,
                name: '',
                country: {
                    name: '',
                    code: '',
                    timezone: ''
                },
                officialSite: ''
            },
            webChannel: null,
            dvdCountry: null,
            externals: {
                tvrage: 0,
                thetvdb: 0,
                imdb: ''
            },
            image: {
                medium: '',
                original: ''
            },
            summary: '',
            updated: 0,
            _links: {
                self: {
                    href: ''
                },
                previousepisode: {
                    href: ''
                }
            }
        }
        const mockState = {
            tvShows: {
                showsList: [],
                showDetail: showDetail,
            },
        };
        const selectedShowDetail = selectTvShowDetail.projector(mockState.tvShows);

        expect(selectedShowDetail).toEqual(showDetail);
    });
});
