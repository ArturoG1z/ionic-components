import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InputFormPage } from './input-form.page';

const routes: Routes = [
  {
    path: '',
    component: InputFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InputFormPageRoutingModule {}
