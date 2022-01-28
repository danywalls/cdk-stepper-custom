import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NgSliderComponent } from '../ng-slider/ng-slider.component';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { StepperComponent } from './stepper/stepper.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, CdkStepperModule],
  declarations: [
    AppComponent,
    HelloComponent,
    NgSliderComponent,
    StepperComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
