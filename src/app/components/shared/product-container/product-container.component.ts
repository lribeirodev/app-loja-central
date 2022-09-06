import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { LAMBDA } from "../../core/enum/lambda.enum";
import { IProductItem } from "../../core/interfaces/product.interface";
import { ApiService } from "../../core/service/api.service";
@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.scss']
})
export class ProductContainerComponent implements OnInit{
  selectProduct?: string | null;
  loading : boolean = true;
  listItems : IProductItem[] = [];
  productTitle = {
    first: 'Produtos'.toUpperCase(),
    second: 'Selecionados'.toUpperCase(),
    third:  'para Você'.toUpperCase(),
  };

  constructor(private service: ApiService, private rote: ActivatedRoute, private router: Router){
    this.selectProduct = this.rote.snapshot.paramMap.get('nome');
  }

  ngOnInit() {
    this.initConfig(this.selectProduct);
    }

  get renderSelectProductMessage():boolean{
    return !!this.selectProduct;
  }

  private initConfig(select: string | null | undefined): void {
    this.service.get(LAMBDA.GET_PRODUCTS_LIST).subscribe(data => {
      this.listItems.push(...data);

      if(select){
        let arr = this.listItems.filter(item => item.select === select);
        arr.length > 0 ? this.listItems = arr : this.router.navigate(["/home"]);
      }

      this.loading = false;
    })
  }

}
