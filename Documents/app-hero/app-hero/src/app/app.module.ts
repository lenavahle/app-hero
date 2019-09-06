import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HistoryComponent } from './history/history.component';
import { MainComponent } from './main/main.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { ChickensComponent } from './chickens/chickens.component';
import { PigsComponent } from './pigs/pigs.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { StartComponent } from './start/start.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HistoryComponent,
    MainComponent,
    ProductsComponent,
    ContactComponent,
    ChickensComponent,
    PigsComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
