import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowDetailPage } from './show-detail.page';

describe('HomePage', () => {
  let component: ShowDetailPage;
  let fixture: ComponentFixture<ShowDetailPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowDetailPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
