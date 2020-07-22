import { ApiService } from "./api.service"
import { TestBed, getTestBed } from "@angular/core/testing";
import { HttpTestingController, HttpClientTestingModule } from "@angular/common/http/testing"
import { environment } from "src/environments/environment";
import { inject } from "@angular/core";
import { HttpHeaders } from "@angular/common/http";

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


  });

  it("should use get with header",()=>{
    //arrange
     let service: ApiService;
     let injector: TestBed;
     let httpMock: HttpTestingController;

     TestBed.configureTestingModule({
       providers: [ApiService],
       imports:[HttpClientTestingModule]
     })

     service=TestBed.get(ApiService);
     injector=getTestBed();
     httpMock = injector.get(HttpTestingController);

     expect(service).toBeTruthy();

     //act
     const response ="testing";
     const endpointParameter = "/testing"
     const headerKey = "apellido";
     const headerValue="portocarrero"

     const header = new HttpHeaders().set(headerKey,headerValue);

     //assert
     service.get(endpointParameter,header).subscribe((response)=>{
      expect(response).toBeTruthy();
     })
     //mocking the api request to generate a fake response
        const req = httpMock.expectOne(environment.apiEndpoint+endpointParameter);
        expect(req.request.method).toBe("GET");
        expect(req.request.headers.get(headerKey)).toBe(headerValue);
        req.flush(response);

    //destroy
    service=null;
    injector= null;
    httpMock=null;
  });

  it("should call post",()=>{
    //arrange
    let service :ApiService;
    let injector : TestBed;
    let httpMock : HttpTestingController;

    TestBed.configureTestingModule({
      providers: [ApiService],
      imports: [HttpClientTestingModule]
    })

    service = TestBed.get(ApiService);

    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);

    expect(service).toBeTruthy();

    //assert
    const endpointParameter="/testing";
    const bodyParameter={
      name:"humberto"
    };
    const reqOpts={
      key: "value"
    }
    service.post(endpointParameter,bodyParameter,reqOpts).subscribe((response)=>{
       expect(response).toBeTruthy();
    });
    const req = httpMock.expectOne(environment.apiEndpoint+endpointParameter);
    expect(req.request.method).toBe("POST");
    req.flush(bodyParameter);

    //destroy
    service = null;
    injector = null;
    httpMock = null;
  });

  it("should call put",()=>{
    //arrange
    let service :ApiService;
    let injector : TestBed;
    let httpMock : HttpTestingController;

    TestBed.configureTestingModule({
      providers: [ApiService],
      imports: [HttpClientTestingModule]
    })

    service = TestBed.get(ApiService);

    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);

    expect(service).toBeTruthy();

    //assert
    const endpointParameter="/testing";
    const bodyParameter={
      name:"humberto"
    };
    const reqOpts={
      key: "value"
    }
    service.put(endpointParameter,bodyParameter,reqOpts).subscribe((response)=>{
       expect(response).toBeTruthy();
    });
    const req = httpMock.expectOne(environment.apiEndpoint+endpointParameter);
    expect(req.request.method).toBe("PUT");
    req.flush(bodyParameter);

    //destroy
    service = null;
    injector = null;
    httpMock = null;
  });

  it("should call delete",()=>{
    //arrange
    let service :ApiService;
    let injector : TestBed;
    let httpMock : HttpTestingController;

    TestBed.configureTestingModule({
      providers: [ApiService],
      imports: [HttpClientTestingModule]
    })

    service = TestBed.get(ApiService);

    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);

    expect(service).toBeTruthy();

    //assert
    const endpointParameter="/testing";
    const bodyParameter={
      name:"humberto"
    };
    service.delete(endpointParameter,bodyParameter).subscribe((response)=>{
       expect(response).toBeTruthy();
    });
    const req = httpMock.expectOne(environment.apiEndpoint+endpointParameter);
    expect(req.request.method).toBe("DELETE");
    req.flush(bodyParameter);

    //destroy
    service = null;
    injector = null;
    httpMock = null;
  });
})
