import { Component } from '@angular/core';
import { CommonService } from '@services/common.service';
import { AllModules, Module } from '@ag-grid-enterprise/all-modules';

import { TotalToolComponent } from '@components/total-tool/total-tool.component';
import { ModeToolComponent } from '@components/mode-tool/mode-tool.component';
import { SelectedToolComponent } from '@components/selected-tool/selected-tool.component';
import { SelectedCellRenderComponent } from '@components/selected-cell-render/selected-cell-render.component';
import { HeaderCustomComponent } from '@components/header-custom/header-custom.component';

import { ColumnDefs } from '@models/column-def.model';
import { ColumnDefsService } from '@services/column-defs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  defaultColDef;
  rowData;
  modules: Module[] = AllModules;
  sideBar;
  onRowSelected;
  rowSelection;
  frameworkComponents;
  columnDefs: ColumnDefs[];

  private gridApi;
  private gridColumnApi;

  constructor(
    private apiService: CommonService,
    private columnService: ColumnDefsService
  ) {
    this.columnDefs = this.columnService.getColumnDefs();

    this.defaultColDef = {
      resizable: true,
    };

    this.frameworkComponents = {
      totalToolComponent: TotalToolComponent,
      modeToolComponent: ModeToolComponent,
      selectedToolComponent: SelectedToolComponent,
      customHeaderComponent: SelectedCellRenderComponent,
      testHeader: HeaderCustomComponent,
    };

    this.rowSelection = 'multiple';
    this.onRowSelected = event => {
      event.node.setDataValue('select', !event.data.select);
    };
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.sideBar = {
      toolPanels: [
        {
          id: 'modstats',
          labelDefault: 'Mode Stats',
          labelKey: 'modstats',
          iconKey: 'columns',
          toolPanel: 'modeToolComponent',
        },
        {
          id: 'totalStats',
          labelDefault: 'Total Stats',
          labelKey: 'totalStats',
          iconKey: 'columns',
          toolPanel: 'totalToolComponent',
        },
        {
          id: 'selectedStats',
          labelDefault: 'Selected Stats',
          labelKey: 'selectedStats',
          iconKey: 'columns',
          toolPanel: 'selectedToolComponent',
        },
      ],
      position: 'right',
    };
    this.apiService.getFormateData().subscribe(data => {
      this.rowData = data;
      this.gridApi.sizeColumnsToFit();
    });
  }

  getContextMenuItems(params) {
    const result = [];

    if (params.column.colDef.headerName === 'Video Title') {
      result.push({
        name: 'Open in new tab ' + params.column.colDef.headerName,
        action: () => {
          window.open(params.value, '_blank');
        },
        cssClasses: ['redFont', 'bold'],
      });
    }
    result.push('copy', 'copyWithHeadersCopy', 'paste');
    return result;
  }
}
