import { Component, OnInit } from '@angular/core';
import { Button } from 'protractor';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
   equipmentItems: object[] = [
       {name: 'Duct Tape', mass: 0.5},
       {name: 'Space Camera', mass: 20},
       {name: 'Food', mass: 150},
       {name: 'Oxygen Tanks', mass: 400},
       {name: 'AE-35 Unit', mass: 5},
       {name: 'ISS Supplies', mass: 800},
       {name: 'Water', mass: 250},
       {name: 'Satellite', mass: 1200},
       {name: 'R2 Unit', mass: 32}
   ];
   cargoHold: object[] = [];
   cargoMass: number = 0;
   maximumAllowedMass: number = 2000;
   maxItems: number = 10;
   active: boolean = true;
   cargoHoldLow: boolean = false;
   remainingMass: number = 0;
   holdIndex: number = 0;
   itemWithIndex: object[] = [];
  
   constructor() { }
   ngOnInit() { }

   // Code your addItem function here:
   addItem(item: object) {

     this.cargoHold.push(item);
     this.cargoMass += item["mass"];
     this.remainingMass = this.maximumAllowedMass - this.cargoMass;
     this.holdIndex += 1;
     
     this.itemWithIndex.push( {obj: item, index: this.holdIndex} )

     if (this.remainingMass > 200) return false;
     if (this.remainingMass <= 200) return true;

   }

   emptyHold() {
     this.cargoHold = [];
     this.cargoHoldLow = false;
     this.cargoMass = 0;
     this.holdIndex = 0;
   }

   haveTwoInHold(item: object) {
     let result = this.cargoHold.filter(obj => obj === item);
     let length = result.length;
     if (length === 2) return true;
     return false; 
   }

   removeItem(item: object) {
     let result = this.itemWithIndex.filter(stuff => stuff !== item);
     this.itemWithIndex = result;
   }
}