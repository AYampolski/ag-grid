import { ImageFormatterComponent } from '@components/image-formatter/image-formatter.component';

export class ColumnDefs {
  field: string;
  headerName?: string;
  autoHeight?: boolean;
  cellRenderer?: string;
  headerComponent?: string;
  cellRendererFramework?: typeof ImageFormatterComponent | string;
  width?: number;
}
