import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { IProductItem } from "src/app/components/core/interfaces/product.interface";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItem implements OnInit{

  @Input() item!: IProductItem;
  target: string = '_self';
  showModal: boolean = false;

  constructor(
    private domSanitizer : DomSanitizer
  ){}

  ngOnInit(): void {
      this.item.safeVideo = this.getVideo();
  }

  public callToAction(){
    window.open(this.item.link, this.target);
  }

  public openVideoModal(){
    this.showModal = !this.showModal;

    this.showModal ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'scroll';
  }

  private getVideo(): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.item.video}?autoplay=1&playsinline=0&rel=0`);
  }
}
