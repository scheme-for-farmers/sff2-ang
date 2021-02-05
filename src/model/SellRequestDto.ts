import { Crop } from "./Crop";
import { Farmer } from "./Farmer";

export class SellRequestDto{
    requestId:number;
    quantity:number;
    farmer:Farmer;
    crop:Crop;
    approve:string;
    status:string;
    soldDate:string;
}