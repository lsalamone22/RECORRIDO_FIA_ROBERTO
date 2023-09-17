import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuCarreraPageRoutingModule } from './menu-carrera-routing.module';

import { MenuCarreraPage } from './menu-carrera.page';

import { NavbarModule } from '../../navbar/navbar.module'; // Ajusta la ruta según tu proyecto

@NgModule({
  imports: [
    CommonModule,
    NavbarModule,
    FormsModule,
    IonicModule,
    MenuCarreraPageRoutingModule
  ],
  declarations: [MenuCarreraPage]
})
export class MenuCarreraPageModule {}
