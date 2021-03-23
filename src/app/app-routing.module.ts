import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './banner/banner.component';
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [
  {path:"", component:BannerComponent},
  {path:"contactme", component:ContactusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
