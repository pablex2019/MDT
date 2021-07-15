import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.page.html',
  styleUrls: ['./panel.page.scss'],
})
export class PanelPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  Noticias(){
    this.router.navigateByUrl('/noticias');
  }
  Solicitudes(){
    this.router.navigateByUrl('/solicitud');
  }
  Denuncias(){
    this.router.navigateByUrl('/denuncia');
  }
  Talleres(){
    this.router.navigateByUrl('/taller');
  }
}
