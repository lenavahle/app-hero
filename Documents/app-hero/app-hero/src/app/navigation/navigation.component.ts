import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  scroll(value: string) {
    const element = document.querySelector('#' + value);
    element.scrollIntoView({behavior: 'smooth', block: 'start'});
  }

}
