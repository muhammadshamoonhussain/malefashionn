import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service';
import { id } from '../type';
import { CartapiService } from '../service/cartapi.service';

@Component({
  selector: 'app-detailcart',
  templateUrl: './detailcart.component.html',
  styleUrl: './detailcart.component.css'
})
export class DetailcartComponent implements OnInit{
productData :undefined | id
change : string
selectedImg:string = ''
constructor(private activeroute: ActivatedRoute ,private api:ApiService ,private cartapi:CartapiService){
  this.change = this.productData?.['img1']
}
ngOnInit(): void {
  let productid =this.activeroute.snapshot.paramMap.get('id');
  console.warn(productid);
  productid && this.api.getproductlisst(productid).subscribe((a:any)=>{
    console.warn(a);
    this.productData = a;
  })
}
changeImg(a:string):void{
  this.change = a;
  this.selectedImg = a
}
addtocart(pro:any){
  this.cartapi.addtocart(pro)
}




}
