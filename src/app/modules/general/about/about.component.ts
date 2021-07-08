import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent  {

  filteredString:string=''; 
   sortby:any='1'
  products:any;
  // constructor(private productServices:ProductserviceService)
  // {
  //   this.products=productServices.getallproducts();
  // }

  errMsg:any;
  constructor(proService:ProductService){
    proService.getallproducts().subscribe(
      result => this.products = result,
      error => this.errMsg = error
    )
   
  // products:Product[]=[
  //   {productId:1, productName:'cricektbat',productPrice:1500,productDes:'the product is cricketbat kashmir villow ',productImg:'assets/images/bat.jpg'}
  //   ,{productId:2, productName:'cricektball',productPrice:90,productDes:'the product is cricketball hardtennis ',productImg:'assets/images/ball.jpg'}
  //   ,{productId:3, productName:'gloves',productPrice:400,productDes:'the product is cricket gloves ',productImg:'assets/images/gloves1.jpg'}
  //   ,{productId:4, productName:'battingpads',productPrice:900,productDes:'the product is cricketpads  ',productImg:'assets/images/pads.jpg'}
  //   ,{productId:5, productName:'helmet',productPrice:600,productDes:'the product is cricket helmet ',productImg:'assets/images/helmet.jpg'}
  // ]
  // products:any;
  // constructor(private productServices:ProductserviceService)
  // {
  //   this.products=productServices.getallproducts();
  // }

  
    }
}
