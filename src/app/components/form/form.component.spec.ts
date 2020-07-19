import { ComponentFixture,
         async,
         TestBed} from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { NO_ERRORS_SCHEMA,
         CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { MatSnackBar } from "@angular/material";

import { FormComponent } from "./form.component";
import { RepositoryService } from "src/app/services/repository.service";
import { NavigationService } from "src/app/services/navigation.service";

class RepositoryServiceStub{

}

class NavigationServiceStub{

}

class MatSnackBarStub{}


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
  })


})







//   class RepositoryServiceStub{
//     savePins(){
//       return of(true);
//     }
//   }
//   class NavigationServiceStub{
//     goToPins(){

//     }
//   }
//   class MatSnackBarStub{
//     open(){
//       return {
//         afterDismissed: () => {
//           return of(true);
//         }
//       }
//     }
//   }

//   fdescribe('FormComponent', () => {
//     let component: FormComponent;
//     let fixture: ComponentFixture<FormComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ FormComponent ],
//       providers: [
//         {
//           provide: RepositoryService,
//           useClass: RepositoryServiceStub
//         },
//         {
//           provide: NavigationService,
//           useClass: NavigationServiceStub
//         },
//         {
//           provide: MatSnackBar,
//           useClass: MatSnackBarStub,
//         }
//       ],
//       schemas:[
//         NO_ERRORS_SCHEMA,
//         CUSTOM_ELEMENTS_SCHEMA
//       ],
//       imports: [ReactiveFormsModule]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(FormComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   describe('when component is initializated',() => {
//     it('Should create the forms', () => {
//       console.log(component.firstFormGroup.controls);
//       expect(Object.keys(component.firstFormGroup.controls))
//       .toEqual(['title',
//                 'author',
//                 'description'
//       ]);
//       expect(Object.keys(component.secondFormGroup.controls))
//       .toEqual(['firstAsset',
//                 'assets'
//       ]);

//     })
//   })
//   describe('When addAsset is executed',() => {
//     it('adding new assets', () => {
//       const assets = <FormArray>component.secondFormGroup.get('assets');
//       component.addAsset();
//       component.addAsset();
//       console.log(Object.keys(assets.controls));
//       expect(Object.keys(assets.controls)).toEqual(['0','1']);
//     })
//   });

//   describe('when delete asset', () => {
//     it('should remove the form control', () => {
//       const assets = <FormArray>component.secondFormGroup.get('assets');
//       component.addAsset();
//       component.deleteAsset(0);
//       expect(Object.keys(assets.controls)).toEqual([]);
//     })
//   })

//   describe('when savePins is executed', () => {
//     it('should navigates to pins view', () => {
//       const navigate = spyOn((<any>component).navigate,'goToPins');
//       const open = spyOn((<any>component).snackBar,'open')
//       .and.callThrough();

//       component.savePin();

//       expect(navigate).toHaveBeenCalled();
//       expect(open).toHaveBeenCalledWith(
//         'Your pin is saved, Redirecting ...',
//         'Cool!',
//         {duration: 2000});
//     })
//   })



// });
