import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'process',
    loadChildren: () =>
      import('./features/login-process/login-process.module').then(
        (m) => m.LoginProcessModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./features/main-stepper/main-stepper.module').then(
        (m) => m.MainStepperModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
