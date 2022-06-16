import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Comicon';
  currentSection = 'section1';

  constructor(private viewportScroller: ViewportScroller) {
  }

  // public onClick(elementId: string): void { 
  //   console.log(elementId)
  //   this.viewportScroller.scrollToAnchor(elementId);
  // }

  // scrollToElement($element: any): void {
  //   console.log($element);
  //   $element.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
  // }


  onSectionChange(sectionId) {
    this.currentSection = sectionId;
  }

  // scrollTo(section) {
  //   document.querySelector('#' + section).scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
  // }
}
