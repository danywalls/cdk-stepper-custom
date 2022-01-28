import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ng-slider',
  templateUrl: './ng-slider.component.html',
  styleUrls: ['./ng-slider.component.css'],
})
export class NgSliderComponent implements OnInit {
  @Input() min: number;
  @Input() max: number;
  @Input() startStep: number = 0;
  @Input() icon: string = '%';
  @Output() selected: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  public changed(): void {
    this.selected.emit(this.startStep);
  }

  numRows(): Array<number> {
    return Array(this.max - this.min + 1);
  }
}
