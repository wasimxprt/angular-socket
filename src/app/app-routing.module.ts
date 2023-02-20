import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DashComponent } from './dash/dash.component';
import { AssetsComponent } from './assets/assets.component';


const routes: Routes = [
  { path: 'dashboard', component: DashComponent },
  { path: 'assets', component: AssetsComponent }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
