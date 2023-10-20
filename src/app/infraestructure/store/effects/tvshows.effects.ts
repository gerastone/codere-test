import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { TvShowsService } from '../../services/tvshows.service';
import * as TvShowsActions from '../actions/tvshows.action';
import { GET_TV_SHOW_DETAIL } from '../actions/tvshows.action';

@Injectable()
export class TvShowsEffects {

    constructor(
        private actions$: Actions,
        private tvShowsService: TvShowsService
    ) { }

    getTvShows$ = createEffect(() => this.actions$.pipe(
        ofType(TvShowsActions.getTvShowsAction),
        switchMap(() =>
            this.tvShowsService.getTvShows()
                .pipe(
                    map(data => TvShowsActions.getTvShowsCompleteAction({ data })),
                    catchError(error => of(TvShowsActions.getTvShowsErrorAction({ error })))
                )
        )
    ));

    getTvShowDetail$ = createEffect(() => this.actions$.pipe(
        ofType(TvShowsActions.getTvShowDetailAction),
        switchMap((action: GET_TV_SHOW_DETAIL) =>
            this.tvShowsService.getTvShowDetail(action.request.id)
                .pipe(
                    map(data => TvShowsActions.getTvShowDetailCompleteAction({ data })),
                    catchError(error => of(TvShowsActions.getTvShowDetailErrorAction({ error })))
                )
        )
    ));
}
