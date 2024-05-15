import { Component, ViewChild } from '@angular/core';
import { ProducrListComponent } from './producr-list/producr-list.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  // addToCart: number = 0;
  // product={
  //   name:'Iphone',
  //   color:'Red',
  //   price:40000,
  //   discountPercent: 5,
  //   stock:20
  // }
  // getDiscountedPrice(){
  //   return this.product.price = this.product.price - (this.product.price * this.product.discountPercent)/100
  // }
  // decrementCart(){
  //   if(this.addToCart>0){
  //     this.addToCart -= 1;
  //   }
  // }
  // incrementCart(){
  //   this.addToCart += 1;
  // }
  // onNameChange(event : any){
  //   //this.name = event.target.value
  // }

  listOfString: string[] = ['Mark','Mary','John','Harrey'];
  searchText:string = '';

  
  @ViewChild(ProducrListComponent) productListComponent:ProducrListComponent;
  setSearchText(value:string){
    this.searchText = value;
  }
}
