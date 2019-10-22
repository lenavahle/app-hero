import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
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
import { FarmingComponent } from './farming/farming.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MapComponent } from './map/map.component';

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
    StartComponent,
    FarmingComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
