import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: "/recipes", pathMatch: "full" },
//   { path: 'shopping-list', component: ShoppingListComponent },
//   { path: 'auth', component: AuthComponentComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

