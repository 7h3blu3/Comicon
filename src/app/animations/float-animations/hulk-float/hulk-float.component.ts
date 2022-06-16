import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hulk-float',
  templateUrl: './hulk-float.component.html',
  styleUrls: ['./hulk-float.component.scss']
})
export class HulkFloatComponent implements OnInit {
  @Input() imgSrc: string;
  constructor() { }

  ngOnInit(): void {
  }

}
