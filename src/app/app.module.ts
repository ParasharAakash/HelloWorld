import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
//
//

import { AppRoutingModule,routingComponent} from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { AakashComponent } from './aakash/aakash.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    TestComponent,
    AakashComponent
    ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }





