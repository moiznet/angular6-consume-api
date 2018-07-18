import { Component, OnInit } from '@angular/core';
import {DataService } from '../data.service';
import { observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.less']
})
export class DetailsComponent implements OnInit {

	user$: Object;

  constructor( private data: DataService, private route: ActivatedRoute) { 

  		this.route.params.subscribe(params => this.user$ = params.id)
  }

  ngOnInit() {

  	this.data.getUser(this.user$).subscribe(
  			data => this.user$ = data
  		)
  }

}
