import { Injectable } from '@angular/core';
import { ColumnDefs } from '@models/column-def.model';
import { ImageFormatterComponent } from '@app/components/image-formatter/image-formatter.component';

@Injectable({
  providedIn: 'root',
})
export class ColumnDefsService {
  getColumnDefs(): ColumnDefs[] {
    return [
      {
        headerName: '',
        field: 'thumbnails',
        autoHeight: true,
        cellRendererFramework: ImageFormatterComponent,
        width: 150,
      },
      { headerName: 'Published on', field: 'publishedAt', width: 150 },
      { headerName: 'Video Title', field: 'title' },
      { headerName: 'Description', field: 'description' },
    ];
  }

  /**
   * Columns with checkbox
   */
  getModeColumnDefs(): ColumnDefs[] {
    return [
      {
        headerName: '',
        field: 'select',
        cellRenderer: 'customHeaderComponent',
        headerComponent: 'testHeader',
        width: 40,
      },
      {
        headerName: '',
        field: 'thumbnails',
        autoHeight: true,
        cellRendererFramework: ImageFormatterComponent,
        width: 150,
      },
      { headerName: 'Published on', field: 'publishedAt', width: 150 },
      { headerName: 'Video Title', field: 'title' },
      { headerName: 'Description', field: 'description' },
    ];
  }
}
