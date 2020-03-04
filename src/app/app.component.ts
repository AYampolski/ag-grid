import { Component } from '@angular/core';
import { CommonService } from '@services/common.service';
import { AllModules, Module } from '@ag-grid-enterprise/all-modules';
import { ImageFormatterComponent } from '@components/image-formatter/image-formatter.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'testGrid';
  rowData;
  public modules: Module[] = AllModules;
  getRowHeight;
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

  constructor(private apiService: CommonService) {}

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
