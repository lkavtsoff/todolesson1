export class Prod {
    id : number;
    name : string;
    status : boolean;
    price : number;
  
    constructor (id:number, name:string, status:boolean, price:number) {
      this.id = id;
      this.name = name;
      this.status = status;
      this.price = price;
    }
  }