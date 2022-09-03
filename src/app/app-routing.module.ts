import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesRoutingModule } from './components/pages/pages-routing.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import("./components/pages/pages.module").then(m => m.PagesModule),
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
