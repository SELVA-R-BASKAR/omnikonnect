import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { CitiesComponent } from './components/cities/cities.component';
import { CityDetailComponent } from './components/city-detail/city-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    CitiesComponent,
    CityDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
