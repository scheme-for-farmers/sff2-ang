import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FarmerwelcomeComponent } from './farmerwelcome/farmerwelcome.component';
import { HeaderComponent } from './header/header.component';
import { BidderwelcomeComponent } from './bidderwelcome/bidderwelcome.component';
import { PlacesellrequestComponent } from './placesellrequest/placesellrequest.component';
import { ViewsoldhistoryComponent } from './viewsoldhistory/viewsoldhistory.component';
import { ViewmarketplaceComponent } from './viewmarketplace/viewmarketplace.component';
import { InsurancepageComponent } from './insurancepage/insurancepage.component';
import { ApplyforpolicyComponent } from './applyforpolicy/applyforpolicy.component';
//import { ClaiminsuranceComponent } from './claiminsurance/claiminsurance.component';
import { FarmerregistrationComponent } from './farmerregistration/farmerregistration.component';
import { BidderregistrationComponent } from './bidderregistration/bidderregistration.component';
import { AdminAddUpdateCropComponent } from './admin-add-update-crop/admin-add-update-crop.component';
import { AdminAddUpdateInsuranceComponent } from './admin-add-update-insurance/admin-add-update-insurance.component';
import { AdminApproveSellRequestComponent } from './admin-approve-sell-request/admin-approve-sell-request.component';
import { AdminApproveClaimForInsuranceComponent } from './admin-approve-claim-for-insurance/admin-approve-claim-for-insurance.component';
import { AdminApproveFarmerComponent } from './admin-approve-farmer/admin-approve-farmer.component';
import { AdminApproveBidderComponent } from './admin-approve-bidder/admin-approve-bidder.component';
import { AdminMarkCropAsSoldComponent } from './admin-mark-crop-as-sold/admin-mark-crop-as-sold.component';
import { AdminApproveBidComponent } from './admin-approve-bid/admin-approve-bid.component';
import { AdminWelcomeComponent } from './admin-welcome/admin-welcome.component';
import { FooterComponent } from './footer/footer.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminApproveApplyInsuranceComponent } from './admin-approve-apply-insurance/admin-approve-apply-insurance.component';
import { ViewUnsoldCropsOfFarmerComponent } from './view-unsold-crops-of-farmer/view-unsold-crops-of-farmer.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { FarmerHeaderComponent } from './farmer-header/farmer-header.component';
import { ClaimInsuranceFarmerComponent } from './claim-insurance-farmer/claim-insurance-farmer.component';
import { BidderHeaderComponent } from './bidder-header/bidder-header.component';
import {​​​​​ ConfirmEqualValidatorDirective }​​​​​ from'./shared/confirm-equal-validator.directive';



@NgModule({
  declarations: [
    ConfirmEqualValidatorDirective,
    AppComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    ContactComponent,
    FarmerwelcomeComponent,
    HeaderComponent,
    BidderwelcomeComponent,
    PlacesellrequestComponent,
    ViewsoldhistoryComponent,
    ViewmarketplaceComponent,
    InsurancepageComponent,
    ApplyforpolicyComponent,
    //ClaiminsuranceComponent,
    FarmerregistrationComponent,
    BidderregistrationComponent,
    AdminAddUpdateCropComponent,
    AdminAddUpdateInsuranceComponent,
    AdminApproveSellRequestComponent,
    AdminApproveClaimForInsuranceComponent,
    AdminApproveFarmerComponent,
    AdminApproveBidderComponent,
    AdminMarkCropAsSoldComponent,
    AdminApproveBidComponent,
    AdminWelcomeComponent,
    FooterComponent,
    ForgetPasswordComponent,
    AdminApproveApplyInsuranceComponent,
    ViewUnsoldCropsOfFarmerComponent,
    AdminHeaderComponent,
    FarmerHeaderComponent,
    ClaimInsuranceFarmerComponent,
    BidderHeaderComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
