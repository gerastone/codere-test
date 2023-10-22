import { Action } from '@ngrx/store';
import { tvShowsReducers } from '../tvshows.reducer';
import { initialTvShowState } from '../../state/tvshows.state';
import * as TvShowActions from '../../actions/tvshows.action';
import { TvShow } from 'src/app/domain/types/tvshow';

describe('TvShows Reducer', () => {
    it('should return the initial state', () => {
        const initialState = tvShowsReducers(undefined, {} as Action);
        expect(initialState).toEqual(initialTvShowState);
    });

    it('should handle getTvShowsCompleteAction', () => {
        const mockData: TvShow[] = [];
        const action = TvShowActions.getTvShowsCompleteAction({ data: mockData });

        const state = tvShowsReducers(initialTvShowState, action);

        expect(state.showsList).toEqual(mockData);
    });

    it('should handle getTvShowDetailCompleteAction', () => {
        const mockData: TvShow = {
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
        };
        const action = TvShowActions.getTvShowDetailCompleteAction({ data: mockData });

        const state = tvShowsReducers(initialTvShowState, action);

        expect(state.showDetail).toEqual(mockData);
    });

});
