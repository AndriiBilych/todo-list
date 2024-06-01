import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { BoardComponent } from './components/board/board.component';

const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'board/:id', component: BoardComponent },
  { path: 'board', component: BoardComponent },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  // {
  //   path: '**',
  //   component: NotFoundComponent
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
