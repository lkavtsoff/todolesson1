import { Component, OnInit } from '@angular/core';

import { Prod } from '../prod';

@Component({
  selector: 'tlist',
  templateUrl: './tlist.component.html',
  styleUrls: ['./tlist.component.css']
})

export class TlistComponent implements OnInit {

  products : Prod[] = [
    {id : 1, name: 'Помидоры', status: false, price: 7.5},
    {id : 2, name: 'Огурцы', status: false, price: 4},
    {id : 3, name: 'Картофель', status: true, price: 2.9},
    {id : 4, name: 'Морковь', status: false, price: 3.5}
  ];

  constructor() { }

  ngOnInit() {
  }

  addProduct(name:string, price:number) {
    var id = this.products.length + 1;
    this.products.push({id: id, name: name, status: false, price: price});
  }

}
