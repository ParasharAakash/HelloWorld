import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AakashComponent } from "./aakash/aakash.component";
import { TestComponent } from "./test/test.component";
const routes: Routes = [
  {path : 'test', component:TestComponent},
  {path : 'aakash', component:AakashComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [TestComponent,AakashComponent]








 
 