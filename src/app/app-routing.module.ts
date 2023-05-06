import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MemberslistComponent } from './components/memberslist/memberslist.component';
import { PetitionslistComponent } from './components/petitionslist/petitionslist.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MembershipComponent } from './components/membership/membership.component';
import { PetitionComponent } from './components/petition/petition.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'add-petition', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'add-member', component: HomeComponent },
  { path: 'members-list', component: MemberslistComponent },
  { path: 'petitions-list', component: PetitionslistComponent },
  { path: 'admin-dashboard', component: DashboardComponent },
  { path: 'update-petition/:id', component: PetitionComponent },
  { path: 'update-member/:id', component: MembershipComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
