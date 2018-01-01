import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User = JSON.parse(localStorage.getItem('user'));
  
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    console.log(this.user);
  }

  updateUser(e) {
    e.preventDefault();
    let USER_ID = this.user.id;
    let EMAIL = e.target.elements[0].value;
    let FIRSTNAME = e.target.elements[1].value;
    let LASTNAME = e.target.elements[2].value;
    let PASSWORD = e.target.elements[3].value;
    let PNUMBER = e.target.elements[4].value;

    let json = {
      firstname: FIRSTNAME,
      lastname: LASTNAME,
      email: EMAIL,
      pnumber: PNUMBER,
      password: PASSWORD,
      role: this.user.role,
      id: this.user.id
    };
    console.log(json);
    this.httpClient.post('http://localhost:8086/User/update', json).subscribe(
      (data: any) => {
        localStorage.setItem('user', JSON.stringify(data));
        this.user = data;
      }
    );

  }

}
