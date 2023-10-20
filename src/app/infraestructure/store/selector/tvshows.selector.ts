import { createSelector } from "@ngrx/store";
import { IAppState } from "../state/app.state";
import { ITvShowState } from "../state/tvshows.state";

const selectorTvShows = (state: IAppState) => state.tvShows;

export const selectTvShows = createSelector(
    selectorTvShows,
    (state: ITvShowState) => state.showsList
);

export const selectTvShowDetail = createSelector(
    selectorTvShows,
    (state: ITvShowState) => state.showDetail
);