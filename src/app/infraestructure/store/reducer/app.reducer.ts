import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { tvShowsReducers } from './tvshows.reducer';

export const appReducers: ActionReducerMap<IAppState, any> = {
  tvShows: tvShowsReducers
}