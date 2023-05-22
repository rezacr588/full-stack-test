import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  onSignin(username: string, password: string) {
    this.userService.signin(username, password).subscribe(response => {
      console.log(response);
    });
  }

}
