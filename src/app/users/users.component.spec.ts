import {ComponentFixture, TestBed} from '@angular/core/testing';
import {of} from "rxjs";
import {UsersComponent} from './users.component';

describe('UsersComponent', () => {
    let component: UsersComponent;
    let fixture: ComponentFixture<UsersComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [UsersComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(UsersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render users list with one user', () => {
        component.users = of([{
            id: 1,
            name: 'John Doe',
            username: 'johndoe',
            email: 'johndo@example.com',
            address: {
                street: '',
                suite: '',
                city: '',
                zipcode: '',
                geo: {lat: '', lng: ''}
            },
            phone: '1234567890',
            website: 'www.johndoe.com',
            company: {
                name: '',
                catchPhrase: '',
                bs: ''
            }
        }]);

        fixture.detectChanges();

        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('div.user-card').textContent).toContain('Test User');

    });

});
