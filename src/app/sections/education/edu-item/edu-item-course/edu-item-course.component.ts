import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-edu-item-course',
  templateUrl: './edu-item-course.component.html',
  styleUrls: ['./edu-item-course.component.scss']
})
export class EduItemCourseComponent implements OnInit {
  @Input() courseItem;

  constructor() { }

  ngOnInit() {
  }

}
