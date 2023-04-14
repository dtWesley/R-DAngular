import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ContactusComponent} from "./contactus/contactus.component";
import {UploadImageComponent} from "./upload-image/upload-image.component";
import {ApiComponent} from "./api/api.component";


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'mail', component: ContactusComponent},
  { path: 'image', component: UploadImageComponent},
  { path: 'api', component: ApiComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
