import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { CartapiService } from '../service/cartapi.service';
import Swal from "sweetalert2";
import { AngularFirestore , AngularFirestoreCollection } from "@angular/fire/compat/firestore";
import { take } from 'rxjs';



@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit{
  product:any [] =[]
  order:boolean = false;
  check!: FormGroup;
  private mycheck:AngularFirestoreCollection<any> | undefined;
  checkmsg!:string
  constructor(private api:ApiService,private fb:FormBuilder,private cartapi:CartapiService, private firestore: AngularFirestore) {
          this.check = this.fb.group({
          email:['',[Validators.required,Validators.email]],
          address :['',[Validators.required]],
          postal:['',[Validators.required]]
          })
  }
  ngOnInit(): void {
    this.mycheck = this.firestore.collection('CheckOut')
    this.cartapi.getproduct().pipe(take(1)).subscribe(product => {
      this.product = product
  })
  }

  submit(val: any) {
    if (this.check.invalid) {
      Swal.fire({
        title: "Oops!",
        text: "Please fill in all required fields!",
        icon: "error",
        confirmButtonText: "Okay"
      });
      return;
    }
    const total = this.cartapi.getTotal();
  
      const orderData = {
        ...val, 
        product: this.product, 
        total: total, 
        date: new Date(), 
      };
  
      console.log(orderData);
  
      this.mycheck?.add(orderData) 
        .then(res => {
          this.checkmsg = 'Order is Submitted!';
          console.log('Document successfully written!', res);
          this.order = true
          this.cartapi.remove()
          this.check.reset()
          this.product = []
        })
        .catch(err => {
          this.checkmsg = 'Error Occurred!';
          console.error('Error writing document: ', err);
        });
  
      // this.cartapi.remove(); 
      // this.check.reset();

  }
  
  }


