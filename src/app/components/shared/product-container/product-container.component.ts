import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { IProductItem } from "../../core/interfaces/product.interface";

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.scss']
})
export class ProductContainerComponent implements OnInit{
  loading : boolean = true;
  listItems : IProductItem[] = [];

  ngOnInit() {
    this.initConfig();
    }

  private initConfig(): void {
    fetch('./assets/json/products-list.json')
    .then(data => data.json())
    .then(products => {
      this.listItems.push(...products)
      this.loading = false;
    });
  }

}
