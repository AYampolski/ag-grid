import { Component } from '@angular/core';
import { CommonService } from '@services/common.service';
import { AllModules, Module } from '@ag-grid-enterprise/all-modules';
import { ImageFormatterComponent } from '@components/image-formatter/image-formatter.component';
import { TotalToolComponent } from './components/total-tool/total-tool.component';
import { ModeToolComponent } from './components/mode-tool/mode-tool.component';
import { SelectedToolComponent } from './components/selected-tool/selected-tool.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'testGrid';
  defaultColDef;
  rowData;
  public modules: Module[] = AllModules;
  getRowHeight;
  sideBar;
  frameworkComponents;
  private gridApi;
  private gridColumnApi;
  columnDefs = [
    {
      headerName: '',
      field: 'thumbnails',
      autoHeight: true,
      cellRendererFramework: ImageFormatterComponent,
    },
    { headerName: 'Published on', field: 'publishedAt' },
    { headerName: 'Video Title', field: 'title' },
    { headerName: 'Description', field: 'description' },
  ];

  constructor(private apiService: CommonService) {
    this.defaultColDef = {
      enableValue: true,
      enableRowGroup: true,
      enablePivot: true,
      sortable: true,
      filter: true,
    };

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
          labelDefault: 'Total Stats',
          labelKey: 'selectedStats',
          iconKey: 'columns',
          toolPanel: 'selectedToolComponent',
        },
      ],
      position: 'right',
      defaultToolPanel: 'modstats',
    };

    this.frameworkComponents = {
      totalToolComponent: TotalToolComponent,
      modeToolComponent: ModeToolComponent,
      selectedToolComponent: SelectedToolComponent,
    };
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.apiService.getFormateData().subscribe(data => {
      this.rowData = data;
      console.log(data);
    });
  }

  getContextMenuItems(params) {
    if (params.column.colDef.headerName !== 'Video Title') {
      return;
    }
    const result = [
      {
        name: 'Open in new tab ' + params.column.colDef.headerName,
        action: function() {
          window.open(params.value, '_blank');
        },
        cssClasses: ['redFont', 'bold'],
      },
    ];
    return result;
  }
}
