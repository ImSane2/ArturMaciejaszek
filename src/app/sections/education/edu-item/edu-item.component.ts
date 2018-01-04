import { Education } from './../edu.model';
import { Component, OnInit, Input } from '@angular/core';
import { trigger, transition, query, stagger, animate, style, keyframes } from '@angular/animations';

@Component({
  selector: 'app-edu-item',
  templateUrl: './edu-item.component.html',
  styleUrls: ['./edu-item.component.scss'],
  animations: [
    trigger(
      'listIn',
      [
        transition(
        ':enter', [
          style({transform: 'scale(0)', opacity: 0}),
          animate('800ms', style({transform: 'scale(1)', 'opacity': 1}))
        ]
      ),
        transition(
        ':leave', [
          style({transform: 'scale(1)', 'opacity': 1}),
          animate('300ms', style({transform: 'scale(0)', 'opacity': 0}))
        ]
      )]
    )
  ]
})
export class EduItemComponent implements OnInit {
  @Input() eduItem: Education;
  itemToggle = false;

  constructor() { }

  ngOnInit() {
  }

}
