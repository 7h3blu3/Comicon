import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  title = 'Comicon';
  currentSection = "tryThis"
  constructor() { }

  ngOnInit(): void {
  }

  //This is the kind of a solution
  @HostListener('window:scroll', ['$event']) 
    scrollHandler(event) {
      // console.log("event ", event)
      // console.log("Wooo", window.pageYOffset)
      console.debug("Scroll Event", window.pageYOffset );
      // console.debug("Scroll Event");
    

      
      if (window.pageYOffset > 0 && window.pageYOffset < 200){
        console.log("0 ~ 200")
        this.currentSection = "tryThis"
      } else if(window.pageYOffset > 201 && window.pageYOffset < 400){
        console.log("201 ~ 400")
        this.currentSection = "itsCool"
      }

    } 

    //If Im having trouble with making it dynamic
    //https://www.youtube.com/watch?v=mMZZyizeMTw&ab_channel=TheSoftwareTrey
   scrollToElement(element: any): void {
    console.log(element);
    element.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
  }


}
