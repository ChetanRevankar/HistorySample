import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HistoryComponent } from './history/history.component';
import { ProductsComponent } from './products/products.component';
import {DemoMaterialModule} from './material.module';
import { HistoryService} from './history.service';

@NgModule({
  declarations: [
    AppComponent,
    HistoryComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DemoMaterialModule
  ],
  providers: [
    // no need to place any providers due to the `providedIn` flag...
  HistoryService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/