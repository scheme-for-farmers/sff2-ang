import { FarmerAddress } from "./FarmerAddress";
import { FarmerBank } from "./FarmerBank";
import { FarmerLand } from "./FarmerLand";

export class Farmer {
  farmerId: number=0;
  farmerName: string="";
  farmerContactNo: string="";
  farmerEmail: string="";
  farmerPassword: string="";
    farmerApprove: string="";
    farmerAddress: FarmerAddress=null;
    farmerBank: FarmerBank=null;
    farmerLand: FarmerLand=null;
    farmerPan:string="";
    farmerAadhar:string="";


}
