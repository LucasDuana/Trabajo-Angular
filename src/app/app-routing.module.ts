import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocademiaAboutComponent } from './locademia-about/locademia-about.component';
import { LocademiaProductsComponent } from './locademia-products/locademia-products.component';

const routes: Routes = [
{
  path:'',
  redirectTo:'products',
  pathMatch:'full'
},
{
  path:'products',
  component:LocademiaProductsComponent
},
{
  path:'about',
  component:LocademiaAboutComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
