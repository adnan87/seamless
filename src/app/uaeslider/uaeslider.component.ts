import { Component, OnInit } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';

@Component({
  selector: 'app-uaeslider',
  templateUrl: './uaeslider.component.html',
  styleUrls: ['./uaeslider.component.scss']
})
export class UaesliderComponent implements OnInit {
  public itemList: object[] = [];
  public carouselOne: NgxCarousel;

  constructor() {
    this.itemList = [
        {
          title: 'assets/Images/UAE/1.png',

        },
        {
          title: 'assets/Images/UAE/2.png',

        },
        {
          title: 'assets/Images/UAE/3.png',

        },
        {
          title: 'assets/Images/UAE/4.png',
        },
        {
          title: 'assets/Images/UAE/1.png',

        },
        {
          title: 'assets/Images/UAE/2.png',

        },
        {
          title: 'assets/Images/UAE/3.png',

        },
        {
          title: 'assets/Images/UAE/4.png',
        },
        {
          title: 'assets/Images/UAE/1.png',

        },
        {
          title: 'assets/Images/UAE/2.png',

        },
        {
          title: 'assets/Images/UAE/3.png',

        },
        {
          title: 'assets/Images/UAE/4.png',
        },
        {
          title: 'assets/Images/UAE/1.png',

        },
        {
          title: 'assets/Images/UAE/2.png',

        },
        {
          title: 'assets/Images/UAE/3.png',

        },
        {
          title: 'assets/Images/UAE/4.png',
        }

      ] }

  ngOnInit() {
    // setTimeout(function(){
            // temp.travelling = false;
            this.carouselOne = {
              grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
              slide: 1,
              speed: 6500,
              interval: 5800,
              point: {
                visible: false
              },
              load: 1,
              touch: true,
              loop: true,
              custom: 'banner'
            }
          // }, 1000);

  }
  public afterCarouselViewedFn(data){
    // alert('load called')
  }

}
