import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  height : number = 800 as number
  a = false
  b : boolean = true
  images = [

    {path: '/assets/a-1.jpeg', height: 1000},
    {path: '/assets/a-2.jpeg'},
    {path: '/assets/a-1.jpeg'},
    {path: '/assets/a-2.jpeg'},
    {path: '/assets/a-1.jpeg'},
    {path: '/assets/a-2.jpeg'},
    {path: '/assets/a-1.jpeg'},
    {path: '/assets/a-2.jpeg'},
    {path: '/assets/a-1.jpeg'},
    {path: '/assets/a-2.jpeg'},
    {path: '/assets/a-1.jpeg'},
    {path: '/assets/a-2.jpeg'},
]
  image = '/assets/a-1.jpeg'
// images: any =  []
  constructor() { 
    // this.images = ['/assets/a-1.jpeg', '/assets/a-2.jpeg', '/assets/a-1.jpeg', '/assets/a-2.jpeg', '/assets/a-1.jpeg', '/assets/a-2.jpeg' ]
  }

  ngOnInit(): void {
  }

}


