import { UsersService } from './user/users.service';
import { RouterModule } from '@angular/router';
import { UserInfoComponent } from './user/user-info/user-info.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule, NgbModalModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BreadcrumpsComponent } from './breadcrumps/breadcrumps.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './access/login/login.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { AuthService } from './access/auth.service/auth.service';
import { AuthGuard } from './access/auth.guard';
import { CruModalComponent } from './modals/cru-modal/cru-modal.component';
import { DeleteModalComponent } from './modals/delete-modal/delete-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BreadcrumpsComponent,
    LoginComponent,
    UserInfoComponent,
    UserListComponent,
    CruModalComponent,
    DeleteModalComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    NgbModule,
    RouterModule.forRoot(
      [
        { path: 'login', component: LoginComponent},
        { path: '', component: UserListComponent}
        { path: 'userlist',
          canActivate: [AuthGuard],
          component: UserListComponent
        }
      ]
    ),
    NgbModalModule
  ],
  providers: [
    AuthService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
