import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from "sweetalert2";
import { min } from 'rxjs';
  import { AngularFirestore , AngularFirestoreCollection } from "@angular/fire/compat/firestore";
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',  
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  myContact !: FormGroup
  private myForm: AngularFirestoreCollection<any> | undefined;
  submitmsg!: string;
  Swal: any;
    constructor(private api:ApiService,private fb:FormBuilder,private firestore:AngularFirestore,private http:HttpClient){
    this.myContact = this.fb.group({
      name:['',[Validators.required,Validators.minLength(6)]],
      email:['',[Validators.required,Validators.email]],
      message:['',[Validators.required]]
    })
  }
ngOnInit(): void {
  this.myForm = this.firestore.collection('enquiry');
}
submit(val:any){
  this.http.post('https://api.web3forms.com/submit',val).subscribe(res=>{
    console.log(res);
 
  })
  this.myForm?.add(val).then(res=>{
    this.submitmsg = 'submitted'
    Swal.fire({
      title: "Your Form Is Submitted!",
      icon: "success",
      timer:1000,
      timerProgressBar:true,
      willClose(popup) {
       
      },
    });
    // setTimeout(() => {
    //   this.Swal.fire = ''
    // }, 30);
  })
  
  .catch(err =>{
    this.submitmsg = 'error'
    console.log(err)
  })
  this.myContact.reset();

}
}
