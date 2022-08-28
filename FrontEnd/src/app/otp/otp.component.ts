import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {

  x = localStorage.getItem('email')

  userdata={
    email:this.x,
    otp:""
  }

  constructor(private user: UserService , private router:Router) { }

  ngOnInit(): void {
  }
  loginuser(){
    this.user.checkuser(this.userdata).subscribe((res)=>{
      
      console.log(res.status)
      if(res.status){
         this.router.navigate(['/welcome'])
       }else{
        var error = res.data;
        console.log(error);
        alert(error);
       }
    })
  }
}
