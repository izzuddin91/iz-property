import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-architecture',
  templateUrl: './architecture.component.html',
  styleUrls: ['./architecture.component.scss']
})
export class ArchitectureComponent implements OnInit {

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
  }

  goToContent(){
    console.log('test')
    this.router.navigate(['/house-content'], { state: { updatingUser: false } });
  }

}
