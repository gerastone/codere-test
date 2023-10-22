import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Actions } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { Store } from '@ngrx/store';
import { SearchPipe } from '../../pipes/search.pipe';
import { HomePage } from './home.page';

describe('HomePage', () => {
    let component: HomePage;
    let fixture: ComponentFixture<HomePage>;
    let actions: jest.Mocked<Actions>;

    const mockStore = {
        select: jest.fn(),
        dispatch: jest.fn(),
    };

    const mockRouter = {
        navigate: jest.fn(),
    };
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [HomePage, SearchPipe],
            providers: [
                {
                    provide: Store,
                    useValue: mockStore
                },
                provideMockActions(() => actions),

            ]
        });
        actions = TestBed.inject(Actions) as jest.Mocked<Actions>;
        fixture = TestBed.createComponent(HomePage);
        component = fixture.componentInstance;
    });


    afterEach(() => {
        component.ngOnDestroy();
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });
    it('should set search filter on search', () => {
        const event = { detail: { value: 'searchValue' } };
        component.onSearch(event);
        expect(component.searchFilter).toEqual('searchValue');
    });
});
