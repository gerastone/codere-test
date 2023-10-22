import { TestBed } from '@angular/core/testing';
import { Actions } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { marbles } from 'rxjs-marbles/jest';
import { TvShowsEffects } from '../tvshows.effects';
import * as TvShowsActions from '../../actions/tvshows.action';
import { TvShowsService } from '../../../services/tvshows.service';
import { TvShow } from 'src/app/domain/types/tvshow';
import { of } from 'rxjs';
import { GetShowDetailRequest } from 'src/app/domain/interface/getShowTvDetailRequest.interface';

describe('TvShowsEffects', () => {
    let effects: TvShowsEffects;
    let actions: jest.Mocked<Actions>;
    let tvShowsService: jest.Mocked<TvShowsService>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                TvShowsEffects,
                provideMockActions(() => actions),
                {
                    provide: TvShowsService,
                    useValue: {
                        getTvShowDetail: jest.fn(),
                    },
                },
            ],
        });

        effects = TestBed.inject(TvShowsEffects);
        actions = TestBed.inject(Actions) as jest.Mocked<Actions>;
        tvShowsService = TestBed.inject(TvShowsService) as jest.Mocked<TvShowsService>;
    });

    it('should return getTvShowDetailCompleteAction with data on success', marbles((m) => {
        const requestData: GetShowDetailRequest = {
            id: '123'
        }
        const mockResponse: TvShow = {
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
        const action = TvShowsActions.getTvShowDetailAction({ request: requestData });
        const completion = TvShowsActions.getTvShowDetailCompleteAction({ data: mockResponse });

        jest.spyOn(actions, 'pipe').mockReturnValue(of(action));
        tvShowsService.getTvShowDetail.mockReturnValue(of(mockResponse));
        expect(mockResponse).toBe(completion.data);
    }));

    it('should return getTvShowsCompleteAction with data on success', marbles((m) => {
        const mockResponse: TvShow[] = [];
        const action = TvShowsActions.getTvShowsAction();
        const completion = TvShowsActions.getTvShowsCompleteAction({ data: mockResponse });

        jest.spyOn(actions, 'pipe').mockReturnValue(of(action));
        expect(mockResponse).toBe(completion.data)
    }));

});