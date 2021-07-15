import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-denuncia',
  templateUrl: './denuncia.page.html',
  styleUrls: ['./denuncia.page.scss'],
})
export class DenunciaPage implements OnInit {
   
  imagenes=[
    'assets/picture/Acto.png',
    'assets/picture/Inauguracion.png',
    'assets/picture/Logo.png',
  ]
  constructor() { }

  ngOnInit() {
  }

}
