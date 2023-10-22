import { createAction, props } from '@ngrx/store';
import { TvShow } from 'src/app/domain/types/tvshow';
import { GetShowDetailRequest } from 'src/app/domain/interface/getShowTvDetailRequest.interface';
import {
    getTvShowsAction,
    getTvShowsCompleteAction,
    getTvShowsErrorAction,
    getTvShowDetailAction,
    getTvShowDetailCompleteAction,
    getTvShowDetailErrorAction,
} from '../tvshows.action'

describe('Tv Show Actions', () => {
    it('should create the getTvShowsAction', () => {
        const action = getTvShowsAction();
        expect(action.type).toBe('[Tv Show] Get Tv Show');
    });

    it('should create the getTvShowsCompleteAction', () => {
        const testData: TvShow[] = []; // Provide test data here
        const action = getTvShowsCompleteAction({ data: testData });
        expect(action.type).toBe('[Tv Show] Get product complete');
        expect(action.data).toEqual(testData);
    });

    it('should create the getTvShowsErrorAction', () => {
        const error = { message: 'Error message' }; // Provide test error data here
        const action = getTvShowsErrorAction({ error });
        expect(action.type).toBe('[Tv Show] Get Tv Show error');
        expect(action.error).toEqual(error);
    });

    it('should create the getTvShowDetailAction', () => {
        const request: GetShowDetailRequest = {
            id: '2'
        };
        const action = getTvShowDetailAction({ request });
        expect(action.type).toBe('[Tv Show] Get Tv Show Detail');
        expect(action.request).toEqual(request);
    });

    it('should create the getTvShowDetailCompleteAction', () => {
        const testData: TvShow = {
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
        }; // Provide test data here
        const action = getTvShowDetailCompleteAction({ data: testData });
        expect(action.type).toBe('[Tv Show] Get Tv Show Detail complete');
        expect(action.data).toEqual(testData);
    });

    it('should create the getTvShowDetailErrorAction', () => {
        const error = { message: 'Error message' }; // Provide test error data here
        const action = getTvShowDetailErrorAction({ error });
        expect(action.type).toBe('[Tv Show] Get Tv Show Detail error');
        expect(action.error).toEqual(error);
    });
});
