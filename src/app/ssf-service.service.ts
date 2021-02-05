import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bidder } from 'src/model/Bidder';
import { Farmer } from 'src/model/Farmer';
import { Login } from 'src/model/login';
import { Crop } from 'src/model/Crop';
import { SellRequest } from 'src/model/SellRequest';
import { PendingBids } from 'src/model/PendingBids';
import { PendingSellRequest } from 'src/model/PendingSellRequest';
import { DisplayRequest } from 'src/model/DisplayRequest';
import { DisplayBid } from 'src/model/DisplayBid';
import { InsuranceInputDto } from 'src/model/InsuranceInputDto';
import { calculateInsurance } from 'src/model/calculateInsurance';
import { AddUpdateInsuranceDto } from 'src/model/AddUpdateInsuranceDto';
import { user } from 'src/model/user';
import { updateInsurance } from 'src/model/updateInsurance';

@Injectable({
  providedIn: 'root'
})
export class SsfService {

  constructor(private http: HttpClient) { }

  public registerFarmer(farmer: Farmer): Observable<any> {
    console.log(farmer.farmerBank.ifscCode);
    console.log(farmer);
    return this.http.post<any>('http://localhost:8080/registerUser', farmer);
  }

  public registerBidder(bidder: Bidder): Observable<any> {
    return this.http.post<any>('http://localhost:8080/registerBidder', bidder);
  }


  public login(email: string, password: string): Observable<any> {
    return this.http.get<any>('http://localhost:8080/isVaild/' + email + '/' + password + '/');
  }
  public addOrUpdateCrops(crop: Crop): Observable<any> {

    return this.http.post<any>('http://localhost:8080//addCrop/', crop);
  }

  public viewAllCrops(): Observable<Crop[]> {
    return this.http.get<Crop[]>('http://localhost:8080/viewAllCrops/');
  }
  public deleteCrop(cid: number): Observable<any> {
    return this.http.get<any>('http://localhost:8080/deleteCrop/' + cid);
  }
  public placeSellRequest(sellRequest: SellRequest): Observable<any> {
    return this.http.post<any>('http://localhost:8080/placeSellRequest', sellRequest);
  }
  public viewUnapprovedFarmer(): Observable<Farmer[]> {

    return this.http.get<Farmer[]>('http://localhost:8080/viewPendingApprovalFarmers');
  }
  public approveFarmers(email: string): Observable<any> {

    return this.http.get<any>('http://localhost:8080/approveFarmer/' + email);
  }
  public rejectFarmers(email: string): Observable<any> {

    return this.http.get<any>('http://localhost:8080/rejectFarmer/' + email + '/');
  }

  public viewUnapprovedSellRequest(): Observable<PendingSellRequest[]> {

    return this.http.get<PendingSellRequest[]>('http://localhost:8080/fetchApprovalPendingSellRequest');
  }
  public approveSellRequest(id: number): Observable<any> {

    return this.http.get<any>('http://localhost:8080/approveSellRequest/' + id);
  }

  public rejectSellRequest(id: number): Observable<any> {

    return this.http.get<any>('http://localhost:8080/rejectSellRequest/' + id);
  }

  public viewUnapprovedBids(): Observable<PendingBids[]> {

    return this.http.get<PendingBids[]>('http://localhost:8080/pendingBidRequest');
  }
  public approveBid(id: number): Observable<any> {

    return this.http.get<any>('http://localhost:8080/approveBidRequest/' + id);
  }
  public viewUnapprovedBidders(): Observable<Bidder[]> {

    return this.http.get<Bidder[]>('http://localhost:8080/viewPendingApprovalBidders');
  }
  public approvedBidders(email: string): Observable<any> {

    return this.http.get<any>('http://localhost:8080/approveBidder/' + email);
  }

  public rejectBidders(email: string): Observable<any> {

    return this.http.get<any>('http://localhost:8080/rejectBidder/' + email);
  }
  public viewSellRequests(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/displaySellRequest');
  }
  public placeBid(displayRequest: DisplayRequest): Observable<any> {
    console.log("email" + displayRequest.bidderEmail);
    return this.http.post<any>('http://localhost:8080/placeBid', displayRequest);
  }
  public displayBids(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/displayBids');
  }
  public sellCrop(id: number): Observable<any> {
    return this.http.get<any>('http://localhost:8080/sellCrop/' + id);
  }
  public history(farmerEmail: string): Observable<any[]> {

    return this.http.get<any[]>('http://localhost:8080//viewSoldHistory/' + farmerEmail);
  }
  public viewMarketPlace(cropName: string, cropType: string): Observable<any> {
    return this.http.get<any>('http://localhost:8080/viewMarketPlace/' + cropName + '/' + cropType);
  }
  public uploadDocument(formData:FormData): Observable<any> {
    return this.http.post<any>('http://localhost:8080/uploadFarmerDoc', formData);
  }
  public uploadDocumentBidder(formData:FormData): Observable<any>{
    return this.http.post<any>('http://localhost:8080/uploadBidderDoc', formData);
  }
  public forgotPassword(email: string): Observable<any> {
    return this.http.get<any>('http://localhost:8080/forgotPassword/' + email);
  }
  public viewAllUnSoldCrops(): Observable<Crop[]> {
    return this.http.get<Crop[]>('http://localhost:8080/viewUnsoldCrops');
  }

  public calculateInsurance(insuranceInputDto: InsuranceInputDto): Observable<any> {
    return this.http.post<any>('http://localhost:8080/calculateInsurance', insuranceInputDto);
  }
  public applyInsurance(calculateInsur: calculateInsurance): Observable<any> {
    return this.http.post<any>('http://localhost:8080/applyInsurance', calculateInsur);
  }
  public viewInsuranceApprovals(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/fetchApprovalPendingInsurance');
  }
  public approveInsurance(policyNo: number, id: number): Observable<any> {
    return this.http.get<any>('http://localhost:8080/approveInsurance/' + policyNo + '/' + id);
  }
  public rejectInsurance(policyNo: number): Observable<any> {
    return this.http.get<any>('http://localhost:8080/rejectInsurance/' + policyNo);
  }
  public claimInsurance(policyno: number, cause: string, date: string): Observable<any> {
    return this.http.get<any>('http://localhost:8080/claimInsurance/' + policyno + '/' + cause + '/' + date);
  }
  public fetchPendingClaimApprovals(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/fetchApprovalPendingClaimInsurance');
  }
  public approveClaim(policyNo: number): Observable<any> {
    return this.http.get<any>('http://localhost:8080/approveClaimedInsurance/' + policyNo)
  }
  public rejectClaim(policyNo: number): Observable<any> {
    return this.http.get<any>('http://localhost:8080/rejectClaimedInsurance/' + policyNo)
  }

  public addOrUpdateInsurance(addUpdateInsurance: AddUpdateInsuranceDto): Observable<any> {
    return this.http.post<any>('http://localhost:8080/addInsurance', addUpdateInsurance);
  }
  public viewUnsoldCropsOfFarmer(email: string): Observable<any> {
    //console.log("hi"+email);
    return this.http.get<any>('http://localhost:8080/viewUnsoldCropsByFarmer/' + email + '/');
  }
  public contactUs(user: user): Observable<any> {
    return this.http.post<any>('http://localhost:8080/contactUs', user);
  }

  public getCropTypes(): Observable<String[]> {
    return this.http.get<String[]>('http://localhost:8080/viewAllCropType');
  }
  public getCropNamesByCropType(cropType: string): Observable<String[]> {
    return this.http.get<String[]>(' http://localhost:8080/viewAllCropNameByCropType/' + cropType);
  }
  public viewAllInsurance():Observable<any>
  {
    return this.http.get<any>('http://localhost:8080/viewAllinsurance');
  }
  public updateInsuranceMethod(insurance: updateInsurance):Observable<any>
  {
    return this.http.post<any>('http://localhost:8080/updateInsurance',insurance);
  }
  public downloadCardsFarmer(id:number): Observable<any>{
    return this.http.get<any>('http://localhost:8080//viewDocFarmer?userId='+id);
}
public downloadCardsBidder(id:number): Observable<any>{
  return this.http.get<any>('http://localhost:8080/viewDocBidder?userId='+id);
}


}
