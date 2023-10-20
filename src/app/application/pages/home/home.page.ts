import { Component, Injector, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { TvShow } from 'src/app/domain/types/tvshow';
import { ShowByGenre } from 'src/app/domain/types/showByGenre';
import { getTvShowsAction } from 'src/app/infraestructure/store/actions/tvshows.action';
import { selectTvShows } from 'src/app/infraestructure/store/selector/tvshows.selector';
import { IAppState } from 'src/app/infraestructure/store/state/app.state';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  private store: Store<IAppState> = this.injector.get(Store);
  private router: Router = this.injector.get(Router);
  private destroy$ = new Subject<void>();
  private showListSelector$ = this.store.select(selectTvShows);
  searchFilter: string = '';
  showsByGenre: Array<ShowByGenre> = [];

  constructor(private injector: Injector) {

  }

  ngOnInit(): void {
    this.store.dispatch(getTvShowsAction());
    this.loadSelectors();
  }


  private loadSelectors() {
    this.showListSelector$.pipe(takeUntil(this.destroy$)).subscribe(shows => {
      this.buildShowsByGenre(shows);
    })
  }

  private buildShowsByGenre(shows: Array<TvShow>) {
    let showsGenre: Map<string, Array<TvShow>> = new Map();
    shows.sort((showA, showB) => (showA.rating.average > showB.rating.average) ? -1 : 1)
      .forEach(show => {
        show.genres.forEach((_genre: string) => {
          if (showsGenre.has(_genre)) {
            showsGenre.get(_genre)?.push(show);
          } else {
            showsGenre.set(_genre, [show]);
          }
        })
      })
    this.showsByGenre = Array.from(showsGenre, ([key, shows]) => ({ key, shows }));
    console.log(showsGenre)
  }

  goToDetail(showid: number): void {
    this.router.navigate([`detail/${showid}`])
  }

  onSearch(event: any) {
    console.log(event.detail.value)
    this.searchFilter = event.detail.value;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
