import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchfilterPipe } from './searchfilter.pipe';

@NgModule({
  declarations: [
    SearchfilterPipe
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SearchfilterPipe,
  ]
})
export class PipesModule { }
