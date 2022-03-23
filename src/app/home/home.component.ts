import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    // Instance Router
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onLogin() : void {
    // Renvoie vers la page dashboard grace à la méthode "navigate"
    // this.router.navigateByUrl('/admin/dashboard'); // Autre façon de naviguer, "sans le tableau"
    
    this.router.navigate(['/admin/dashboard']);
  }
}
