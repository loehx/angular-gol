import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'gol-pattern-loader',
  templateUrl: './pattern-loader.component.html',
  styleUrls: ['./pattern-loader.component.less'],
})
export class PatternLoaderComponent implements OnInit {
  faUpload = faUpload;
  selectedPattern = 'period48glidergun';
  patterns = ['period48glidergun', 'smallspaceship', 'spider'];
  @Output() loadPattern = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    this.loadPattern.emit(this.selectedPattern);
  }
}
