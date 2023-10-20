import { TvShow } from "src/app/domain/types/tvshow"

export type ITvShowState = {
  showsList: Array<TvShow>,
  showDetail: TvShow | null
}

export const initialTvShowState: ITvShowState = {
  showsList: [],
  showDetail: null
}