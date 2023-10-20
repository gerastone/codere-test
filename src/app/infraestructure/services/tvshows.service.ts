import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TvShow } from "src/app/domain/types/tvshow";
import { environment } from "src/environments/environment"
@Injectable({
    providedIn: 'root'
})
export class TvShowsService {

    constructor(
        private httpClient: HttpClient
    ) { }

    getTvShows(): Observable<TvShow[]> {
        return this.httpClient.get<TvShow[]>(`${environment.BASE_URL + environment.TV_SHOWS}`, {});
    }

    getTvShowDetail(id: string): Observable<TvShow> {
        return this.httpClient.get<TvShow>(`${environment.BASE_URL + environment.TV_SHOWS}/${id}`, {});
    }


}
