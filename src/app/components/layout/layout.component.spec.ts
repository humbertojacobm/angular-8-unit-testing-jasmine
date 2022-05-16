import { ComponentFixture, async, TestBed } from "@angular/core/testing";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { MatBottomSheet } from "@angular/material";
import { RouterTestingModule } from "@angular/router/testing";
import { LayoutComponent } from "./layout.component";
import { Observable, from, of } from "rxjs";
import { NavigationStart } from "@angular/router";

class MatBottomSheetStub{}

fdescribe("Layout component",()=>{
  let componentInstance:LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;
  beforeEach(async(()=>{
    TestBed.configureTestingModule({
       declarations:[LayoutComponent],
       providers:[
         {
           provide: MatBottomSheet,
           useClass: MatBottomSheetStub
         }
       ],
       imports:[
         RouterTestingModule.withRoutes([
          {
            path:'',
            component: LayoutComponent
          },
          {
            path: 'app/add',
            component: LayoutComponent
          }
         ])
       ],
       schemas:[NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }))
  beforeEach(()=>{
    fixture = TestBed.createComponent(LayoutComponent);
    componentInstance = fixture.componentInstance;
    fixture.detectChanges();
  })

  // it('shoud be created',()=>{
  //   expect(componentInstance).toBeTruthy();
  // });

  describe("ngOnInit",()=>{
    it("should call router.events",()=>{

      const verifyEditMode = spyOn(componentInstance,"verifyEditMode");

      fixture.ngZone.run(()=> {

        componentInstance.router.navigate(['/']);

        fixture.whenStable().then(()=>{
          expect(componentInstance.editMode).toBeFalsy();
          expect(verifyEditMode).toHaveBeenCalled();
        })
      });

    });
  })

})
