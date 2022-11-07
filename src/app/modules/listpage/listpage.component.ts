import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listpage',
  templateUrl: './listpage.component.html',
  styleUrls: ['./listpage.component.scss']
})
export class ListpageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



  produce = [
    {
      url: '',
      content: 'Tomato',
      image: 'assets/images/featured-produce/tomatoes.png',
    },
    {
      url: '',
      content: 'Lettuce',
      image: 'assets/images/featured-produce/lettuce.png',
    },
    {
      url: '',
      content: 'Berry',
      image: 'assets/images/featured-produce/berries.png',
    },
    {
      url: '',
      content: 'Watermelon',
      image: 'assets/images/featured-produce/melon.png',
    },
    {
      url: '',
      content: 'Pineapple',
      image: 'assets/images/featured-produce/pineapple.png',
    },
    {
      url: '',
      content: 'Banana',
      image: 'assets/images/featured-produce/banana.png',
    },
  ];

  seasonal = [
    {
      url: '',
      content: 'Carrots',
      image: 'assets/images/in-season/carrots.png',
      regions: [
        {
          name: 'Clarendon',
        },
        {
          name: 'Kingston',
        },
        {
          name: 'St James',
        },
        {
          name: 'St. Ann',
        },
      ],
    },
    {
      url: '',
      content: 'Parsley',
      image: 'assets/images/in-season/parsley.png',
      regions: [
        {
          name: 'Clarendon',
        },
        {
          name: 'Kingston',
        },
        {
          name: 'St James',
        },
        {
          name: 'St. Ann',
        },
      ],
    },
  ];





}
