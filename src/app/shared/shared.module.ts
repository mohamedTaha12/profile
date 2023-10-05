import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { InformationComponent } from './information/information.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    NavbarComponent,
    InformationComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ], exports: [
    NavbarComponent,
    InformationComponent,
    FooterComponent
  ]
})
export class SharedModule { }
