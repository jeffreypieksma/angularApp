import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ServerComponent} from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';

//Articles CRUD
import { ArticlesComponent } from './articles/articles.component';
import { ArticleReadComponent } from './articles/article-read/article-read.component';
import { ArticleUpdateComponent } from './articles/article-update/article-update.component';
import { ArticleDeleteComponent } from './articles/article-delete/article-delete.component';
import { ArticleCreateComponent } from './articles/article-create/article-create.component';
//AUTH
import { LoginComponent } from './auth/login/login.component';
import { AdminComponent } from './auth/admin/admin.component';
import { AuthGuard } from './auth/auth.guard';

const appRoutes: Routes = [
  { path: '', redirectTo: '/articles', pathMatch: 'full'},
  { path: 'articles',      component: ArticlesComponent},
  { path: 'article/read/:id',      component: ArticleReadComponent},
  { path: 'article/create',      component: ArticleCreateComponent},
  { path: 'article/update/:id',      component: ArticleUpdateComponent},
  { path: 'articles/delete/:id',      component: ArticleDeleteComponent},
  { path: 'servers', component: ServersComponent},
  { path: 'server',      component: ServerComponent},
  { path: 'shopping-list',      component: ShoppingListComponent},
  { path: 'recipes',      component: RecipesComponent},
  { path: 'login',      component: LoginComponent},
  { path: 'admin',      component: AdminComponent, canActivate: [AuthGuard]},
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
