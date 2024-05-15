import { Component, Input } from '@angular/core';
import { products } from 'src/app/model/products';

@Component({
  selector: 'app-producr-list',
  templateUrl: './producr-list.component.html',
  styleUrls: ['./producr-list.component.css']
})
export class ProducrListComponent {
  selectedProduct:products;
    products = [
      {
        "Id": "001",
        "name": "Classic Sneakers",
        "description": "High-quality sneakers for everyday comfort.",
        "brand": "SneakerCo",
        "gender": "unisex",
        "category": "footwear",
        "size": ["7", "8", "9", "10"],
        "color": ["red", "blue"],
        "price": 79.99,
        "is_in_inventory": true,
        "itemsLeft": 15,
        "imageUrl": "assets/images/ascis.jpeg"
      },
      {
        "Id": "002",
        "name": "Sports Watch",
        "description": "Durable and stylish sports watch with waterproof feature.",
        "brand": "TimeKeeper",
        "gender": "male",
        "category": "accessories",
        "size": ["small", "medium", "large"],
        "color": ["black", "grey"],
        "price": 249.99,
        "is_in_inventory": true,
        "itemLeft": 40,
        "imageUrl": "assets/images/download.jpeg",
        "discount":"10%"
      },
      {
        "Id": "003",
        "name": "Running Shorts",
        "description": "Lightweight running shorts for men.",
        "brand": "FastRun",
        "gender": "male",
        "category": "apparel",
        "size": ["S", "M", "L", "XL"],
        "color": ["green", "blue", "black"],
        "price": 29.99,
        "is_in_inventory": true,
        "itemLeft": 25,
        "imageUrl": "assets/images/images.jpeg",
        "discount":"5%"
      },
      {
        "Id": "004",
        "name": "Running Shoes",
        "description": "Lightweight running shoes for men.",
        "brand": "Nike",
        "gender": "male",
        "category": "apparel",
        "size": ["S", "M", "L", "XL"],
        "color": ["green", "blue", "black"],
        "price": 1000,
        "is_in_inventory": true,
        "itemLeft": 25,
        "imageUrl": "assets/images/nike2.jpeg",
        "discount":"5%"
      },
      {
        "Id": "005",
        "name": "Running Shoes",
        "description": "Lightweight running shoes for men.",
        "brand": "Puma",
        "gender": "male",
        "category": "apparel",
        "size": ["S", "M", "L", "XL"],
        "color": ["green", "blue", "black","White"],
        "price": 1229.99,
        "is_in_inventory": false,
        "itemLeft": 25,
        "imageUrl": "assets/images/nikeShoes.jpeg",
        "discount":"5%"
      },
      {
        "Id": "006",
        "name": "Running Shoes",
        "description": "Lightweight running shoes for men.",
        "brand": "Addidas",
        "gender": "male",
        "category": "apparel",
        "size": ["S", "M", "L", "XL"],
        "color": ["green", "blue", "black","White"],
        "price": 2329.99,
        "is_in_inventory": true,
        "itemLeft": 25,
        "imageUrl": "assets/images/rebook.jpeg",
        "discount":"5%"
      }
    ];
    totalProductCount = this.products.length;
    totalProductInStock = this.products.filter(p=>p.is_in_inventory===true).length;
    totalProductOutOfStock = this.products.filter(p=>p.is_in_inventory===false).length;

    @Input()
    searchText:string='';

    selectedFilterRadioButton:string = 'all';
    onFilterChanged(value:string){
      this.selectedFilterRadioButton = value
    }
  }
  
