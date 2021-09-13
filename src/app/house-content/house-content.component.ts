import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-house-content',
  templateUrl: './house-content.component.html',
  styleUrls: ['./house-content.component.scss']
})
export class HouseContentComponent implements OnInit {
  height : number = 800 as number
  a = false
  b : boolean = true
  images = [

    {path: 'https://firebasestorage.googleapis.com/v0/b/etiqa-sme-bizcareplus.appspot.com/o/r1Porch.png?alt=media&token=5eaba44a-dd2c-4e93-ac10-f2fa252aff1f'},
    {path: 'https://firebasestorage.googleapis.com/v0/b/etiqa-sme-bizcareplus.appspot.com/o/r1EntryWay.png?alt=media&token=ff634e15-1739-48a5-84d2-2dd057126959', height: 1000},
    {path: 'https://firebasestorage.googleapis.com/v0/b/etiqa-sme-bizcareplus.appspot.com/o/r1Side.png?alt=media&token=911b92fe-961b-4529-b2ff-cd7ef33df9c0'},
    {path: 'https://firebasestorage.googleapis.com/v0/b/etiqa-sme-bizcareplus.appspot.com/o/r1Side2.png?alt=media&token=6f94bd9b-1b94-493e-8657-3b97f9a072ee'},
    {path: 'https://firebasestorage.googleapis.com/v0/b/etiqa-sme-bizcareplus.appspot.com/o/r1MetalTrees.png?alt=media&token=50b369b6-fd1b-4602-ab36-79f21d917d30'},
    {path: 'https://firebasestorage.googleapis.com/v0/b/etiqa-sme-bizcareplus.appspot.com/o/r1WallShrubs.png?alt=media&token=ecf1c13c-767d-4409-b59c-995d89ff8d2f'},
    {path: 'https://firebasestorage.googleapis.com/v0/b/etiqa-sme-bizcareplus.appspot.com/o/r1Hallway.png?alt=media&token=29e602ce-af00-41e5-a516-d63b90e79440'},
    {path: 'https://firebasestorage.googleapis.com/v0/b/etiqa-sme-bizcareplus.appspot.com/o/r1Glass.png?alt=media&token=76071f97-375a-4d34-baf1-ce7a77f90832'},
    {path: 'https://firebasestorage.googleapis.com/v0/b/etiqa-sme-bizcareplus.appspot.com/o/r1Roof.png?alt=media&token=e1c68cff-a063-45db-9c26-0bfdfb0b43f9'},
    {path: 'https://firebasestorage.googleapis.com/v0/b/etiqa-sme-bizcareplus.appspot.com/o/r1RoofOrchids.png?alt=media&token=3a4bfffd-2e67-4141-bac0-5cf77573f7b7'},
]
  image = 'https://firebasestorage.googleapis.com/v0/b/etiqa-sme-bizcareplus.appspot.com/o/a-2.jpeg?alt=media&token=e0e0af87-663c-4dc9-9718-f26395f5f28e'
// images: any =  []
  constructor() { 
}

  ngOnInit(): void {
  }

}
