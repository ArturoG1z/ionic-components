import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TxtFileOpenPageRoutingModule } from './txt-file-open-routing.module';

import { TxtFileOpenPage } from './txt-file-open.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TxtFileOpenPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [TxtFileOpenPage]
})
export class TxtFileOpenPageModule {}
