import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // Title
  title = `Dream Car`;

  // Show Cars
  cars = [
    {
      id: 0,
      brand: 'Ferrari',
      model: 'Fera 387R',
      color: 'red'
    },
    {
      id: 1,
      brand: 'Peugoet',
      model: 'Clio',
      color: 'white'
    },
    {
      id: 2,
      brand: 'Laborghini',
      model: 'Veneno',
      color: 'black'
    },
  ];

  initCar: any;

  searchBar!: FormGroup;

  getTitle() {
    return this.title;
  }


  // Init search bar
  initSearchBar(): void {
    this.searchBar = this.formBuilder.group({
      // Need constraints !!
      carName: [''],
    });
  }

  // Search Form
  onSearchSubmit(): void {
    if (this.searchBar.value.carName === '') {
      this.initCar = {};
      this.initCar.brand = '';
    } else {
      this.initCar = this.cars.find(car => car.brand.toLowerCase().includes(this.searchBar.value.carName.toLowerCase()));
    }
  }

  constructor(
    // Instance de form builder
    private formBuilder: FormBuilder
  ) {


  }

  ngOnInit() : void {
    // Search bar
    // const searchCars = this;

    this.initSearchBar();
  }

}
