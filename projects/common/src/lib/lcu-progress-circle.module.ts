import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressCircleComponent } from './controls/progress-circle/progress-circle.component';

import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [ProgressCircleComponent],
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  exports: [ProgressCircleComponent],
  entryComponents: [ProgressCircleComponent]
})
export class LcuProgressCircleModule { }
