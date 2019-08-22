import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'categories', loadChildren: './pages/categories/categories.module#CategoriesModule'},
  {path: 'entries', loadChildren: './pages/entries/entries.module#EntriesModule'},
  {path: 'dashboard', loadChildren: './pages/dashboard/dashboard.module#DashBoardModule'},

  {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
