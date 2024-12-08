// import { Component, NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { AboutComponent } from './about/about.component';
// import { ContectComponent } from './contect/contect.component';
// import { AppComponent } from './app.component';
// import { HomeComponent } from './home/home.component';
// import { NotFoundComponent } from './not-found/not-found.component';
// import { ProductComponent } from './product/product.component';
// import { CartComponent } from './cart/cart.component';

// const routes: Routes = [
//   {
//     path: 'about',
//     component: AboutComponent,
//     loadChildren:()=>import('./admin/admin.module').then((m)=>m.AdminModule)
//   },
//   {
//     path: 'contact',
//     component: ContectComponent,
//   },
//   {
//     path: 'cart',
//     component: CartComponent,
//   },
//   {
//     path: '',
//     component: AppComponent,
//   },
//   {
//     path: 'home',
//     component: HomeComponent,
//     //children: [], //homecomponent his child also
//   },
//   {
//     path: 'product/:id',
//     component: ProductComponent, //http://localhost:4200/product/1  routing patameters
//   },
//   {
//     path: '**',
//     component: NotFoundComponent, //404notfoundcomponent http://localhost:4200/pnsdvlkdv
//   },
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],
// })
// export class AppRoutingModule {}
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContectComponent } from './contect/contect.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'contact',
    component: ContectComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'product/:id',
    component: ProductComponent /* routing parameters*/,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}