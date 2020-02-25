import { Component, OnInit } from '@angular/core';
import { InterestService } from '../services/interest.service';

@Component({
  selector: 'app-savings',
  templateUrl: './savings.component.html',
  styleUrls: ['./savings.component.css']
})
export class SavingsComponent implements OnInit {

  constructor(private interestservice: InterestService) {}

  ngOnInit(): void {
  }

  Total: number = 0;
  years: number;

  calculateinterest(): void {
      this.Total = this.interestservice.calculateinterest(this.years)
  }
}
