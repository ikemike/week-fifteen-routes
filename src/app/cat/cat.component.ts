import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {

  public catName: string;

  constructor(private route: ActivatedRoute) { 

  }

  ngOnInit() {
    this.catName = this.getCatName();
  }

  getCatName() : string {
    return this.route.snapshot.paramMap.get('name');
  }



}
