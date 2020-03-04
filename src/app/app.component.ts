import { Component } from '@angular/core';
import { CommonService } from '@services/common.service';
import { ImageFormatterComponent } from '@components/image-formatter/image-formatter.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'testGrid';
  rowData;
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
}
