import { Component } from '@angular/core';
import { IHeaderAngularComp } from '@ag-grid-community/angular';

@Component({
  templateUrl: './header-custom.component.html',
  styleUrls: ['./header-custom.component.scss'],
})
export class HeaderCustomComponent implements IHeaderAngularComp {
  public params;
  public sorted: string;
  select = false;

  agInit(params): void {
    this.params = params;
  }
}
