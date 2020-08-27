export class Myent {
  id:number;
  name:string;
  birth:Date; //date
  parent: number; //parent entity
  income: number; //integer
  deliveryTime: string; //time
  children: number[]; // 1 to many
}


export class Myparent {
  id:number;
  name: string;
}

export class Mychildren{
  id:number;
  parent: Myent;
  name: string;
}