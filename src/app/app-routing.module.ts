import { ListpageComponent } from './modules/listpage/listpage.component';
import { HomeComponent } from './modules/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: 'home' },
  { path: 'listpage', component: ListpageComponent },
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
