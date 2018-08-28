import { Component, OnInit } from '@angular/core';
import { City } from '../../city';
import { Cities } from '../../cities';
@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  selectedCity: City;
  cities = Cities;
  city: City = {
    code: 600011,
    name: 'Chennai'
  };
  constructor() { }

  ngOnInit() {
  }

  onSelect(city:City): void { 
 this.selectedCity = city;
  }

}
