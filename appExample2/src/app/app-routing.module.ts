import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeAppCartComponent } from './home-app-cart/home-app-cart.component';

const routes: Routes = [

  /*{
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path:'products',
    component:  ProductsComponent,
  },
  {
    path:'home',
    component:  ShoppingCartComponent,
  },
  {
    path:'**',
    redirectTo: '/'
  }*/

  {
    path:'',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeAppCartComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
