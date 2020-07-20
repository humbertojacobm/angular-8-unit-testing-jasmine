import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatBottomSheetRef } from '@angular/material';
import { ActionsComponent } from './actions.component';
import { PinsService } from '../pins/pins.service';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
class MatBottomSheetRefStub{
  dismiss(){
  }
}
class PinsServiceStub{
  resolveActionObserver(value){}
}
fdescribe('ActionsComponent', () => {
  let component: ActionsComponent;
  let fixture: ComponentFixture<ActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionsComponent ],
      providers:[
        {
          provide: MatBottomSheetRef,
          useClass: MatBottomSheetRefStub
        },
        {
          provide: PinsService,
          useClass: PinsServiceStub
        }
      ],
      schemas:[NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should use openLink', ()=> {
    const dismiss = spyOn(component.bottomSheetRef,"dismiss");
    const resolveActionObserver = spyOn(component.pinsService,"resolveActionObserver");
    component.openLink(new MouseEvent("button"),"something");

    expect(dismiss).toHaveBeenCalled();
    expect(resolveActionObserver).toHaveBeenCalled();
  })

});
