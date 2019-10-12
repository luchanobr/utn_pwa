import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//  angular flex loyout
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  exports: [CommonModule, FormsModule, ReactiveFormsModule, FlexLayoutModule]
})
export class AngularCommonModule {}
