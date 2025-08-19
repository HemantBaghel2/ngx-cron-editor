import {Component, Input, OnInit } from '@angular/core';
import { ControlContainer, UntypedFormGroup } from '@angular/forms';


export interface TimePickerModel {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function* range(start: number, end: number) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

@Component({
  selector: 'cron-time-picker',
  templateUrl: './cron-time-picker.template.html',
  providers: []
})
export class TimePickerComponent implements OnInit {

  @Input() public disabled;
  @Input() public use24HourTime = true;
  @Input() public hideHours = false;
  @Input() public hideMinutes = false;
  @Input() public hideSeconds = true;

  public minutes =  [...range(0, 59) ];
  public seconds = [...range(0, 59) ];
  public hourTypes = ['AM', 'PM'];

  public timeForm: UntypedFormGroup;
  @Input() formGroup: UntypedFormGroup;

  constructor(public parent: ControlContainer) {
  }

  public get hours(): number[] {
    return this.use24HourTime ? [... range(0, 23)] : [... range(0, 12)];
  }

  public ngOnInit(): void {
    // Use the provided formGroup or fall back to parent
    this.timeForm = this.formGroup || (this.parent.control as UntypedFormGroup);
    // this.timeForm = this.parent.control as UntypedFormGroup;
  }
}


