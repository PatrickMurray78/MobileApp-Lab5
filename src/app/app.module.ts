import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SavingsComponent } from './savings/savings.component';
import { MortgageComponent } from './mortgage/mortgage.component';
import { InterestService } from './services/interest.service';

@NgModule({
  declarations: [
    AppComponent,
    SavingsComponent,
    MortgageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [InterestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
