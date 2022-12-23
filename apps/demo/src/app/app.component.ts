import {Component, OnInit, ViewChild} from '@angular/core';
import { CronOptions } from 'ngx-cron-editor';
import { CronGenComponent } from 'ngx-cron-editor';
import {FormBuilder, UntypedFormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public cronExpression = '3 3 1/3 * *'; // '10 10 1/1 * *';
  public isCronDisabled = false;
  public cronOptions: CronOptions = {
    formInputClass: 'form-control cron-editor-input',
    formSelectClass: 'form-control cron-editor-select',
    formRadioClass: 'cron-editor-radio',
    formCheckboxClass: 'cron-editor-checkbox',

    defaultTime: '00:00:00',

    hideMinutesTab: false,
    hideHourlyTab: false,
    hideDailyTab: true,
    hideWeeklyTab: false,
    hideMonthlyTab: false,
    hideYearlyTab: true,
    hideAdvancedTab: false,
    hideSpecificWeekDayTab: false,
    hideSpecificMonthWeekTab: false,

    use24HourTime: true,
    hideSeconds: false,

    cronFlavor: 'standard'
  };

  @ViewChild('cronEditorDemo', { static: false })
  cronEditorDemo: CronGenComponent;

  cronForm: UntypedFormControl;

  public txtCron = '0/1 * 1/1 * *';

  constructor() {}

  ngOnInit(): void {
    this.cronForm = new UntypedFormControl(this.cronExpression);
  }

  cronFlavorChange() {
    this.cronEditorDemo.options = this.cronOptions;
  }

  public reload() {
    this.cronExpression = this.txtCron; // '3 0/3 1/1 * *';
    this.cronForm.patchValue(this.cronExpression);
    // this.cronEditorDemo.handleModelChange(this.cronExpression);
  }

  public formValue() {
    console.log(this.cronForm.value);
  }
}
