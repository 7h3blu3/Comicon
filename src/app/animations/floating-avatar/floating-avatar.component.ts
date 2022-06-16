import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-floating-avatar',
  templateUrl: './floating-avatar.component.html',
  styleUrls: ['./floating-avatar.component.scss']
})
export class FloatingAvatarComponent implements OnInit {
  @Input() imgSrc: string;

  constructor() { }

  ngOnInit(): void {
  }

}
