import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LockerModule, Locker, DRIVERS } from 'angular-safeguard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowPieceComponent } from './show-piece/show-piece.component';
import { HomeComponent } from './home/home.component';
import { ArtWorksComponent } from './art-works/art-works.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowPieceComponent,
    HomeComponent,
    ArtWorksComponent,
    WishlistComponent,
    UserDashboardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    LockerModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
