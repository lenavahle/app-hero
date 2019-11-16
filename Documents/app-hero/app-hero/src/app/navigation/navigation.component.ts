import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { texte } from 'src/texte';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})


export class NavigationComponent implements OnInit {
  public imagesUrl;

  public text = texte;
  
  hover = false;
 
  constructor() { }

  ngOnInit() {
    this.imagesUrl = [
      '../assets/images/IMG_4575.JPG',
      '../assets/images/IMG_4565.JPG',
      '../assets/images/IMG_4573.JPG',
      '../assets/images/IMG_4571.JPG',
      '../assets/images/IMG_4480.JPG',
      '../assets/images/IMG_4459.JPG',
    ]
    console.log(event)

  }

  scroll(value: string) {
    const element = document.querySelector('#' + value);
    element.scrollIntoView({behavior: 'smooth', block: 'start'});
  }

  public test() {
    console.log('st')
  }

}
