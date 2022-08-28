import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users = {
    email:""
  }
  constructor(private user:UserService , private router:Router) { }

  getotp(){
    this.user.getuser(this.users)
    localStorage.setItem('email' , this.users.email)
    this.router.navigate(["/otp"])
  }

  ngOnInit(): void {
  }

}
