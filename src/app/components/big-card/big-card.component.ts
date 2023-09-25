import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {
  @Input()
  photoCover_bigcard : string = ""
  @Input()
  cardTitle_bigcard : string = ""
  @Input()
  cardDescription_bigcard : string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
