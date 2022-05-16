import { ComponentFixture, async, TestBed } from "@angular/core/testing";
import { MenuComponent } from "./menu.component";
import { By } from "@angular/platform-browser";

fdescribe("menu component group",()=> {

  let componentInstance: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async(()=>{
    TestBed.configureTestingModule({
      declarations:[MenuComponent]
    }).compileComponents();
  }))

  beforeEach(()=>{
    fixture = TestBed.createComponent(MenuComponent);
    componentInstance = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe("Testing markup",()=>{
    it('should have title', () => {
      const titleElement = fixture.debugElement.query(By.css("h1"));
      expect(titleElement.nativeElement.innerHTML).toBe("eLearning Management System");
    })
  })

  describe("Ouput",()=>{
     it("should emmit", ()=>{

      componentInstance.clicked.subscribe((response)=>{
         expect(response).toBe(true);
      })
      // componentInstance.clicked.emit(true);
      componentInstance.clicked.next(true);
      expect(true).toBe(true);
     })
  });

  it("should click the button to check the counter",()=>{
    //arrange
    const buttonElement = fixture.debugElement.query(By.css("button"));
    //act
    buttonElement.triggerEventHandler("click",null);
    //assert
    expect(componentInstance.counter).toBeGreaterThan(0);
  })

})
