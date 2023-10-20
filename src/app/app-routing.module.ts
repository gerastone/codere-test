import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './application/pages/home/home.page';
import { ShowDetailPage } from './application/pages/show-detail/show-detail.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage
  },
  {
    path: 'detail/:id',
    component: ShowDetailPage
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
