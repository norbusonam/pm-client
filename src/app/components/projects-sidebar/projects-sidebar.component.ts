import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-sidebar',
  templateUrl: './projects-sidebar.component.html',
  styleUrls: ['./projects-sidebar.component.scss']
})
export class ProjectsSidebarComponent implements OnInit {

  myPinnedProjects = [
    "Monday Hackathon",
    "tapple-v1-server",
    "tapple-v1-client",
  ];
  myProjects = [
    "Fall 2020",
    "Monday Hackathon",
  ];
  sharedProjects = [
    "tapple-v1-client",
    "tapple-v1-server",
    "tapple-v1-intra",
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
