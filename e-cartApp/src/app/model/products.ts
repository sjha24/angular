export class products{
    Id:string;
    name:string;
    description:string;
    brand:string;
    gender:string;
    category:string;
    size:string[];
    color:string[];
    price:number;
    discountPrice?:number;
    is_in_inventory:boolean;
    itemsLeft?:number;
    imageUrl:string;
}