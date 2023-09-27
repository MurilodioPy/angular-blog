import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';

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
  @Input()
  Id : string = "1"
  constructor(
    private route:ActivatedRoute
    ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      console.log(value)
    )
  }

}
