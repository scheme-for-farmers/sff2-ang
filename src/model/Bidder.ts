import { BidderAddress } from "./BidderAddress";
import { BidderBank } from "./BidderBank";

export class Bidder {
  bidderId: number = 0;
  bidderName: string = "";
  bidderContactNo: string = "";
  bidderEmail: string = "";
  bidderPassword: string = "";
  bidderApprove: string = "";
  bidderAddress: BidderAddress = null;
  bidderBank: BidderBank = null;
  bidderPan:string="";
  bidderAadhar:string="";

}