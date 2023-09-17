import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-carrera',
  templateUrl: './menu-carrera.page.html',
  styleUrls: ['./menu-carrera.page.scss'],
})
export class MenuCarreraPage implements OnInit {

  nombres: string[] = ["Industrial", "Civil", "Sistemas",
  "Aeronautica", "Arquitectura", "Oficinas Adm."];

  constructor() { }

  ngOnInit() {

    const container = document.getElementById('botones-container');

  if (container) {
    this.nombres.forEach((nombre, index) => {
      const boton = document.createElement('ion-button');
      boton.id = `boton-${index}`;
      boton.textContent = nombre;
      boton.classList.add('boton-carrera');
      container.appendChild(boton);
    });
  } else {
    console.error('El elemento container no se encontró en el DOM.');
  }

  }

}
