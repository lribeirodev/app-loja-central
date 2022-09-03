import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-loading',
  template:
  `<div class="loading-component">
    <div class="loading-component__container" *ngIf="loadingCheck">
      <img class="loading-component__container__loading" [src]="loadingImg"/>
    </div>
  </div>`,
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {
  loadingImg : string = "./assets/img/loading.gif";
  @Input() loadingCheck? : boolean;
}
