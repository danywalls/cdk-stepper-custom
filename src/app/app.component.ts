import { Component, OnInit, VERSION } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  public tariffStepForm: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    this._setupStepFormSections();
  }
  ngOnInit(): void {
    this._setupStepFormSections();
    console.log(this.formSections);
  }

  get formSections(): AbstractControl {
    return this.tariffStepForm.get('sections');
  }

  private _setupStepFormSections() {
    this.tariffStepForm = this._formBuilder.group({
      sections: this._formBuilder.array([
        this._formBuilder.group({
          player: ['', Validators.compose([Validators.required])],
        }),
        this._formBuilder.group({
          position: ['', Validators.compose([Validators.required])],
        }),
      ]),
    });
  }
  public save() {
    console.log(this.tariffStepForm);
  }
}
