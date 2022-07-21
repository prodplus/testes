import { APP_BASE_HREF, HashLocationStrategy, LocationStrategy,
  registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CurrencyMaskConfig, CurrencyMaskModule, CURRENCY_MASK_CONFIG } from 'ng2-currency-mask';
import { NgxMaskModule } from 'ngx-mask';
import { OrgChartModule } from 'angular-org-chart';
import { GoogleChartsModule } from 'angular-google-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import localPt from '@angular/common/locales/pt';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from './components/components.module';
import { HeaderComponent } from './header/header.component';
import { ConfiguracaoComponent } from './configuracao/configuracao.component';

registerLocaleData(localPt);

const brasilCurrency: CurrencyMaskConfig = {
  align: 'right',
  allowNegative: false,
  decimal: ',',
  precision: 2,
  prefix: 'R$ ',
  suffix: '',
  thousands: '.',
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ConfiguracaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    CurrencyMaskModule,
    NgxMaskModule.forRoot(),
    OrgChartModule,
    GoogleChartsModule,
    ComponentsModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: CURRENCY_MASK_CONFIG, useValue: brasilCurrency }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
