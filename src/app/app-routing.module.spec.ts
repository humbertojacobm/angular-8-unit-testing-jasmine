import {routes} from './app-routing.module'
import { PinsComponent } from './components/pins/pins.component';
import { FormComponent } from './components/form/form.component';

fdescribe('App Routing', () => {
  it('Should have app as path', ()=> {
      expect(routes[0].path).toBe('app');
  });
  it('should have children',()=>{
    expect(routes[0].children).toContain({
      path: 'pins',
      component: PinsComponent
    });
    expect(routes[0].children).toContain({
      path: 'add',
      component: FormComponent
    })
  })
  it('shoud have default redirection', ()=> {
    expect(routes[1]).toEqual({
      path: '',
      pathMatch: 'full',
      redirectTo: 'app/pins'
    });

  });
});

// fdescribe('App Routing', () => {
//   beforeAll(()=> {
//     console.log("beforeall");
//   });
//   beforeEach(()=> {
//     console.log("beforeEach");
//   });
//   afterAll(()=> {
//     console.log("afterAll");
//   });
//   afterEach(()=> {
//     console.log("afterEach");
//   });
//   it('Should have app as path', () => {
//     expect(routes[0].path).toBe('app');
//   });
//   it('Should match the childrens', () => {
//     expect(routes[0].children).toContain({
//       path: 'pins',
//       component: PinsComponent
//     })
//   })
// })
