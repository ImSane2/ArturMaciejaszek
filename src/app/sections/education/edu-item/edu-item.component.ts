import { Education } from './../edu.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-edu-item',
  templateUrl: './edu-item.component.html',
  styleUrls: ['./edu-item.component.scss']
})
export class EduItemComponent implements OnInit {
  @Input() eduItem: Education;

  constructor() { }

  ngOnInit() {
  }

}
