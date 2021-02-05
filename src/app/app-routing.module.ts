import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminAddUpdateCropComponent } from './admin-add-update-crop/admin-add-update-crop.component';
import { AdminAddUpdateInsuranceComponent } from './admin-add-update-insurance/admin-add-update-insurance.component';
import { AdminApproveApplyInsuranceComponent } from './admin-approve-apply-insurance/admin-approve-apply-insurance.component';
import { AdminApproveBidComponent } from './admin-approve-bid/admin-approve-bid.component';
import { AdminApproveBidderComponent } from './admin-approve-bidder/admin-approve-bidder.component';
import { AdminApproveClaimForInsuranceComponent } from './admin-approve-claim-for-insurance/admin-approve-claim-for-insurance.component';
import { AdminApproveFarmerComponent } from './admin-approve-farmer/admin-approve-farmer.component';
import { AdminApproveSellRequestComponent } from './admin-approve-sell-request/admin-approve-sell-request.component';
import { AdminMarkCropAsSoldComponent } from './admin-mark-crop-as-sold/admin-mark-crop-as-sold.component';
import { AdminWelcomeComponent } from './admin-welcome/admin-welcome.component';
import { ApplyforpolicyComponent } from './applyforpolicy/applyforpolicy.component';
import { BidderregistrationComponent } from './bidderregistration/bidderregistration.component';
import { BidderwelcomeComponent } from './bidderwelcome/bidderwelcome.component';
import { ClaimInsuranceFarmerComponent } from './claim-insurance-farmer/claim-insurance-farmer.component';
//import { ClaiminsuranceComponent } from './claiminsurance/claiminsurance.component';
import { ContactComponent } from './contact/contact.component';
import { FarmerregistrationComponent } from './farmerregistration/farmerregistration.component';
import { FarmerwelcomeComponent } from './farmerwelcome/farmerwelcome.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import{HomeComponent} from './home/home.component'
import { InsurancepageComponent } from './insurancepage/insurancepage.component';
import { LoginComponent } from './login/login.component';
import { PlacesellrequestComponent } from './placesellrequest/placesellrequest.component';
import { ViewUnsoldCropsOfFarmerComponent } from './view-unsold-crops-of-farmer/view-unsold-crops-of-farmer.component';
import { ViewmarketplaceComponent } from './viewmarketplace/viewmarketplace.component';
import { ViewsoldhistoryComponent } from './viewsoldhistory/viewsoldhistory.component';
const routes: Routes = [
  
  { path: '', component: HomeComponent },
  { path: 'homelink', component: HomeComponent },
  { path: 'loginlink', component: LoginComponent },
  { path: 'aboutuslink', component: AboutComponent },
  { path: 'contactlink', component: ContactComponent },
  { path: 'farmerWelcomePage', component: FarmerwelcomeComponent },
  { path: 'bidderWelcomePage', component: BidderwelcomeComponent },
  { path: 'sellrequest', component: PlacesellrequestComponent },
  { path: 'soldhistory', component: ViewsoldhistoryComponent },
  { path: 'marketpalce', component: ViewmarketplaceComponent },
  { path: 'insurancepage', component: InsurancepageComponent },
  { path: 'applyforpolicy', component: ApplyforpolicyComponent },
  //{ path: 'claim', component: ClaiminsuranceComponent },
  { path: 'fregistration', component: FarmerregistrationComponent },
  { path: 'bregistration', component: BidderregistrationComponent },
  { path: 'adminWelcome', component: AdminWelcomeComponent },
  { path: 'adminAddUpdateCrop', component: AdminAddUpdateCropComponent },
  { path: 'adminApproveSellRequest', component:AdminApproveSellRequestComponent},
  { path: 'adminApproveFarmer', component: AdminApproveFarmerComponent },
  { path: 'adminApproveBidder', component: AdminApproveBidderComponent },
  { path: 'adminMarkCropAsSold', component: AdminMarkCropAsSoldComponent },
  { path: 'adminBidApprove', component: AdminApproveBidComponent },
  { path: 'forgetPassword', component: ForgetPasswordComponent },
  { path: 'approveApplyInsurance',component: AdminApproveApplyInsuranceComponent},
  { path: 'approveclaimInsurance', component: AdminApproveClaimForInsuranceComponent },
  { path: 'adminaddInsurance', component: AdminAddUpdateInsuranceComponent },
  {path: 'viewUnsoldCropsOfFarmer', component: ViewUnsoldCropsOfFarmerComponent},
  {path: 'claimFarmer', component: ClaimInsuranceFarmerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
