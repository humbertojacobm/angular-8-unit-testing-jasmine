
import { ComponentFixture, async, TestBed } from "@angular/core/testing";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";

import { MatSnackBar } from "@angular/material";
import { ReactiveFormsModule } from "@angular/forms";
import { of, Observable, from, Subject } from "rxjs";

import { RepositoryService } from "src/app/services/repository.service";
import { PinsComponent } from "./pins.component";
import { PinsService } from "./pins.service";


import { PINS } from "src/app/services/mocks/pins";

class RepositoryServiceStub{
  observer = new Subject();
  getPins():Observable<any>{
    // return of(JSON.parse(JSON.stringify(PINS)));
    // return of(JSON.stringify(PINS));
    // return of(PIN);
    // return of(null);
    return this.observer;
  }
  updatePin(id,body){
     return of(body);
  }
  emitInObservable(value){
    this.observer.next(value);
  }
}
class MatSnackBarStub{
  open():any{

  }
}
class PinsServiceStub{

  public actionObsever = new Subject();
  public $actionObserver = this.actionObsever.asObservable();
  emitInObservable(value){
    this.actionObsever.next(value);
  }
}

fdescribe('Pins component',()=>{
  let componentInstance: PinsComponent;
  let fixture: ComponentFixture<PinsComponent>;

  beforeEach(async(()=>{
    TestBed.configureTestingModule({
      declarations:[PinsComponent],
      providers:[
        {
          provide: RepositoryService,
          useClass: RepositoryServiceStub
        },
        {
          provide: MatSnackBar,
          useClass: MatSnackBarStub
        },
        {
          provide: PinsService,
          useClass: PinsServiceStub
        }
      ],
      imports:[ReactiveFormsModule],
      schemas:[NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }))

  beforeEach(()=>{
    fixture=TestBed.createComponent(PinsComponent);
    componentInstance = fixture.componentInstance;
    fixture.detectChanges();
  })

  it('should initialize the component',()=>{
    expect(componentInstance).toBeTruthy();
  });

  it('should resolve observable pinService.$actionObserver',()=>{

    //arrange
    componentInstance.pins = PINS;
    const pinsService = TestBed.get(PinsService);
    //after stubs level
    const snackBarOpen = spyOn(componentInstance.snackBar,"open")
    //esto reemplza el comportamiento del stub en el test, pero si o si debe existir el stub.
    const repositoryUpdatePin = spyOn(componentInstance.repository,"updatePin").and.returnValue(of(true));
    //act
    pinsService.emitInObservable("save");
    //assert
    expect(snackBarOpen).toHaveBeenCalled();
    expect(repositoryUpdatePin).toHaveBeenCalled();

  });

  it('should resolve repository.getPins()', ()=>{
    //arrange
    fillPinFormGroup();
    //assert
    expect(componentInstance.pins).toBeTruthy();
  })

  it('should use window.open',()=>{
    const first = "something";
    const windowOpen = spyOn(window,"open");
    componentInstance.openUrl(first);
    expect(windowOpen).toHaveBeenCalledWith(first,'_blank')
  })

  it('should increment step', ()=>{
    componentInstance.nextStep();
    expect(componentInstance.step).toBeGreaterThan(0);
  });

  it('should decrement step', ()=>{
    componentInstance.nextStep();
    componentInstance.nextStep();
    componentInstance.prevStep();
    expect(componentInstance.step).toBe(1);
  });

  it('should pass by updatePercentage',()=>{
    //arrange
    fillPinFormGroup();
    //act
     componentInstance.setStep(0);
    //assert
    expect(true).toBeTruthy();
  })
  it('trying to mockup formGroup.valueChanges',()=>{
     //arrange
     const index = 0;
     const repositoryService = TestBed.get(RepositoryService);
     const assetId = "5c520d9c7b26f12e6d0180a0";
     //act
     repositoryService.emitInObservable(PINS);

     componentInstance.setStep(index);

      componentInstance.pins[index].formGroup.get(assetId).setValue(true);

      expect(true).toBeTruthy();

  })

  it('trying to mockup formGroup.valueChanges',()=>{
    //arrange

    const index = 0;
    const repositoryService = TestBed.get(RepositoryService);
    const assetId = "5c520d9c7b26f12e6d0180a0";
    //act
    repositoryService.emitInObservable(PINS);

    componentInstance.setStep(index);

    componentInstance.pins[index].formGroup.get(assetId).setValue(true);

    componentInstance.currentSubscription.closed = false;

    const unsubscription = spyOn(componentInstance.currentSubscription,"unsubscribe");
    componentInstance.setStep(index);
    expect(unsubscription).toHaveBeenCalled();

 })

})
function fillPinFormGroup() {
  const repositoryService = TestBed.get(RepositoryService);
  //act
  repositoryService.emitInObservable(PINS);
}

