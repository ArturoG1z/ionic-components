import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TxtFileOpenPage } from './txt-file-open.page';

const routes: Routes = [
  {
    path: '',
    component: TxtFileOpenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TxtFileOpenPageRoutingModule {}
