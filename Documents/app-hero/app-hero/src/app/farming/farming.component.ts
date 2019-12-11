import { Component, OnInit } from '@angular/core';
import {texte} from 'src/texte';

@Component({
  selector: 'app-farming',
  templateUrl: './farming.component.html',
  styleUrls: ['./farming.component.css']
})
export class FarmingComponent implements OnInit {
  public imagesUrl;

  public text = texte;

  constructor() { }

  ngOnInit() {
    this.imagesUrl = [
      '../assets/images/IMG_4575.JPG',
      '../assets/images/IMG_4565.JPG',
      '../assets/images/IMG_4573.JPG',
      '../assets/images/IMG_4571.JPG',
      '../assets/images/IMG_4480.JPG',
      '../assets/images/IMG_4459.JPG',
      ];
  }

}
