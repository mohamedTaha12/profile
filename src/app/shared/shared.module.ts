import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { InformationComponent } from './information/information.component';



@NgModule({
  declarations: [
    NavbarComponent,
    InformationComponent
  ],
  imports: [
    CommonModule
  ], exports: [
    NavbarComponent,
    InformationComponent
  ]
})
export class SharedModule { }
