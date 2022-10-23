import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-recent-components',
  templateUrl: './recent-components.component.html',
  styleUrls: ['./recent-components.component.css']
})
export class RecentComponentsComponent implements OnInit {
  @Input() recentproductName: string='';
  @Input() imageURL2: string='';
  @Input() Count: number=0;
  constructor() { }

  ngOnInit(): void {
  }

}
