import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-about-me-component',
  templateUrl: './about-me-component.component.html',
  styleUrls: ['./about-me-component.component.css']
})
export class AboutMeComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
