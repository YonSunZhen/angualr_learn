import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DirectiveComponent } from './directive/directive.component';
import { TestComponent } from './test/test.component';


const mainRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'test', component: TestComponent},
      { path: 'directive', component: DirectiveComponent},
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
