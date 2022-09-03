import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SobreRoutingModule } from "./sobre-routing.module";
import { SobreComponent } from "./sobre.component";

@NgModule(
  {
    declarations:[
      SobreComponent,
    ],
    imports:[
      CommonModule,
      RouterModule,
      SobreRoutingModule,
    ],
  }
)
export class SobreModule{}
