type TableCellProps = {
  value: string | number;
  allowChanges: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const TableCell = ({ value, allowChanges, onChange }: TableCellProps) => {
  return (
    <div className="table_cell">
      {allowChanges ? <input defaultValue={value} type="text" onChange={onChange} /> : value}
    </div>
  );
};

export default TableCell;
