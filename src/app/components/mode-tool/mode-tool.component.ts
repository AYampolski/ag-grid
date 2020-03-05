import { Component } from '@angular/core';

import { IToolPanel, IToolPanelParams } from '@ag-grid-community/all-modules';
import { ImageFormatterComponent } from '../image-formatter/image-formatter.component';
@Component({
  selector: 'app-mode-tool',
  templateUrl: './mode-tool.component.html',
  styleUrls: ['./mode-tool.component.scss'],
})
export class ModeToolComponent implements IToolPanel {
  private params;

  agInit(params: IToolPanelParams): void {
    this.params = params;
  }

  onChangeMode(e) {
    if (!e.target.checked) {
      this.params.api.setColumnDefs(this.columnDefsNormalWithoutSelection());
    } else {
      this.params.api.setColumnDefs(this.columnDefsNormal());
    }
  }

  columnDefsNormal() {
    return [
      {
        headerName: '[checked]',
        field: 'select',
        width: 100,
        cellRenderer: 'customHeaderComponent',
        sortable: true,
      },
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
  }

  columnDefsNormalWithoutSelection() {
    return [
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
  }

  refresh(): void {
    throw new Error('Method not implemented.');
  }
}
