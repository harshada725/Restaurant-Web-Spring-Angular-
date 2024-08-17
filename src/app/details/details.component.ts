import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  productName:string|null
  constructor(public route:ActivatedRoute)
  {
    this.productName=" "
  }
  ngOnInit()
  {
    this.productName=this.route.snapshot.paramMap.get('productName')
  }
}
