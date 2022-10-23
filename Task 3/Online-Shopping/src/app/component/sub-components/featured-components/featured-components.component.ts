import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-featured-components',
  templateUrl: './featured-components.component.html',
  styleUrls: ['./featured-components.component.css']
})
export class FeaturedComponentsComponent implements OnInit {
  @Input() categoryName3: string='';
  @Input() imageURL3: string='';
  @Input() Count2: number=0;

  constructor() { }

  ngOnInit(): void {
  }

}
