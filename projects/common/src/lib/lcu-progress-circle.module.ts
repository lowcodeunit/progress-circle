import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressCircleComponent } from './controls/progress-circle/progress-circle.component';



@NgModule({
  declarations: [ProgressCircleComponent],
  imports: [
    CommonModule
  ],
  exports: [ProgressCircleComponent],
  entryComponents: [ProgressCircleComponent]
})
export class LcuProgressCircleModule { }
