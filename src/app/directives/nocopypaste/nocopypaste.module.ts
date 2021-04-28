import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockCopyPasteDirective } from '../block-copy-paste.directive';

@NgModule({
  declarations: [BlockCopyPasteDirective],
exports: [CommonModule,BlockCopyPasteDirective]
})
export class NocopypasteModule { }
