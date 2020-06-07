import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiscComponent } from './misc/misc.component';
import { DirectiveComponent } from './directive/directive.component';
import { MainComponent } from './main/main.component';
import { MainRoutingModule } from './main-routing.module';
import { DirectiveModule } from '../@directive/directive.module';
import { EchartsComponent } from './echarts/echarts.component';



@NgModule({
  declarations: [
    MiscComponent,
    DirectiveComponent,
    MainComponent,
    EchartsComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    DirectiveModule
  ]
})
export class MainModule { }
