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
import { ServersComponent } from './servers/servers.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServerComponent} from './server/server.component';

import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleService } from './articles/articles.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ServersComponent,
    ServerComponent,
    NotFoundComponent,
    RecipesComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    SidenavComponent,
    ArticlesComponent
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
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
