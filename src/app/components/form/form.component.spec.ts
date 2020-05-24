import { async,
         ComponentFixture,
         TestBed } from '@angular/core/testing';

import { FormComponent } from './form.component';
import { RepositoryService } from 'src/app/services/repository.service';
import { of } from 'rxjs';
import { NavigationService } from 'src/app/services/navigation.service';
import { MatSnackBar } from '@angular/material';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  class RepositoryServiceStub{
    savePins(){
      return of(true);
    }
  }
  class NavigationServiceStub{
    goToPins(){

    }
  }
  class MatSnackBarStub{
    open(){
      return {
        afterDismissed: () => {
          return of(true);
        }
      }
    }
  }
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormComponent ],
      providers: [
        {
          provide: RepositoryService,
          useClass: RepositoryServiceStub
        },
        {
          provide: NavigationService,
          useClass: NavigationServiceStub
        },
        {
          provide: MatSnackBar,
          useClass: MatSnackBarStub,
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
