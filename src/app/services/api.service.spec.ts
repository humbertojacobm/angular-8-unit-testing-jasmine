import { ApiService } from "./api.service"
import { TestBed, getTestBed } from "@angular/core/testing";
import { HttpTestingController, HttpClientTestingModule } from "@angular/common/http/testing"
import { environment } from "src/environments/environment";

fdescribe("api servicve",()=>{
  it("should be constructed",()=>{
    //arrange
    let service: ApiService;
    let injector: TestBed;
    let httpMock: HttpTestingController;

    TestBed.configureTestingModule({
       providers: [ApiService],
       imports:[HttpClientTestingModule]
    });

    injector = getTestBed();
    service = TestBed.get(ApiService);
    httpMock = injector.get(HttpTestingController);

    //assert

    expect(service).toBeTruthy();

    //destroy
    injector = null;
    service = null;
    httpMock = null;


  })

  it("should test the get",()=>{
    //arrange
    let service: ApiService;
    let injector: TestBed;
    let httpMock: HttpTestingController;

    TestBed.configureTestingModule({
       providers: [ApiService],
       imports:[HttpClientTestingModule]
    });

    injector = getTestBed();
    service = TestBed.get(ApiService);
    httpMock = injector.get(HttpTestingController);


    debugger;
    const parameter = "/test";
    const response = "testing";

    //listening the httpGet
    service.get(parameter).subscribe((response)=>{
      //assert -> final comprobation.
      expect(response).toBeTruthy();
    });

    //preparing the mocking
      const req = httpMock.expectOne(environment.apiEndpoint + parameter);
      expect(req.request.method).toBe('GET');

      req.flush(response);

    //destroy
    injector = null;
    service = null;
    httpMock = null;


  })
})
