import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
   experiments: string[] = ['Moon soil sample', 'Plant growth in orbit', 'Human bone density changes', 'Water droplet podcast for grades K-5', 'Satellite launch'];
   experimentList: string[] = [];

   constructor() { }
   ngOnInit() { }

   addExperiment(test: string) {
     let testInList = this.experimentList.includes(test);

     if (!testInList && this.experimentList.length < 4) {
       this.experimentList.push(test);
     } else {
       this.removeTest(test);
     }
   }

   removeTest(test: string) {
    let newList = this.experimentList.filter(item => item !== test);
    this.experimentList = newList; 
   }

   clearList() {
      this.experimentList = [];
   }
}