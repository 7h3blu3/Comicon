import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-iron-man-float',
  templateUrl: './iron-man-float.component.html',
  styleUrls: ['./iron-man-float.component.scss']
})
export class IronManFloatComponent implements OnInit {
  @Input() imgSrc: string;
  constructor() { }

  ngOnInit(): void {
  }

}
