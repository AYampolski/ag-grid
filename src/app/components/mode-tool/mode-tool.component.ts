import { Component, ViewChild, ViewContainerRef } from '@angular/core';

import { IToolPanel, IToolPanelParams } from '@ag-grid-community/all-modules';
@Component({
  selector: 'app-mode-tool',
  templateUrl: './mode-tool.component.html',
  styleUrls: ['./mode-tool.component.scss'],
})
export class ModeToolComponent implements IToolPanel {
  private params: IToolPanelParams;
  total = 4;
  private numMedals: number;
  private numGold: number;
  private numSilver: number;
  private numBronze: number;

  agInit(params: IToolPanelParams): void {
    this.params = params;

    this.numMedals = 0;
    this.numGold = 0;
    this.numSilver = 0;
    this.numBronze = 0;

    // calculate stats when new rows loaded, i.e. onModelUpdated
    this.params.api.addEventListener(
      'modelUpdated',
      this.updateTotals.bind(this)
    );
  }

  updateTotals(): void {
    var numGold = 0,
      numSilver = 0,
      numBronze = 0;

    this.params.api.forEachNode(function(rowNode) {
      let data = rowNode.data;
      if (data.gold) numGold += data.gold;
      if (data.silver) numSilver += data.silver;
      if (data.bronze) numBronze += data.bronze;
    });

    this.numMedals = numGold + numSilver + numBronze;
    this.numGold = numGold;
    this.numSilver = numSilver;
    this.numBronze = numBronze;
  }

  refresh(): void {
    throw new Error('Method not implemented.');
  }
}
