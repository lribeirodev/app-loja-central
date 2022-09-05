import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { LAMBDA } from "../../core/enum/lambda.enum";
import { REFRESH_TIME } from "../../core/enum/quote-message.enum";
import { IQuoteMessage } from "../../core/interfaces/quote-message.interface";
import { ApiService } from "../../core/service/api.service";

@Component({
  selector: 'app-quote-message',
  templateUrl: './quote-message.component.html',
  styleUrls: ['./quote-message.component.scss']
})
export class QuoteMessageComponent implements OnInit {

  quotePrincipal?: IQuoteMessage;
  quoteList: IQuoteMessage[] = [];
  subcriberList?: Observable<void>;
  refreshTime : number = REFRESH_TIME.MEDIUM;

  constructor(private service: ApiService){}

  ngOnInit(): void {
    this.initObservable();
    this.subcriberList?.subscribe();
  }

  private initObservable(): void {

    this.subcriberList = new Observable<void>(
      obs => {

        this.service.get(LAMBDA.GET_QUOTE_LIST)
        .subscribe(data => {
          this.quoteList.push(...data);
          repeat();
        })

        const repeat = () => {
          setTimeout(() => {
            this.quotePrincipal = this.quoteList[Math.floor(Math.random() * this.quoteList.length)];
            obs.next();
            repeat();
          },this.quotePrincipal ? this.refreshTime : REFRESH_TIME.FAST);
        };
        obs.next();
      }
    );
  }
}
