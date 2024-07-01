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
            name: 'Test User',
        }]);

        fixture.detectChanges();

        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('li').textContent).toContain('Test User');
    });

});
