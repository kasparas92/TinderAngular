import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { UserListComponent } from './Components/user-list/user-list.component';
import { ListComponent } from './Components/list/list.component';
import { MessagesComponent } from './Components/messages/messages.component';
import { RegisterComponent } from './Components/register/register.component';
import { HomeComponent } from './Components/home/home.component';
import { UserCardComponent } from './Components/user-card/user-card.component';
import { JwtInterceptor } from './Interceptor/jwt.interceptor';
import { UserDetailsComponent } from './Components/user-details/user-details.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgxGalleryModule } from 'ngx-gallery-9';
import { UserEditComponent } from './Components/user-edit/user-edit.component';
import { PhotoEditorComponent } from './Components/photo-editor/photo-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    UserListComponent,
    ListComponent,
    MessagesComponent,
    RegisterComponent,
    HomeComponent,
    UserCardComponent,
    UserDetailsComponent,
    UserEditComponent,
    PhotoEditorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot({ positionClass: 'toast-bottom-left' }),
    TabsModule.forRoot(),
    NgxGalleryModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
