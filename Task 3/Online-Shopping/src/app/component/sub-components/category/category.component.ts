import { Component,OnInit,Input } from '@angular/core';

@Component({
  selector: '.app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  @Input() categoryName: string='';
  @Input() imageURL: string='';
  @Input() productsCount: number=0;
  constructor() { }

  ngOnInit(): void {
  }

}
