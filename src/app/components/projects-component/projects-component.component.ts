import { Component, OnInit } from '@angular/core';
import { project } from 'src/app/models/projects';
import { ProjectsServiceService } from 'src/app/services/projects-service.service';

@Component({
  selector: 'app-projects-component',
  templateUrl: './projects-component.component.html',
  styleUrls: ['./projects-component.component.css'],
  providers: [ProjectsServiceService]
})
export class ProjectsComponentComponent implements OnInit {
  public projects : project[];
  constructor(private projectServiceService: ProjectsServiceService) {
    this.projects = this.projectServiceService.getProject();
   }

  ngOnInit(): void {
  }

}
