import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  registerForm:FormGroup;
  title = 'assessment';
  email_id;
  hobby;
  data;
  pwd;
  name1;
  router: any;

  constructor(private http: HttpClient) {
    this.data=new Array<any>();
   }
  ngOnInit(){
    this.registerForm=new FormGroup({
      'name':new FormControl(null,Validators.required),
      'hobby':new FormControl(null,Validators.required),
      'email': new FormControl(null,[Validators.required,Validators.email]),
      'pwd': new FormControl(null,[Validators.required,Validators.minLength(4)]),
      'phone':new FormControl(null,[Validators.required,Validators.pattern(/^[6-9]\d{9}$/)]),
      'college': new FormControl(null,[Validators.required]),
      'city': new FormControl(null,[Validators.required]),
      'state': new FormControl(null,[Validators.required]),
      'country': new FormControl(null,[Validators.required]),
      'githuburl': new FormControl(null,[Validators.required]),
      'upload': new FormControl(null,[Validators.required])

    });
   }
   onsubmit(){
    if(this.registerForm.valid==true){
      alert("valid");
   
    let url="http://127.0.0.1:3000/register/"+this.email_id+"/"+this.pwd+"/"+this.name1+"/"+this.hobby;
 
    this.http.post(url,{}).toPromise().then((data:any)=>{alert("Submitted");console.log(data);
    this.router.navigateByUrl('/submitted');


  })
    

  }
  else{alert("Enter All fields");}
}}


