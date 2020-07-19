import { ComponentFixture,
         async,
         TestBed} from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { NO_ERRORS_SCHEMA,
         CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from "@angular/material";

import { Observable, of } from "rxjs";

import { FormComponent } from "./form.component";
import { RepositoryService } from "src/app/services/repository.service";
import { NavigationService } from "src/app/services/navigation.service";

class RepositoryServiceStub{savePins(value: any): Observable<any>{return of("1");}}

class NavigationServiceStub{
  goToPins(){}
}

class MatSnackBarStub{
  open(value1: string, value2: string, value: any): any{
    return {
      afterDismissed : () => {
        return of("1");
      }
    };
  }
}


fdescribe('FormComponent Test cases',()=> {
  let componetInstance: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async(()=>{
    TestBed.configureTestingModule({
       declarations: [FormComponent],
       providers: [
         {
           provide: RepositoryService,
           useClass: RepositoryServiceStub,
         },
         {
          provide: NavigationService,
          useClass: NavigationServiceStub,
        },
        {
          provide: MatSnackBar,
          useClass: MatSnackBarStub,
        }],
       schemas: [
         NO_ERRORS_SCHEMA,
         CUSTOM_ELEMENTS_SCHEMA
       ],
       imports:[ReactiveFormsModule]
    }).compileComponents();

  }));

  beforeEach(()=> {
    fixture = TestBed.createComponent(FormComponent);
    componetInstance = fixture.componentInstance;
    fixture.detectChanges();//this is import by the hook lifecyle
  });

  it('should create component',()=> {
    expect(componetInstance).toBeTruthy();
  })

  describe('ngOnInit',()=>{
    it('should create first form and second form, so we can check the controls ids',()=>{
      expect(Object.keys(componetInstance.firstFormGroup.controls))
      .toEqual(['title','author','description']);
      expect(Object.keys(componetInstance.secondFormGroup.controls))
      .toEqual(['firstAsset','assets']);
    })
  })

  describe('AddSet',()=>{
    it('should add url formGroup in assets formArray', ()=>{

      componetInstance.addAsset();
      expect(componetInstance.assets.length>0).toBeTruthy();
    })
  })

  describe('DeleteAsset', ()=> {
    it('should remove the formGroup in the assets', ()=> {
      componetInstance.addAsset();
      let previousAmountOfAssets = componetInstance.assets.length;
      componetInstance.addAsset();
      let lastIndex = componetInstance.assets.length -1;
      componetInstance.deleteAsset(lastIndex);
      let finalAmountOfAssets = componetInstance.assets.length;
      expect(finalAmountOfAssets).toBe(previousAmountOfAssets);
    })
  });

  describe('SavePin method group', ()=>{
    it('should be have a model to be processed', ()=>{
      componetInstance.secondFormGroup.get("firstAsset").setValue("algun valor");
      componetInstance.addAsset();
      componetInstance.savePin();
      expect(true).toBe(true);
    });
    it('goToPins have to be called', ()=> {
      const open = spyOn((<any>componetInstance).snackBar,'open').and.callThrough();
      const navigate = spyOn((<any>componetInstance).navigate,'goToPins');
      componetInstance.savePin();
      expect(true).toBe(true);
      expect(open).toHaveBeenCalledWith('Your pin is saved, Redirecting ...', 'Cool!', {
        duration: 2000
      });
      expect(open).toHaveBeenCalled();
      expect(navigate).toHaveBeenCalled();
    })
  });
})
