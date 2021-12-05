import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from './guards/auth.guard';
import { ListComponent } from './components/list/list.component';
import { CardComponent } from './components/card/card.component';
import { QrgenComponent } from './components/qrgen/qrgen.component';
import { QrscanComponent } from './components/qrscan/qrscan.component';
import { ConvertComponent } from './components/convert/convert.component';
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component';
import { FooterComponent } from './components/footer/footer.component';
import { CbjComponent } from './cbj/cbj.component';
import { ChatComponent } from './components/chat/chat.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'list', component: ListComponent, canActivate: [AuthGuard] },
  { path: 'card', component: CardComponent, canActivate: [AuthGuard] },
  { path: 'qrgen', component: QrgenComponent, canActivate: [AuthGuard] },
  { path: 'qrscan', component: QrscanComponent, canActivate: [AuthGuard] },
  { path: 'convert', component: ConvertComponent, canActivate: [AuthGuard] },
  { path: 'profile-edit', component: ProfileEditComponent, canActivate: [AuthGuard] },
  { path: 'footer', component: FooterComponent, canActivate: [AuthGuard] },
  { path: 'cbj', component: CbjComponent, canActivate: [AuthGuard] },
  { path: 'chat', component: ChatComponent, canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
