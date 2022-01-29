import { Component, OnInit } from '@angular/core';

import { faCoins } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  faCoins = faCoins;
  constructor() { }

  ngOnInit(): void {
  }

}
