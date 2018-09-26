import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ServerComponent} from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TestComponent } from './test/test.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full'},
  { path: 'servers', component: ServersComponent},
  { path: 'server',      component: ServerComponent},
  { path: 'shopping-list',      component: ShoppingListComponent},
  { path: 'recipes',      component: RecipesComponent},
  { path: 'test',      component: TestComponent},
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
