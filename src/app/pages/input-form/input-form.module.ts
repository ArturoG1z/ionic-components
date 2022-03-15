import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InputFormPageRoutingModule } from './input-form-routing.module';

import { InputFormPage } from './input-form.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputFormPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [InputFormPage]
})
export class InputFormPageModule {}
