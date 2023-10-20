import { Action, ActionReducer, createReducer, on } from "@ngrx/store";
import { initialTvShowState, ITvShowState } from "../state/tvshows.state";
import * as TvShowActions from '../actions/tvshows.action';

const tvShowsReducer: ActionReducer<ITvShowState, Action> = createReducer(
  initialTvShowState,
  on(TvShowActions.getTvShowsCompleteAction, (state: ITvShowState, { data }) => ({
    ...state,
    showsList: data
  })),
  on(TvShowActions.getTvShowDetailCompleteAction, (state: ITvShowState, { data }) => ({
    ...state,
    showDetail: data
  })),
)

export const tvShowsReducers = (state: ITvShowState | undefined = initialTvShowState, action: Action) => {
  return tvShowsReducer(state, action);
};
