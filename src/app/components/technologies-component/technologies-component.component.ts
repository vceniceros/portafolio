import { Component, OnInit } from '@angular/core';
import { technologie } from 'src/app/models/technologie';
import { TechnologiesServiceService } from 'src/app/services/technologies-service.service';

@Component({
  selector: 'app-technologies-component',
  templateUrl: './technologies-component.component.html',
  styleUrls: ['./technologies-component.component.css'],
  providers:[TechnologiesServiceService]
})
export class TechnologiesComponentComponent implements OnInit {
  public Technologies : technologie[];
  constructor(private TechnoliesServiceService: TechnologiesServiceService) {
    this.Technologies = this.TechnoliesServiceService.getTechnologie();
   }

  ngOnInit(): void {
  }

}
