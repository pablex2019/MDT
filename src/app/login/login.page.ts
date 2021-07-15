import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private login = [
    {
      id: '1',
      title: 'Municipalidad de San Miguel de Tucumán',
      imageURL: 'https://twitter.com/MuniSMTucuman/photo', 
      comments: [],
    }
  ]
  constructor(private router: Router) { 
     
  }
  ngOnInit() {
  }
  Login(){
    this.router.navigateByUrl('/panel')
  }
  CrearCuenta(){
    this.router.navigateByUrl('/crearcuenta')
  }
}
