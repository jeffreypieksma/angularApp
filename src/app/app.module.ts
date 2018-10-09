import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SidenavComponent } from './sidenav/sidenav.component';
//Articles CRUD
import { ArticlesComponent } from './articles/articles.component';
import { ArticleService } from './articles/articles.service';
import { ArticleReadComponent } from './articles/article-read/article-read.component';
import { ArticleUpdateComponent } from './articles/article-update/article-update.component';
import { ArticleDeleteComponent } from './articles/article-delete/article-delete.component';
import { ArticleCreateComponent } from './articles/article-create/article-create.component';

//auth
import { LoginComponent } from './auth/login/login.component';
import { AdminComponent } from './auth/admin/admin.component';

import { AuthGuard } from './auth/auth.guard';
import { ProfileComponent } from './auth/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotFoundComponent,
    SidenavComponent,
    ArticlesComponent,
    ArticleReadComponent,
    ArticleUpdateComponent,
    ArticleDeleteComponent,
    ArticleCreateComponent,
    LoginComponent,
    AdminComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule
  ],
  exports: [
    RouterModule
  ],
  providers: [ArticleService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
