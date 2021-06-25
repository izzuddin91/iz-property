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

    {path: 'https://firebasestorage.googleapis.com/v0/b/etiqa-sme-bizcareplus.appspot.com/o/a-2.jpeg?alt=media&token=e0e0af87-663c-4dc9-9718-f26395f5f28e', height: 1000},
    {path: 'https://firebasestorage.googleapis.com/v0/b/etiqa-sme-bizcareplus.appspot.com/o/a-1.jpeg?alt=media&token=b02158f2-98ce-453b-ad1d-d85912fabe07'},
    {path: 'https://firebasestorage.googleapis.com/v0/b/etiqa-sme-bizcareplus.appspot.com/o/a-2.jpeg?alt=media&token=e0e0af87-663c-4dc9-9718-f26395f5f28e'},
    {path: 'https://firebasestorage.googleapis.com/v0/b/etiqa-sme-bizcareplus.appspot.com/o/a-1.jpeg?alt=media&token=b02158f2-98ce-453b-ad1d-d85912fabe07'},
    {path: 'https://firebasestorage.googleapis.com/v0/b/etiqa-sme-bizcareplus.appspot.com/o/a-2.jpeg?alt=media&token=e0e0af87-663c-4dc9-9718-f26395f5f28e'},
    {path: 'https://firebasestorage.googleapis.com/v0/b/etiqa-sme-bizcareplus.appspot.com/o/a-1.jpeg?alt=media&token=b02158f2-98ce-453b-ad1d-d85912fabe07'},
    {path: 'https://firebasestorage.googleapis.com/v0/b/etiqa-sme-bizcareplus.appspot.com/o/a-2.jpeg?alt=media&token=e0e0af87-663c-4dc9-9718-f26395f5f28e'},
    {path: 'https://firebasestorage.googleapis.com/v0/b/etiqa-sme-bizcareplus.appspot.com/o/a-1.jpeg?alt=media&token=b02158f2-98ce-453b-ad1d-d85912fabe07'},
    {path: 'https://firebasestorage.googleapis.com/v0/b/etiqa-sme-bizcareplus.appspot.com/o/a-2.jpeg?alt=media&token=e0e0af87-663c-4dc9-9718-f26395f5f28e'},
    {path: 'https://firebasestorage.googleapis.com/v0/b/etiqa-sme-bizcareplus.appspot.com/o/a-1.jpeg?alt=media&token=b02158f2-98ce-453b-ad1d-d85912fabe07'},
    {path: 'https://firebasestorage.googleapis.com/v0/b/etiqa-sme-bizcareplus.appspot.com/o/a-2.jpeg?alt=media&token=e0e0af87-663c-4dc9-9718-f26395f5f28e'},
    {path: 'https://firebasestorage.googleapis.com/v0/b/etiqa-sme-bizcareplus.appspot.com/o/a-1.jpeg?alt=media&token=b02158f2-98ce-453b-ad1d-d85912fabe07'},
]
  image = 'https://firebasestorage.googleapis.com/v0/b/etiqa-sme-bizcareplus.appspot.com/o/a-2.jpeg?alt=media&token=e0e0af87-663c-4dc9-9718-f26395f5f28e'
// images: any =  []
  constructor() { 
}

  ngOnInit(): void {
  }

}


