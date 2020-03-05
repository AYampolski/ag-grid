import { Component } from '@angular/core';

import { IToolPanel, IToolPanelParams } from '@ag-grid-community/all-modules';

@Component({
  selector: 'app-total-tool',
  templateUrl: './total-tool.component.html',
  styleUrls: ['./total-tool.component.scss'],
})
export class TotalToolComponent implements IToolPanel {
  private params;
  total: number;

  agInit(params: IToolPanelParams): void {
    this.params = params;
    this.total = params.api.getDisplayedRowCount();
  }

  refresh(): void {
    throw new Error('Method not implemented.');
  }
}
