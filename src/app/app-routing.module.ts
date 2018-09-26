import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ServerComponent} from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TestComponent } from './test/test.component';

const appRoutes: Routes = [
  { path: 'servers', component: ServersComponent},
  { path: 'server',      component: ServerComponent},
  { path: 'test',      component: TestComponent},
  { path: '',
    redirectTo: '',
    pathMatch: 'full',
    component: AppComponent
  },
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
