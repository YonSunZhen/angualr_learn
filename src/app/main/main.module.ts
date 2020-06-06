import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import { DirectiveComponent } from './directive/directive.component';
import { MainComponent } from './main/main.component';
import { MainRoutingModule } from './main-routing.module';
import { DirectiveModule } from '../@directive/directive.module';



@NgModule({
  declarations: [
    TestComponent,
    DirectiveComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    DirectiveModule
  ]
})
export class MainModule { }
