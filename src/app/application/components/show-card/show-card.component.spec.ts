import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShowCardComponent } from './show-card.component';
import { TvShow } from 'src/app/domain/types/tvshow';

describe('ShowCardComponent', () => {
  let component: ShowCardComponent;
  let fixture: ComponentFixture<ShowCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowCardComponent],
    });

    fixture = TestBed.createComponent(ShowCardComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should set the background image correctly', () => {
    const testShow: TvShow = {
      id: 0,
      url: '',
      name: '',
      type: '',
      language: '',
      genres: [],
      status: '',
      runtime: 0,
      averageRuntime: 0,
      premiered: new Date(),
      ended: new Date(),
      officialSite: '',
      schedule: {
        time: '',
        days: []
      },
      rating: {
        average: 0
      },
      weight: 0,
      network: {
        id: 0,
        name: '',
        country: {
          name: '',
          code: '',
          timezone: ''
        },
        officialSite: ''
      },
      webChannel: null,
      dvdCountry: null,
      externals: {
        tvrage: 0,
        thetvdb: 0,
        imdb: ''
      },
      image: {
        medium: '',
        original: 'test'
      },
      summary: '',
      updated: 0,
      _links: {
        self: {
          href: ''
        },
        previousepisode: {
          href: ''
        }
      }
    };

    component.tvShow = testShow;
    // Trigger change detection to update the view
    fixture.detectChanges();

    // Get the element with the background image
    const backgroundElement = fixture.nativeElement.querySelector('.card-trigger');

    // Ensure the background element exists
    expect(backgroundElement).toBeTruthy();

    // Ensure the background image is set correctly
    expect(backgroundElement.style.backgroundImage).toBe(`url(${testShow.image.original})`);
    expect(backgroundElement.style.backgroundSize).toBe('contain');
    expect(backgroundElement.style.backgroundPosition).toBe('center');
  });
});
