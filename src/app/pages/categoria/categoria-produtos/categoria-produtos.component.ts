import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-categoria-produtos',
  templateUrl: './categoria-produtos.component.html',
  styleUrls: ['./categoria-produtos.component.css']
})
export class CategoriaProdutosComponent implements OnInit {
  @Input() produtos: string ='';
  

  constructor() { }

  ngOnInit() {
  }

}
