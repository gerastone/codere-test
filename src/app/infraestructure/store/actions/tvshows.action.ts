import { createAction, props } from '@ngrx/store';
import { GetShowDetailRequest } from 'src/app/domain/interface/getShowTvDetailRequest.interface';
import { TvShow } from 'src/app/domain/types/tvshow';

export enum TvShowActions {
  GET_TV_SHOW = '[Tv Show] Get Tv Show',
  GET_TV_SHOW_COMPLETE = '[Tv Show] Get product complete',
  GET_TV_SHOW_ERROR = '[Tv Show] Get Tv Show error',
  GET_TV_SHOW_DETAIL = '[Tv Show] Get Tv Show Detail',
  GET_TV_SHOW_DETAIL_COMPLETE = '[Tv Show] Get Tv Show Detail complete',
  GET_TV_SHOW_DETAIL_ERROR = '[Tv Show] Get Tv Show Detail error',
}

export interface ITvShowAction {
  type: TvShowActions.GET_TV_SHOW
}
export interface GET_TV_SHOW_DETAIL {
  type: TvShowActions.GET_TV_SHOW_DETAIL,
  request: GetShowDetailRequest
}


export const getTvShowsAction = createAction(TvShowActions.GET_TV_SHOW);

export const getTvShowsCompleteAction = createAction(TvShowActions.GET_TV_SHOW_COMPLETE, props<{ data: Array<TvShow> }>());

export const getTvShowsErrorAction = createAction(TvShowActions.GET_TV_SHOW_ERROR, props<{ error: any }>());

export const getTvShowDetailAction = createAction(TvShowActions.GET_TV_SHOW_DETAIL, props<{ request: GetShowDetailRequest }>());

export const getTvShowDetailCompleteAction = createAction(TvShowActions.GET_TV_SHOW_DETAIL_COMPLETE, props<{ data: TvShow }>());

export const getTvShowDetailErrorAction = createAction(TvShowActions.GET_TV_SHOW_DETAIL_ERROR, props<{ error: any }>());
