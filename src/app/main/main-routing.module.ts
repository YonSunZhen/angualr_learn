import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DirectiveComponent } from './directive/directive.component';
import { MiscComponent } from './misc/misc.component';
import { EchartsComponent } from './echarts/echarts.component';


const mainRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'test', component: MiscComponent},
      { path: 'directive', component: DirectiveComponent},
      { path: 'echarts', component: EchartsComponent},
      { path: '', redirectTo: 'test', pathMatch: 'full'}, // 根据匹配的先后顺序 通用路由必须放在最后
      { path: '**', redirectTo: 'test'}, // 根据匹配的先后顺序 通用路由必须放在最后
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(mainRoutes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
