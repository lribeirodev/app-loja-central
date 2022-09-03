import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LoadingModule } from "../loading/loading.module";
import { ProductContainerComponent } from "./product-container.component";
import { ProductItem } from "./product-item/product-item.component";

@NgModule({
  declarations:[
    ProductContainerComponent,
    ProductItem,
  ],
  imports:[
    CommonModule,
    LoadingModule,
  ],
  exports:[
    ProductContainerComponent
  ]
})
export class ProductContainerModule {}
