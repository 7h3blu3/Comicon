import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentSection:string = 'Comicon';
  hulkDialogBoolean:boolean = true;

  
  constructor() { }

  ngOnInit(): void {
  }

 //This is the kind of a solution
 @HostListener('window:scroll', ['$event']) 
 scrollHandler(event) {
   // console.log("event ", event)
   // console.log("Wooo", window.pageYOffset)
  //  console.debug("Scroll Event", window.pageYOffset );
  console.log("event ", event)
  console.log("window.pageYOffset ", window.pageYOffset)
   console.log(this.hulkDialogBoolean)
   if (window.pageYOffset > 0 && window.pageYOffset < 287){
     console.log("0 ~ 287")
     this.currentSection = "Comicon"
   } else if(window.pageYOffset > 287 && window.pageYOffset < 1927){
     console.log("287 ~ 1927")
     this.currentSection = "Gallery"
   } else if(window.pageYOffset > 1927 && window.pageYOffset < 3047){
    console.log("1927 ~ 3047")
    this.currentSection = "About"
    // this.hulkDialogBoolean = false;

   } else if(window.pageYOffset > 3047 && window.pageYOffset < 5733){
    console.log("3047 ~ 5733")
    this.currentSection = "WooshAnimations"
    // this.hulkDialogBoolean = false;
   } else if (window.pageYOffset > 5733 && window.pageYOffset < 6476) {
    console.log("window.pageYOffset == 6476")

  // this.hulkDialogBoolean = false;
    
   }
   
   else if (window.pageYOffset > 6525 && window.pageYOffset < 7428) {
    console.log("5733 ~ 7428")
    this.hulkDialogBoolean = true;
   } 

 } 

  //If Im having trouble with making it dynamic
  //https://www.youtube.com/watch?v=mMZZyizeMTw&ab_channel=TheSoftwareTrey
  scrollToElement(element: any): void {
  console.log("element ", element)
  element.scrollIntoView({behavior: "smooth", block: "start", inline: "center"});
  if(element.id == "mustWork") this.hulkDialogBoolean = true;
  }

  showMe(value: boolean) {
    console.log("value parent ", value)
  }
}
