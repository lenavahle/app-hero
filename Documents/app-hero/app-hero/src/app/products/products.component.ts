import { Component, OnInit } from '@angular/core';
import {texte} from 'src/texte';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  hover1 = false;
  hover2 = false;
  hover3 = false;

  public text = texte;

  ngOnInit() {
  }

}
