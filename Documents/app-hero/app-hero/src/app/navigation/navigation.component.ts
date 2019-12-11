import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { texte } from 'src/texte';
import { tap, map } from 'rxjs/operators';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})


export class NavigationComponent implements OnInit {
  public imagesUrl;

  public text = texte;
  
  public index = 0;
 
  constructor(private readonly deviceService: DeviceDetectorService) { }

  ngOnInit() {
    this.imagesUrl = [
      '../assets/images/IMG_4575.JPG',
      '../assets/images/IMG_4565.JPG',
      '../assets/images/IMG_4573.JPG',
      '../assets/images/IMG_4571.JPG',
      '../assets/images/IMG_4480.JPG',
      '../assets/images/IMG_4459.JPG',
    ]

    // let dd = new DeviceDetector();
    // let device = dd.parse(navigator.userAgent);
    // console.log(device);
  let timerId = setInterval(() => this.fade(), 10000);
  }

  fade () {
    if (this.deviceService.isMobile()) {
    if (this.index < 2) {
      this.index += 1;
    } else {
      this.index = 0;
    }
  }
}

  scroll(value: string) {
    const element = document.querySelector('#' + value);
    element.scrollIntoView({behavior: 'smooth', block: 'start'});
  }
}
