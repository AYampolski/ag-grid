import { Component } from '@angular/core';
import { IHeaderAngularComp } from '@ag-grid-community/angular';

@Component({
  templateUrl: './selected-cell-render.component.html',
  styleUrls: ['./selected-cell-render.component.scss'],
})
export class SelectedCellRenderComponent implements IHeaderAngularComp {
  public params;
  public sorted: string;
  select = false;

  agInit(params): void {
    this.params = params;
  }
}
