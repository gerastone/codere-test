import { Component, Injector, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { TvShow } from 'src/app/domain/types/tvshow';
import { ShowByGenre } from 'src/app/domain/types/showByGenre';
import { getTvShowDetailAction, getTvShowsAction } from 'src/app/infraestructure/store/actions/tvshows.action';
import { selectTvShowDetail } from 'src/app/infraestructure/store/selector/tvshows.selector';
import { IAppState } from 'src/app/infraestructure/store/state/app.state';
import { ActivatedRoute, Router } from '@angular/router';
import { GetShowDetailRequest } from 'src/app/domain/interface/getShowTvDetailRequest.interface';

@Component({
  selector: 'app-show-detail',
  templateUrl: 'show-detail.page.html',
  styleUrls: ['show-detail.page.scss'],
})
export class ShowDetailPage implements OnInit, OnDestroy {
  private store: Store<IAppState> = this.injector.get(Store);
  private route: ActivatedRoute = this.injector.get(ActivatedRoute)
  private destroy$ = new Subject<void>();
  private showDetailSelector$ = this.store.select(selectTvShowDetail);
  tvShow: TvShow | null = null;

  constructor(private injector: Injector) {
  }

  ngOnInit(): void {
    const showid = this.route.snapshot.params["id"];
    const request: GetShowDetailRequest = {
      id: showid
    }
    this.store.dispatch(getTvShowDetailAction({ request }));
    this.loadSelectors();
  }


  private loadSelectors() {
    this.showDetailSelector$.pipe(takeUntil(this.destroy$)).subscribe(show => {
      this.tvShow = show;
    })
  }



  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
