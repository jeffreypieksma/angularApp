import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ServersComponent } from './servers/servers.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TestComponent } from './test/test.component';
import { ServerComponent} from './server/server.component';

import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ServersComponent,
    ServerComponent,
    NotFoundComponent,
    TestComponent,
    RecipesComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule
    
  ],
  exports: [
    RouterModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
