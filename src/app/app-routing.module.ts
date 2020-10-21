import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from './AuthGuards/authentication.guard';
import { HomeComponent } from './Components/home/home.component';
import { ListComponent } from './Components/list/list.component';
import { MessagesComponent } from './Components/messages/messages.component';
import { UserListComponent } from './Components/user-list/user-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    canActivate: [AuthenticationGuard],
    runGuardsAndResolvers: 'always',
    children: [
      { path: 'user', component: UserListComponent },
      { path: 'messages', component: MessagesComponent },
      { path: 'lists', component: ListComponent },
    ],
  },

  { path: '**', component: MessagesComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
