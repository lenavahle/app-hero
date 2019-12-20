import { Component, OnInit } from '@angular/core';
import { texte } from 'src/assets/texte/texte';

@Component({
  selector: 'app-chickens',
  templateUrl: './chickens.component.html',
  styleUrls: ['./chickens.component.css']
})
export class ChickensComponent implements OnInit {

  constructor() { }

  public text = texte;

  ngOnInit() {
  }

}
