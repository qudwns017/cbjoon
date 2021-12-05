import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cbj',
  templateUrl: './cbj.component.html',
  styleUrls: ['./cbj.component.scss']
})
export class CbjComponent implements OnInit {

  constructor(
    private route: Router
  ) { }

  ngOnInit(): void {
  }

}
