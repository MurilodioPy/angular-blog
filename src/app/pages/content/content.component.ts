import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:string = "https://i0.wp.com/cromossomonerd.com.br/wp-content/uploads/2017/07/pantera_negra.png?fit=1068%2C600&ssl=1"
  contentTitle:string = "Meu Título"
  contentDescription:string = "Descrição do conteúdo: Olá Mundo"

  constructor() { }

  ngOnInit(): void {
  }

}
