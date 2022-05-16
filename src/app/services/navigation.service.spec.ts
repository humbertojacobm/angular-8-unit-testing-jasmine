import { async } from "rxjs/internal/scheduler/async"
import { TestBed } from "@angular/core/testing";
import { NavigationService } from "./navigation.service";
import { RouterTestingModule } from "@angular/router/testing";

fdescribe("navigation service",()=>{

  it("should be constructed",()=>{
    //arrange
    let service: NavigationService;
    TestBed.configureTestingModule({providers:[NavigationService], imports:[RouterTestingModule]});
    service = TestBed.get(NavigationService);

    //assert
    expect(service).toBeTruthy();

  })

  it("should call router.navigate",()=>{
    //arrange
    let service: NavigationService;
    TestBed.configureTestingModule({providers:[NavigationService], imports:[RouterTestingModule]});
    service = TestBed.get(NavigationService);

    const routerNavigate = spyOn(service.router,"navigate");
    //act
    service.goToPins();
    //assert
    expect(routerNavigate).toHaveBeenCalledWith(['/app/pins']);

  })

  it("should call router.navigate by GotoEditMode",()=>{
    //arrange
    let service: NavigationService;
    TestBed.configureTestingModule({providers:[NavigationService], imports:[RouterTestingModule]});
    service = TestBed.get(NavigationService);

    const routerNavigate = spyOn(service.router,"navigate");
    //act
    service.goToEditMode();
    //assert
    expect(routerNavigate).toHaveBeenCalledWith(['/app/add']);

  })


})
