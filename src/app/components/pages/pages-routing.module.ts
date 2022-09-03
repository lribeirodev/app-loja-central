import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PagesComponent } from "./pages.component";

const routes: Routes = [
  {
    path: 'home',
    component: PagesComponent,
    data: {
      title:"Loja - Compartilhando o que você gosta!"
    },
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'sobre',
    component: PagesComponent,
    loadChildren: () => import('./sobre/sobre.module').then(m => m.SobreModule)
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class PagesRoutingModule {}
