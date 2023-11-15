import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleComponent } from './components/example/example.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  IgxButtonGroupModule,
  IgxButtonModule,
  IgxIconModule,
  IgxInputGroupModule,
  IgxRadioModule,
  IgxRippleModule,
  IgxStepperModule,
} from 'igniteui-angular';

@NgModule({
  declarations: [ExampleComponent, FooterComponent, HeaderComponent],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    IgxButtonModule,
    IgxIconModule,
    IgxRippleModule,
    IgxStepperModule,
    IgxButtonGroupModule,
    IgxInputGroupModule,
    IgxRadioModule,
  ],
  exports: [
    FormsModule,
    FooterComponent,
    HeaderComponent,
    ReactiveFormsModule,
    IgxButtonModule,
    IgxIconModule,
    IgxRippleModule,
    IgxStepperModule,
    IgxButtonGroupModule,
    IgxInputGroupModule,
    IgxRadioModule,
  ],
})
export class SharedModule {}
