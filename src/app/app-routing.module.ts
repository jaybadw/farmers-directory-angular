import { HomeComponent } from './modules/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { FarmersDetailsComponent } from './modules/farmers-details/farmers-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: 'home' },
  { path: 'farmer/:id', component: FarmersDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor(router: Router) {
    router.events.subscribe(() => {
      window.scrollTo(0, 0);
    });
  }
}
