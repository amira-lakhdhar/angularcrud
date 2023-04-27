import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResellerClientDetailsComponent } from './Private/Reseller/reseller-client-details/reseller-client-details.component';
import { ResellerClientsComponent } from './Private/Reseller/reseller-clients/reseller-clients.component';
import { ResellerDashboardComponent } from './Private/Reseller/reseller-dashboard/reseller-dashboard.component';
import { ResellerInvoicesComponent } from './Private/Reseller/reseller-invoices/reseller-invoices.component';
import { ResellerProductsComponent } from './Private/Reseller/reseller-products/reseller-products.component';
import { ResellerQuotesComponent } from './Private/Reseller/reseller-quotes/reseller-quotes.component';
import { ResellerSubscriptionsComponent } from './Private/Reseller/reseller-subscriptions/reseller-subscriptions.component';
import { ClientsComponent } from './Private/User/clients/clients.component';
import { DashboardComponent } from './Private/User/dashboard/dashboard.component';
import { DocumentsComponent } from './Private/User/documents/documents.component';
import { InvoicesComponent } from './Private/User/invoices/invoices.component';
import { QuotationsComponent } from './Private/User/quotations/quotations.component';
import { ResellerDetailsComponent } from './Private/User/reseller-details/reseller-details.component';
import { ResellersComponent } from './Private/User/resellers/resellers.component';
import { SubscriptionsComponent } from './Private/User/subscriptions/subscriptions.component';
import { ArticlesComponent } from './Public/articles/articles.component';
import { SignUpComponent } from './Public/Auth/sign-up/sign-up.component';
import { SigninComponent } from './Public/Auth/signin/signin.component';
import { ErrorComponent } from './Public/error/error.component';
import { LandingComponent } from './Public/landing/landing.component';
import { AdminGuard } from './Shared/Guards/admin.guard';
import { ResellerGuard } from './Shared/Guards/reseller.guard';

const routes: Routes = [

  {path: '', component: LandingComponent },
  {path: 'signup' , component : SignUpComponent},
  {path: 'login' , component : SigninComponent},
    
  //ADMIN 
 // {path: 'home', component: DashboardComponent ,   canActivate:[AdminGuard] },
  {path: 'home', component: DashboardComponent},
  {path: 'documents', component: DocumentsComponent},
  {path: 'invoices',component: InvoicesComponent},
  {path: 'quotations', component: QuotationsComponent},
  {path: 'resellers', component: ResellersComponent},
  {path: 'subscriptions', component: SubscriptionsComponent},
  {path: 'clients', component: ClientsComponent},
  {path: 'articles', component: ArticlesComponent},
  {path:'resellerDetails/:_id', component: ResellerDetailsComponent},

  //Reseller :
  {path: 'dashboardReseller', component: ResellerDashboardComponent},
  {path: 'reseller/subscriptions', component: ResellerSubscriptionsComponent},
  {path: 'reseller/clients', component: ResellerClientsComponent},
  {path: 'reseller/clientDetails/:_id', component: ResellerClientDetailsComponent},
  {path: 'reseller/products', component: ResellerProductsComponent},
  {path: 'reseller/invoices', component: ResellerInvoicesComponent},
  {path: 'reseller/quotes', component: ResellerQuotesComponent},



  //Path 404
  {path: '**', component: ErrorComponent , pathMatch: 'full', },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
