import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstDemoComponent } from './first-demo/first-demo.component';
import { TwoWayDemoComponent } from './two-way-demo/two-way-demo.component';
import { FahrenheitToCelsiusPipe } from './fahrenheit-to-celsius.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FirstDemoComponent,
    TwoWayDemoComponent,
    FahrenheitToCelsiusPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [
    TwoWayDemoComponent
  ], /* Any module the imports the AppModule will have access to all of the components/pipes/directives that exist
  in the exports section */
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
