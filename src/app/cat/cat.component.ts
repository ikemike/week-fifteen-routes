import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatrixService } from '../matrix.service';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {

  public catName: string;

  constructor(private route: ActivatedRoute, private mtrx: MatrixService) { 

  }

  ngOnInit() {
    this.catName = this.getCatName();
  }

  getCatName() : string {
    this.initiateTheMatrix();
    return this.route.snapshot.paramMap.get('name');

  }

  public initiateTheMatrix() {
    this.mtrx.callNeo('okay');    // Call the Matrix
  }



}
