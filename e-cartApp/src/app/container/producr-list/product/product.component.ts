import { Component, Input } from '@angular/core';
import { products } from 'src/app/model/products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input()
  product:products;
}
