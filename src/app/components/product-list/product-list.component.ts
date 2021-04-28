import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  Product:any = [];

  constructor(private apiService: ApiService) { 
    this.readProduct();
  } 

  ngOnInit() {} 

  readProduct(){
    this.apiService.getProducts().subscribe((data) => {
     this.Product = data;
    })    
  }

  removeProduct(product, index) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deleteProduct(product._id).subscribe((data) => {
          this.Product.splice(index, 1);
        }
      )    
    }
  }
  
}  