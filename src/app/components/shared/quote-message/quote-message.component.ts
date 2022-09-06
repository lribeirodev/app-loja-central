import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { REFRESH_TIME } from "../../core/enum/quote-message.enum";
import { IQuoteMessage } from "../../core/interfaces/quote-message.interface";
import { ApiService } from "../../core/service/api.service";

@Component({
  selector: 'app-quote-message',
  templateUrl: './quote-message.component.html',
  styleUrls: ['./quote-message.component.scss']
})
export class QuoteMessageComponent implements OnInit {

  selectProduct : any;
  quotePrincipal?: IQuoteMessage;
  quoteList: IQuoteMessage[] = [];
  subcriberList?: Observable<void>;
  refreshTime : number = REFRESH_TIME.MEDIUM;

  constructor(private service: ApiService, private route: ActivatedRoute){ }

  ngOnInit(): void {
    this.selectProduct = this.route.snapshot.paramMap.get('nome') === null;
    if(this.selectProduct) {
      this.initObservable();
      this.subcriberList?.subscribe();
    }
  }

  private initObservable(): void {

    this.subcriberList = new Observable<void>(
      obs => {

        this.service.get(environment.lambda.GET_QUOTE_LIST)
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
