type TableCellProps = {
  value: string | number;
  allowChanges: boolean;
};

const TableCell = ({ value, allowChanges }: TableCellProps) => {
  return (
    <div className="table_cell">{allowChanges ? <input value={value} type="text" /> : value}</div>
  );
};

export default TableCell;
