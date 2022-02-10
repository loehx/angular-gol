import { Component, HostListener, OnInit } from '@angular/core';
import {
  generateGrid,
  activateCell,
  randomSpawn,
  doLifecycle,
  loadPattern,
} from 'src/core';
import { GridComponent } from '../grid/grid.component';

@Component({
  selector: 'game-of-life',
  templateUrl: './game-of-life.component.html',
  styleUrls: ['./game-of-life.component.less'],
})
export class GameOfLifeComponent implements OnInit {
  rows: boolean[][] = [];
  size = 50;
  fps = 5;
  intervalId: number | null = null;

  constructor() {}

  ngOnInit(): void {
    this.rows = generateGrid(this.size);
  }

  cellClickedHandler(args: { y: number; x: number }): void {
    this.rows = activateCell(this.rows, args.x, args.y);
  }

  doAction(name: string) {
    switch (name) {
      case 'start':
        this.start();
        break;
      case 'stop':
        this.stop();
        break;
      case 'run':
        this.doLifecycle();
        break;
      case 'clear':
        this.rows = generateGrid(this.size);
        break;
      case 'shuffle':
        this.rows = randomSpawn(this.rows, 0.4);
        break;
    }
  }
  resize(n: number) {
    this.size = n;
    this.rows = generateGrid(n, this.rows);
  }
  setFps(n: number) {
    this.fps = n;
    this.start();
  }
  doLifecycle() {
    this.rows = doLifecycle(this.rows);
  }

  start(): void {
    this.stop();
    this.intervalId = setInterval(
      (() => this.doLifecycle()) as TimerHandler,
      1000 / this.fps
    );
  }

  stop(): void {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  async loadPattern(name: string) {
    this.rows = await loadPattern(name, 30, this.rows);
    this.resize(this.rows.length);
  }
}
