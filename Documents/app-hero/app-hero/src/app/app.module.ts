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
import {MatCardModule} from '@angular/material/card';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
// For MDB Angular Free
import { CarouselModule, WavesModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SliderModule } from 'angular-image-slider';
import { ChartComponent } from './chart/chart.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { RouterModule, Routes } from '@angular/router';
import {GalleriaModule} from 'primeng/galleria';
import { DecodingPipe } from 'src/decoding-pipe';
import { DeviceDetectorModule } from 'ngx-device-detector';
const appRoutes: Routes = [
  { path: 'impressum', component: ImpressumComponent },
  // { path: '**', component: MainComponent },
  { path: '',      component: MainComponent }];

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
    MapComponent,
    ChartComponent,
    ImpressumComponent,
    DecodingPipe,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    WavesModule,
    MatCardModule,
    BrowserModule,
    BrowserAnimationsModule,
    SliderModule,
    GalleriaModule,
    AccordionModule,
    DeviceDetectorModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
