import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-spidey-float',
  templateUrl: './spidey-float.component.html',
  styleUrls: ['./spidey-float.component.scss']
})
export class SpideyFloatComponent implements OnInit {
  @Input() imgSrc: string;
  constructor() { }

  ngOnInit(): void {
  }

}
