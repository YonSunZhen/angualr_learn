import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then(m => m.MainModule)
  },
  {
    path: '', redirectTo: 'main', pathMatch: 'full' // 根据匹配的先后顺序 通用路由必须放在最后
  },
  {
    path: '**', redirectTo: 'main' // 根据匹配的先后顺序 通用路由必须放在最后
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
