import { NgModule } from '@angular/core';
import { PhoneOnlyNumericDirective } from './phone-only-numeric.directive';

@NgModule({
declarations: [PhoneOnlyNumericDirective],
exports: [PhoneOnlyNumericDirective]
})

export class NumbersOnlyModule { }