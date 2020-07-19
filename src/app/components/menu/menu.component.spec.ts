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
    const titleElement = fixture.debugElement.query(By.css("h1"));
    expect(titleElement.nativeElement.InnerHTML).toBe("eLearning Management System");
  })


})
