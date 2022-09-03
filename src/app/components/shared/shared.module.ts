import { NgModule } from "@angular/core";
import { FooterModule } from "./footer/footer.module";
import { HeaderModule } from "./header/header.module";
import { QuoteMessageModule } from "./quote-message/quote-message.module";
import { ProductContainerModule } from "./product-container/product-container.module";

@NgModule({
  exports:[
    FooterModule,
    HeaderModule,
    ProductContainerModule,
    QuoteMessageModule,
  ],
})
export class SharedModule {}
