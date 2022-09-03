import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { PagesRoutingModule } from "./pages-routing.module";
import { PagesComponent } from "./pages.component";

@NgModule(
  {
    declarations:[
      PagesComponent,
    ],
    imports:[
      CommonModule,
      RouterModule,
      PagesRoutingModule,
      SharedModule,
    ]
  }
)
export class PagesModule{}
