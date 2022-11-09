import { Farmer } from './../../../shared/components/models/farmer';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-farmers',
  templateUrl: './farmers.component.html',
  styleUrls: ['./farmers.component.scss'],
})
export class FarmersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  farmers: Farmer[] = [
    {
      id: 'Main Produce',

      name: 'John Brown',
      image:
        'https://images.pexels.com/photos/2382665/pexels-photo-2382665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      produce: [
        {
          name: 'Potato',
        },
        {
          name: 'Yam',
        },
        {
          name: 'Banana',
        },
        {
          name: 'Orange',
        },
      ],
    },
    {
      id: 'Main Produce',

      name: 'Paul Dunn',
      image:
        'https://images.pexels.com/photos/916406/pexels-photo-916406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      produce: [
        {
          name: 'Potato',
        },
        {
          name: 'Yam',
        },
        {
          name: 'Banana',
        },
        {
          name: 'Orange',
        },
      ],
    },
  ];
}
