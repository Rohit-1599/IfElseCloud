import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { provideHttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DashboardModule],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
