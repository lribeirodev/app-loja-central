import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ApiService } from "../../core/service/api.service";
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
    HttpClientModule,
  ],
  exports:[
    ProductContainerComponent
  ],
  providers:[
    ApiService,
  ]
})
export class ProductContainerModule {}
