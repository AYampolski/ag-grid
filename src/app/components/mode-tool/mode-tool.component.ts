import { Component } from '@angular/core';
import { IToolPanel, IToolPanelParams } from '@ag-grid-community/all-modules';
import { ColumnDefsService } from '@services/column-defs.service';
import { ColumnDefs } from '@models/column-def.model';

@Component({
  selector: 'app-mode-tool',
  templateUrl: './mode-tool.component.html',
  styleUrls: ['./mode-tool.component.scss'],
})
export class ModeToolComponent implements IToolPanel {
  private params;
  private defaultColumn: ColumnDefs[];
  private withSelectedColumn: ColumnDefs[];

  constructor(private columnService: ColumnDefsService) {
    this.defaultColumn = this.columnService.getColumnDefs();
    this.withSelectedColumn = this.columnService.getModeColumnDefs();
  }

  agInit(params: IToolPanelParams): void {
    this.params = params;
  }

  onChangeMode(e) {
    if (!e.target.checked) {
      this.params.api.setColumnDefs(this.defaultColumn);
    } else {
      this.params.api.setColumnDefs(this.withSelectedColumn);
    }
  }

  refresh(): void {
    throw new Error('Method not implemented.');
  }
}
