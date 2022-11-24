export class ColumnNumericTransformer {
    to(data: number): number {
      return data;
    }
    from(data: string | number): number {
      return typeof data === 'string' ? parseFloat(data) : data;
    }
  }