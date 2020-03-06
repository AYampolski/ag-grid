import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-header',
  templateUrl: './header-custom.component.html',
  styleUrls: ['./header-custom.component.scss'],
})
export class HeaderCustomComponent implements OnInit {
  params;
  status: boolean;

  constructor() {}
  agInit(params): void {
    this.params = params;
    const selectedItems = this.params.api.getSelectedRows().length;
    const allColumns = this.params.api.getDisplayedRowCount();

    if (selectedItems && allColumns) {
      if (selectedItems === allColumns) {
        this.status = true;
      } else {
        this.status = false;
      }
    }

    this.params.api.addEventListener('rowSelected', this.update.bind(this));
  }
  public onAddButtonClick(): void {
    if (!this.status) {
      this.params.api.selectAll();
    } else {
      this.params.api.deselectAll();
    }
  }
  ngOnInit(): void {}

  update() {
    const listOfSelection = this.params.api.getSelectedRows().length;
    const allColumns = this.params.api.getDisplayedRowCount();

    if (!this.status && allColumns === listOfSelection) {
      this.status = true;
    } else if (this.status && allColumns !== listOfSelection) {
      this.status = false;
    }
  }
}
