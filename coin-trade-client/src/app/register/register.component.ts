import { Component, OnInit } from '@angular/core';


import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  faUserPlus = faUserPlus;
  constructor() { }

  ngOnInit(): void {
  }

}
