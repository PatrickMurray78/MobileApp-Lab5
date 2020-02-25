import { Component, OnInit } from '@angular/core';
import { InterestService } from '../Services/interest.service';

@Component({
  selector: 'app-mortgage',
  templateUrl: './mortgage.component.html',
  styleUrls: ['./mortgage.component.css']
})
export class MortgageComponent implements OnInit {

  constructor(private interestservice: InterestService) {}

  ngOnInit(): void {
  }

  Total: number = 0;
  years: number;

  calculateinterest(): void {
      this.Total = this.interestservice.calculateinterest(this.years)
  }
}
