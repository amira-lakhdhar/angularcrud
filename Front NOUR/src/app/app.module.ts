import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './Public/Auth/sign-up/sign-up.component';
import { DashboardComponent } from './Private/User/dashboard/dashboard.component';
import { NavbarComponent } from './Private/User/navbar/navbar.component';
import { SidebarComponent } from './Private/User/sidebar/sidebar.component';
import { FooterComponent } from './Private/User/footer/footer.component';
import { SigninComponent } from './Public/Auth/signin/signin.component';
import { ChangePasswordComponent } from './Public/Auth/change-password/change-password.component';
import { ResetPasswordComponent } from './Public/Auth/reset-password/reset-password.component';
import { DocumentsComponent } from './Private/User/documents/documents.component';
import { InvoicesComponent } from './Private/User/invoices/invoices.component';
import { QuotationsComponent } from './Private/User/quotations/quotations.component';
import { ResellersComponent } from './Private/User/resellers/resellers.component';
import { SubscriptionsComponent } from './Private/User/subscriptions/subscriptions.component';
import { ClientsComponent } from './Private/User/clients/clients.component';
import { LandingComponent } from './Public/landing/landing.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";
import { NgxPaginationModule } from 'ngx-pagination';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { LazyLoadScriptService } from './Shared/Services/lazy-load-script.service.service';
import { ResellerDashboardComponent } from './Private/Reseller/reseller-dashboard/reseller-dashboard.component';
import { ToastNoAnimationModule } from 'ngx-toastr';
import { ResellerDetailsComponent } from './Private/User/reseller-details/reseller-details.component';
import { ResellerSubscriptionsComponent } from './Private/Reseller/reseller-subscriptions/reseller-subscriptions.component';
import { ErrorComponent } from './Public/error/error.component';
import { ResellerClientsComponent } from './Private/Reseller/reseller-clients/reseller-clients.component';
import { ResellerClientDetailsComponent } from './Private/Reseller/reseller-client-details/reseller-client-details.component';
import { ResellerProductsComponent } from './Private/Reseller/reseller-products/reseller-products.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { ResellerInvoicesComponent } from './Private/Reseller/reseller-invoices/reseller-invoices.component';
import { ResellerQuotesComponent } from './Private/Reseller/reseller-quotes/reseller-quotes.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    DashboardComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    SigninComponent,
    ChangePasswordComponent,
    ResetPasswordComponent,
    DocumentsComponent,
    InvoicesComponent,
    QuotationsComponent,
    ResellersComponent,
    SubscriptionsComponent,
    ClientsComponent,
    LandingComponent,
    ResellerDashboardComponent,
    ResellerDetailsComponent,
    ResellerSubscriptionsComponent,
    ErrorComponent,
    ResellerClientsComponent,
    ResellerClientDetailsComponent,
    ResellerProductsComponent,
    ResellerInvoicesComponent,
    ResellerQuotesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatButtonModule,
    ToastNoAnimationModule.forRoot(),
    NgSelectModule,
    NgxPaginationModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en-US',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    BrowserAnimationsModule,
    NgMultiSelectDropDownModule.forRoot(),
  ],
  providers: [LazyLoadScriptService , { provide: JWT_OPTIONS, useValue: JWT_OPTIONS }, JwtHelperService],
  bootstrap: [AppComponent],
})
export class AppModule {}
