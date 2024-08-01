import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SneakersListComponent } from './app-components-standalone/sneakers-list/sneakers-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: SneakersListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
