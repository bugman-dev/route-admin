import { Children, isValidElement, type ReactElement, type ReactNode } from "react";
import appColors from "@ra/assets/colors/appColors";
import type { ColumnContent, ColumnProps, TableProps, TableRowData } from "@ra/interfaces/table";

// ---------------------------------------------------------------------------
// Column marker
// Used so Column children can be detected reliably across HMR / bundler copies
// where referential equality (`child.type === Column`) may fail.
// ---------------------------------------------------------------------------

const COLUMN_MARKER = "__isTableColumn";

type ColumnComponent = ((props: ColumnProps) => null) & {
  displayName?: string;
  [COLUMN_MARKER]?: boolean;
};

/**
 * Declarative column definition for {@link Table}.
 * Renders nothing on its own — {@link Table} reads its props to build headers and cells.
 *
 * @typeParam T - Row data shape for this column's `content` renderer.
 *
 * @example
 * ```tsx
 * <Column header="Name" content={(row) => row.name} />
 * <Column header="Status" content="Active" />
 * ```
 */
export function Column<T = TableRowData>(_props: ColumnProps<T>) {
  return null;
}

Column.displayName = "Column";
(Column as ColumnComponent)[COLUMN_MARKER] = true;

// ---------------------------------------------------------------------------
// Internals
// ---------------------------------------------------------------------------

/**
 * Returns whether a React element type was marked as a {@link Column}.
 */
function hasColumnMarker(type: unknown): boolean {
  if (typeof type !== "function" && (typeof type !== "object" || type === null)) {
    return false;
  }
  return Boolean((type as ColumnComponent)[COLUMN_MARKER]);
}

/**
 * Type guard for valid {@link Column} children of {@link Table}.
 */
function isColumnElement<T>(child: unknown): child is ReactElement<ColumnProps<T>> {
  if (!isValidElement(child)) return false;

  const type = child.type;
  if (type === Column || hasColumnMarker(type)) return true;

  if (
    typeof type === "object" &&
    type !== null &&
    (type as { displayName?: string }).displayName === "Column"
  ) {
    return true;
  }

  // Last resort: accept elements that expose Column-like props
  const props = child.props as Partial<ColumnProps<T>> | null;
  return props != null && "header" in props && "content" in props;
}

/**
 * Resolves a cell's display value for a given row.
 * Invokes `content` when it is a render function; otherwise returns it as-is.
 */
function resolveCell<T>(content: ColumnContent<T>, row: T, rowIndex: number): ReactNode {
  if (typeof content === "function") {
    return content(row, rowIndex);
  }
  return content;
}

/**
 * Custom cell nodes (elements) own their typography; primitives use table defaults.
 */
function isCustomCellContent(node: ReactNode): boolean {
  return isValidElement(node);
}

/**
 * Builds `className` for a header cell, including rounded corners on the ends.
 */
function headerCellClassName(columnIndex: number, columnCount: number): string {
  return [
    "px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide",
    columnIndex === 0 ? "rounded-tl-[11px]" : "",
    columnIndex === columnCount - 1 ? "rounded-tr-[11px]" : "",
  ]
    .filter(Boolean)
    .join(" ");
}

// ---------------------------------------------------------------------------
// Table
// ---------------------------------------------------------------------------

/**
 * Data table that builds columns from {@link Column} children.
 *
 * @typeParam T - Shape of each item in `data`.
 *
 * @example
 * ```tsx
 * <Table data={rows}>
 *   <Column header="Name" content={(row) => row.name} />
 *   <Column header="Age" content={(row) => row.age} />
 * </Table>
 * ```
 */
export default function Table<T = TableRowData>({ data, children }: TableProps<T>) {
  const columns = Children.toArray(children).filter(isColumnElement<T>);

  return (
    <div
      className="w-full overflow-x-auto rounded-[11px] border bg-white"
      style={{ borderColor: appColors.mainBorder }}
    >
      <table className="w-full border-collapse text-left">
        <thead>
          <tr style={{ backgroundColor: appColors.pageBackground }}>
            {columns.map((column, columnIndex) => (
              <th
                key={columnIndex}
                className={headerCellClassName(columnIndex, columns.length)}
                style={{
                  color: appColors.textGrey,
                  borderBottom: `1px solid ${appColors.mainBorder}`,
                }}
              >
                {column.props.header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              style={{
                borderBottom:
                  rowIndex < data.length - 1 ? `1px solid ${appColors.mainBorder}` : undefined,
              }}
            >
              {columns.map((column, columnIndex) => {
                const cellContent = resolveCell(column.props.content, row, rowIndex);
                const isCustom = isCustomCellContent(cellContent);

                return (
                  <td
                    key={columnIndex}
                    className={isCustom ? "px-4 py-3" : "px-4 py-3 text-sm font-semibold"}
                    style={isCustom ? undefined : { color: appColors.backgroudSolid }}
                  >
                    {cellContent}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
