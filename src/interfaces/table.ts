import type { ReactNode } from "react";

/** Default row shape when a table is not given a more specific generic type. */
export type TableRowData = Record<string, ReactNode>;

/**
 * Cell value for a column: a static node, or a function that renders from the row.
 *
 * @typeParam T - Row data passed into the render function.
 */
export type ColumnContent<T> = ReactNode | ((rowData: T, rowIndex: number) => ReactNode);

/**
 * Props for a {@link Column} definition.
 *
 * @typeParam T - Row data shape used by `content` when it is a render function.
 */
export interface ColumnProps<T = TableRowData> {
  /** Column header label (required). */
  header: ReactNode;

  /**
   * Cell content for this column.
   * - Static node: shown in every row.
   * - Function: called with `(rowData, rowIndex)` to produce the cell.
   */
  content: ColumnContent<T>;
}

/**
 * Props for {@link Table}.
 *
 * @typeParam T - Shape of each item in `data`.
 */
export interface TableProps<T = TableRowData> {
  /** Rows to render in the table body. */
  data: T[];
  /** One or more {@link Column} children that define headers and cells. */
  children: ReactNode;
}
