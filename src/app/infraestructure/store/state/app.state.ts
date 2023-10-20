import { ITvShowState, initialTvShowState } from "./tvshows.state";

export interface IAppState {
  tvShows: ITvShowState
}

export const initialAppState: IAppState = {
  tvShows: initialTvShowState

}

export const getInitialState = (): IAppState => {
  return initialAppState;
}