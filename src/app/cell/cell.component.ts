import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'gol-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.less'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CellComponent implements OnInit {
  @HostBinding('style.backgroundColor') rgbCode = '';
  @Output() onMouseAction = new EventEmitter<any>();
  private activeCounter: number = 0;

  @HostBinding('class.active') _active = false;
  public get active() {
    return this._active;
  }
  @Input('active') public set active(newValue) {
    this._active = newValue;

    this.activeCounter = this.activeCounter + 10;
    this.rgbCode = `rgb(${this.activeCounter - 100},${
      this.activeCounter - 200
    },${Math.min(150, this.activeCounter - 0)})`;
  }

  constructor() {}

  @HostListener('click')
  onClick(e: any) {
    this.onMouseAction.emit(e);
  }

  @HostListener('mousemove')
  onMouseMove(e: any) {
    this.onMouseAction.emit(e);
  }

  ngOnInit(): void {}
}
