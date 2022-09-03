import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LoadingModule } from "../loading/loading.module";
import { QuoteMessageComponent } from "./quote-message.component";

@NgModule({
  declarations:[
    QuoteMessageComponent
  ],
  imports:[
    CommonModule,
    LoadingModule,
  ],
  exports:[
    QuoteMessageComponent,
  ]
})
export class QuoteMessageModule {}
