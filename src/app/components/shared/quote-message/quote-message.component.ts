import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { REFRESH_TIME } from "../../core/enum/quote-message.enum";
import { IQuoteMessage } from "../../core/interfaces/quote-message.interface";

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

  ngOnInit(): void {
    this.initObservable();
    this.subcriberList?.subscribe();
  }

  private initObservable(): void {

    this.subcriberList = new Observable<void>(
      obs => {
        const repeat = () => {
          setTimeout(() => {
            if(this.quoteList.length === 0){
              fetch('./assets/json/quote-message.json')
              .then(data => data.json())
              .then(quotes => this.quoteList.push(...quotes))
            }
            this.quotePrincipal = this.quoteList[Math.floor(Math.random() * this.quoteList.length)];

            obs.next();
            repeat();
          },this.quotePrincipal ? this.refreshTime : REFRESH_TIME.FAST);
        };
        repeat();
        obs.next();
      }
    );
  }
}
