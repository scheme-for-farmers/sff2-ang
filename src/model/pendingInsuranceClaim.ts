import { Crop } from "./Crop";
import { Farmer } from "./Farmer";
import { SellRequest } from "./SellRequest";

export class pendingInsuranceClaim
{
    policyNo:number;
    premiumAmount:number;
    area:number;
    totalsumInsured:number;
    approve:string;
    cropName:string;
    insuranceStatus:string;
    causeOfClaim:string;
    dateOfLoss:string;
    //farmer:Farmer;
    sellRequest:SellRequest;
    crop:Crop;
}