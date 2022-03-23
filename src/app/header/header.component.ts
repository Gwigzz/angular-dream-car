import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{

  // Title
  title = `Dream Car`;

  getTitle(){
    return this.title;
  }

  constructor() { }


}
