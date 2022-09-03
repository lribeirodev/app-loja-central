import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router, RouterOutlet } from "@angular/router";
import { IProductItem } from "../../core/interfaces/product.interface";

@Component({
  selector: "app-page-home",
  templateUrl: "./home.component.html",
})
export class HomeComponent implements OnDestroy, OnInit{
  sub : any;
  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.sub = this.route.data.subscribe(data => {
      window.document.title = data['title'];
    })
  }

  ngOnDestroy(): void {
      this.sub.unsubscribe();
  }


}
