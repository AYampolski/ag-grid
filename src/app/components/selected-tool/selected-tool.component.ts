import { Component } from '@angular/core';

import { IToolPanel, IToolPanelParams } from '@ag-grid-community/all-modules';

@Component({
  selector: 'app-selected-tool',
  templateUrl: './selected-tool.component.html',
  styleUrls: ['./selected-tool.component.scss'],
})
export class SelectedToolComponent implements IToolPanel {
  private params: IToolPanelParams;
  total = 0;

  agInit(params: IToolPanelParams): void {
    this.params = params;

    this.params.api.addEventListener(
      'selectionChanged',
      this.update.bind(this)
    );
  }

  update() {
    this.total = this.params.api.getSelectedRows().length;
  }

  refresh(): void {
    throw new Error('Method not implemented.');
  }
}
