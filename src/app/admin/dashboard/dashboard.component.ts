
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

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

  // Form Submit
  onSubmitForm(form: NgForm): void { 
    console.log(form.value);
  }

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  // List card from URL
  ngOnInit(): void {
    // console.log(this.activatedRoute.snapshot.paramMap.get('id'));

    // Get car id from URL
    const carId = this.activatedRoute.snapshot.paramMap.get('id');

    // Search id in table + convesion "string" to "int"
    this.initCar = this.cars.find(car => car.id === +<string>carId);

  }

}
