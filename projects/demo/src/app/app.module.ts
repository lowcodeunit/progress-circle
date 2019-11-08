import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { FathymSharedModule, LCUServiceSettings } from '@lcu/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LcuProgressCircleModule } from '@lowcodeunit/lcu-progress-circle-common';

export const settings = FathymSharedModule.DefaultServiceSettings(environment);


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    LcuProgressCircleModule
  ],
  providers: [
    {
      provide: LCUServiceSettings,
      useValue: settings
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
