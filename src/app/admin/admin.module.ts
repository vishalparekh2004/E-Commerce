import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '../about/about.component';
import { ContectComponent } from '../contect/contect.component';

@NgModule({
  declarations: [
    AboutComponent,
    ContectComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
