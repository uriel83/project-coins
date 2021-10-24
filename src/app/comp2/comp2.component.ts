import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../currency.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
  currency: any;
  constructor(private currencyService : CurrencyService) { }

  ngOnInit(): void {
   this.currencyService.get('').subscribe((currency:any) =>{this.currency=currency})
  }
  

}
