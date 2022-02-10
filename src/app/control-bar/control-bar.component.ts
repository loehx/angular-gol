import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  faPlay,
  faStop,
  faForward,
  faTrash,
  faRandom,
  faPlus,
  faMinus,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'gol-control-bar',
  templateUrl: './control-bar.component.html',
  styleUrls: ['./control-bar.component.less'],
})
export class ControlBarComponent implements OnInit {
  @Input() size = 0;
  @Input() fps = 1;
  @Output() loadPattern = new EventEmitter<string>();
  @Output() action = new EventEmitter<string>();
  @Output() resize = new EventEmitter<number>();
  @Output() setFps = new EventEmitter<number>();
  faPlay = faPlay;
  faStop = faStop;
  faForward = faForward;
  faTrash = faTrash;
  faRandom = faRandom;
  faPlus = faPlus;
  faMinus = faMinus;

  constructor() {}

  ngOnInit(): void {}
}
