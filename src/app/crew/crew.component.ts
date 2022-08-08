import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  inCrew: boolean = false;
  crew: object[] = [];
  showPhoto: boolean = false;
  photoLink: string = "";

  candidates: object[] = [
    {name: "Sally Ride", photo: 'https://handlers.education.launchcode.org/static/images/sally-ride.jpg', birth: "May 26, 1951", spaceMission: "STS-7, STS-41-G"},
    {name: "Mae Jemison", photo: 'https://handlers.education.launchcode.org/static/images/mae-jemison.jpg', birth: "October 17, 1956", spaceMission: "STS-47"},
    {name: "Ellen Ochoa", photo: 'https://handlers.education.launchcode.org/static/images/ellen-ochoa.jpg', birth: "May 10, 1958 ", spaceMission: "STS-96, STS-110, STS-56, STS-66"},
    {name: "Frederick Gregory", photo: 'https://handlers.education.launchcode.org/static/images/frederick-gregory.jpg', birth: "January 7, 1941", spaceMission: "STS-33, STS-51-B, STS-44"},
    {name: "Guion Bluford", photo: 'https://handlers.education.launchcode.org/static/images/guion-bluford.jpg', birth: "November 22, 1942", spaceMission: "STS-8, STS-61-A, STS-39, STS-53"},
    {name: "Kjell Lindgren", photo: 'https://handlers.education.launchcode.org/static/images/kjell-lindgren.jpg', birth: "January 23, 1973", spaceMission: "SpaceX Crew-4, Expedition 44, Expedition 45, Soyuz TMA-17M"},
    {name: "Jeanette Epps", photo: 'https://handlers.education.launchcode.org/static/images/jeanette-epps.jpg', birth: "November 3, 1970", spaceMission: "Boeing Starliner-1"}
  ];

  constructor() { }

  ngOnInit() { }

  // Code the 'addCrewMember' function here:
  addCrewMember(candidate: object) {
    let missingCrew = true;
    if (this.crew.length === 3) missingCrew = false; 

    if (missingCrew && !this.crew.includes(candidate)) {
        this.crew.push(candidate);
    } else {
      this.removeCrew(candidate);
    }
    
  }

  removeCrew(crew: object) {
    let result = this.crew.filter(person => person !== crew);
    this.crew = result;
  }
}