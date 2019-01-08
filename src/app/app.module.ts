import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AgmCoreModule, GoogleMapsAPIWrapper, MarkerManager} from '@agm/core';
import {AgmJsMarkerClustererModule, ClusterManager} from '@agm/js-marker-clusterer';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyC2SNizR8UP81dz7ArgHqJTFbcy1ZsMvfw'}),
    AgmJsMarkerClustererModule,
    AppRoutingModule
  ],
  providers: [GoogleMapsAPIWrapper],
  bootstrap: [AppComponent]
})
export class AppModule { }
