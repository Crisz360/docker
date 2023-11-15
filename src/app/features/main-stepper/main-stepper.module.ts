import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainStepperRoutingModule } from './main-stepper-routing.module';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { StepOneComponent } from './pages/step-one/step-one.component';
import { StepTwoComponent } from './pages/step-two/step-two.component';
import { StepThreeComponent } from './pages/step-three/step-three.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { InfoComponent } from './pages/info/info.component';

@NgModule({
  declarations: [
    MainPageComponent,
    StepOneComponent,
    StepTwoComponent,
    StepThreeComponent,
    InfoComponent,
  ],
  imports: [CommonModule, MainStepperRoutingModule, SharedModule],
})
export class MainStepperModule {}
