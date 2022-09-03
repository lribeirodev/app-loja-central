import { Component } from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  headerColors : any = {
    bar : '#FFB200',
    textTop: '#FFF4CF',
    textBottom: '',
  }

}
