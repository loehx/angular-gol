import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameOfLifeComponent } from './game-of-life/game-of-life.component';
import { GridComponent } from './grid/grid.component';
import { CellComponent } from './cell/cell.component';
import { ControlBarComponent } from './control-bar/control-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PatternLoaderComponent } from './pattern-loader/pattern-loader.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    GameOfLifeComponent,
    GridComponent,
    CellComponent,
    ControlBarComponent,
    PatternLoaderComponent,
  ],
  imports: [BrowserModule, FontAwesomeModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
