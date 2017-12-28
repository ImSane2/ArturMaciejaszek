import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-social-item',
  templateUrl: './social-item.component.html',
  styleUrls: ['./social-item.component.scss']
})
export class SocialItemComponent implements OnInit {
  @Input() socialItem;

  constructor() { }

  ngOnInit() {
  }

}
