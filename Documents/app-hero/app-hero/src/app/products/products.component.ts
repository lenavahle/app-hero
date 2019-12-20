import { Component, OnInit } from '@angular/core';
import {texte} from 'src/assets/texte/texte';
import {GalleriaModule} from 'primeng/galleria';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  images: any[];

  constructor() { }

  hover1 = false;
  hover2 = false;
  hover3 = false;

  public text = texte;

  ngOnInit() {

    this.images = [];
    this.images.push({source:'/assets/images/IMG_4459.JPG', style:"width: 500px", alt:'Description for Image 1', title:'Title 1'});
    this.images.push({source:'/assets/images/IMG_4575.JPG', alt:'Description for Image 1', title:'Title 1'});
    this.images.push({source:'/assets/images/IMG_4565.JPG', alt:'Description for Image 1', title:'Title 1'});
    this.images.push({source:'/assets/images/IMG_4573.JPG', alt:'Description for Image 1', title:'Title 1'});
    this.images.push({source:'/assets/images/IMG_4571.JPG', alt:'Description for Image 1', title:'Title 1'});
    this.images.push({source:'/assets/images/IMG_4480.JPG', alt:'Description for Image 1', title:'Title 1'});
    this.images.push({source:'/assets/images/IMG_4631.JPG', alt:'Description for Image 1', title:'Title 1'});
    this.images.push({source:'/assets/images/huette.jpg', alt:'Description for Image 1', title:'Title 1'});
    this.images.push({source:'/assets/images/house_logo.jpg', alt:'Description for Image 1', title:'Title 1'});
    this.images.push({source:'/assets/images/field2.jog', alt:'Description for Image 1', title:'Title 1'});
  }

}
