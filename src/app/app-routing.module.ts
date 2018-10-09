import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';

//Articles CRUD
import { ArticlesComponent } from './articles/articles.component';
import { ArticleReadComponent } from './articles/article-read/article-read.component';
import { ArticleUpdateComponent } from './articles/article-update/article-update.component';
import { ArticleDeleteComponent } from './articles/article-delete/article-delete.component';
import { ArticleCreateComponent } from './articles/article-create/article-create.component';
//auth
import { LoginComponent } from './auth/login/login.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { AuthGuard } from './auth/auth.guard';

const appRoutes: Routes = [
  { path: '', redirectTo: '/articles', pathMatch: 'full'},
  { path: 'articles',      component: ArticlesComponent},
  { path: 'article/read/:id',      component: ArticleReadComponent},
  { path: 'article/create',      component: ArticleCreateComponent, canActivate: [AuthGuard]},
  { path: 'article/update/:id',      component: ArticleUpdateComponent, canActivate: [AuthGuard]},
  { path: 'articles/delete/:id',      component: ArticleDeleteComponent, canActivate: [AuthGuard]},
  { path: 'login',      component: LoginComponent},
  { path: 'profile',      component: ProfileComponent, canActivate: [AuthGuard]},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})

export class AppRoutingModule { }
