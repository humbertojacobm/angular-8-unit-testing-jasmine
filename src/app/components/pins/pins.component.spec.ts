
import { ComponentFixture, async, TestBed } from "@angular/core/testing";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";

import { MatSnackBar } from "@angular/material";

import { RepositoryService } from "src/app/services/repository.service";
import { PinsComponent } from "./pins.component";
import { PinsService } from "./pins.service";
import { ReactiveFormsModule } from "@angular/forms";

class RepositoryServiceStub{}
class MatSnackBarStub{}
class PinsServiceStub{}

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

  it('just testing the spec file',()=>{
    expect(true).toBeTruthy();
  })
})
