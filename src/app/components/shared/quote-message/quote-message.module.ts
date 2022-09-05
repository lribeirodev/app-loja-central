import { CommonModule } from "@angular/common";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ApiService } from "../../core/service/api.service";
import { LoadingModule } from "../loading/loading.module";
import { QuoteMessageComponent } from "./quote-message.component";

@NgModule({
  declarations:[
    QuoteMessageComponent
  ],
  imports:[
    CommonModule,
    LoadingModule,
    HttpClientModule,
  ],
  exports:[
    QuoteMessageComponent,
  ],
  providers:[
    ApiService
  ]
})
export class QuoteMessageModule {}
