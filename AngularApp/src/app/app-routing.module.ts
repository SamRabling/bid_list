import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtWorksComponent } from './art-works/art-works.component';
import { HomeComponent } from './home/home.component';
import { ShowPieceComponent } from './show-piece/show-piece.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user', component: UserDashboardComponent },
  { path: 'user/wishlist/:id', component: WishlistComponent },
  { path: 'artworks', component: ArtWorksComponent },
  { path: 'artworks/:id', component: ShowPieceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
