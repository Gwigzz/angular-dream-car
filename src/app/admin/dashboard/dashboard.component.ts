
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import { ActivatedRoute } from '@angular/router'; // off Activate route

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  // Initialise un group pour les champs du formulaire
  vehiculeForm!: FormGroup;

  constructor(
    // private activatedRoute: ActivatedRoute 

    // Instance de form builder
    private formBuilder: FormBuilder
  ) { }

  // Build form vehicule
  initForm(): void {
    this.vehiculeForm = this.formBuilder.group({
      seller: ['', Validators.required, Validators.minLength(3)],
      brand: '',
      model: '',
      description: '',
      price: 0
    });
  }

  // Form Submit
  onSubmitForm(): void {
    console.log(this.vehiculeForm.value);
  }

  // List card from URL
  ngOnInit(): void {
    // console.log(this.activatedRoute.snapshot.paramMap.get('id'));

    // Get car id from URL
    // const carId = this.activatedRoute.snapshot.paramMap.get('id'); // off Activate route

    // Search id in table + convesion "string" to "int"
    // this.initCar = this.cars.find(car => car.id === +<string>carId); // off Activate route

    this.initForm();

  }

}
