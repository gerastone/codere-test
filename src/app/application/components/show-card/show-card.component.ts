import { Component, Input, OnInit } from '@angular/core';
import { TvShow } from 'src/app/domain/types/tvshow';

@Component({
  selector: 'app-show-card',
  templateUrl: './show-card.component.html',
  styleUrls: ['./show-card.component.scss'],
})
export class ShowCardComponent implements OnInit {
  @Input()
  tvShow!: TvShow;
  constructor() { }

  ngOnInit() { }

  getBackground(showImage: string) {
    return {
      background: `url(${showImage})`,
      "background-size": 'contain',
      "background-position": 'center',
      "background-repeat:": 'no-repeat',
    }
  }
}
