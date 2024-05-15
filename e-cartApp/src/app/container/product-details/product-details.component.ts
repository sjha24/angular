import { Component, Input } from '@angular/core';
import { products } from 'src/app/model/products';
import { ProducrListComponent } from '../producr-list/producr-list.component';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  @Input() productListComponent:ProducrListComponent = undefined;
  product:products;
  
  ngOnInit(){
    this.product = this.productListComponent.selectedProduct;
  }
}