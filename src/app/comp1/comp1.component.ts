import { DomElementSchemaRegistry } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { coinindex } from '../models/currency.models';
import { CurrencyService } from '../currency.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  @Input() i;
  index: any;
  coinindex:coinindex;
 
  userclick;
  
  constructor(private currencyService : CurrencyService) { 
    this.coinindex={
    name:'',
    id:'',
    img: '',
    usd:null,
    ewr:null,
    ils:null,
  }
  }
  ngOnInit(): void {
      }

      indexGet(id:string) : void{
        if (!this.userclick){
          this.userclick=true;
         this.currencyService.get(id).subscribe((index:any) =>{console.log(index)
         this.coinindex.name= index.name;
         this.coinindex.id= index.id;
         this.coinindex.img= index.image.small;
         this.coinindex.usd= index.market_data.current_price.usd;
         this.coinindex.ewr= index.market_data.current_price.eur;
         this.coinindex.ils= index.market_data.current_price.ils;
        })
        
        }
        else{
        this.userclick=false;
        }
      }
}
