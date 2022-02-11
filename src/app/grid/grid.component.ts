import {
  Component,
  HostListener,
  Input,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'gol-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.less'],
})
export class GridComponent implements OnInit {
  @Input() rows: boolean[][] = [];
  @Output() cellClicked = new EventEmitter<{ x: number; y: number }>();
  mouseDown = false;

  constructor() {}

  ngOnInit(): void {}

  onMouseAction(y: number, x: number) {
    if (this.mouseDown) {
      this.cellClicked.emit({ y, x });
    }
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(e: MouseEvent) {
    if (e.button == 0) {
      this.mouseDown = true;
    }
  }

  @HostListener('mouseup', ['$event'])
  onMouseUp(e: MouseEvent) {
    if (e.button == 0) {
      this.mouseDown = false;
    }
  }

  trackByIndex = (index: number): number => {
    return index - this.rows.length / 2;
  };
}
