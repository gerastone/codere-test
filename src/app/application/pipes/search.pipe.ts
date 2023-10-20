import { Pipe, PipeTransform } from '@angular/core';
import { ShowByGenre } from 'src/app/domain/types/showByGenre';
import { TvShow } from 'src/app/domain/types/tvshow';

@Pipe({
    name: 'search'
})

export class SearchPipe implements PipeTransform {


    transform(items: ShowByGenre[], searchText: string): ShowByGenre[] {
        if (!items) {
            return [];
        }

        if (!searchText || searchText.trim() === '') {
            return items;
        }

        searchText = searchText.toLowerCase();


        const matchingShowsSet = new Set<TvShow>();

        items.forEach((showByGenre) => {
            const matchingShows = showByGenre.shows.filter((show) =>
                show.name.toLowerCase().includes(searchText.toLowerCase())
            );

            matchingShows.forEach((matchingShow) => {
                if (!matchingShowsSet.has(matchingShow)) {
                    matchingShowsSet.add(matchingShow);
                }
            });
        });

        let filteredData: ShowByGenre[] = [
            {
                key: 'Search',
                shows: Array.from(matchingShowsSet)
            }
        ];


        return filteredData;
    }
}
