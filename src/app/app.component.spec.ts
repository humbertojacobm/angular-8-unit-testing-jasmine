import { TestBed,
         async,
         ComponentFixture} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

import { AppComponent } from './app.component';

fdescribe('AppComponent', ()=> {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach( async(()=>{
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent]
    }).compileComponents();
  }))

  beforeEach(()=> {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should have a router outlet', ()=> {
    const de = fixture.debugElement.query(By.directive(RouterOutlet));
    expect(de).not.toBeNull();
  });

});

// fdescribe('AppComponent', () => {
//   let fixture: ComponentFixture<AppComponent>;
//   let component: AppComponent;
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       imports: [RouterTestingModule],
//       declarations: [AppComponent]
//     }).compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(AppComponent);
//     component = fixture.debugElement.componentInstance;
//   })

//   it('should have a router outlet', ()=>{
//      const de = fixture.debugElement.query(By.directive(RouterOutlet));
//      expect(de).not.toBeNull();
//   });

// });
