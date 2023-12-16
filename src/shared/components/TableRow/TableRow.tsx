import { TableCell } from '..';
import { changeName } from '../../../store/reducers/CompaniesSlice';
import { addSelected, deleteSelected } from '../../../store/reducers/SelectedUsersSlice';
import { useAppDispatch } from '../../hooks/redux';
import { Companies } from '../../types/DataTypes';

type TableRowProps = {
  item: Companies;
};

const TableRow = ({ item }: TableRowProps) => {
  const dispatch = useAppDispatch();
  return (
    <section className="table_row">
      <div className="table_cell">
        <input
          type="checkbox"
          onChange={(event) => {
            if (event.target.checked) {
              item.employees.forEach((employee) => {
                dispatch(addSelected(employee));
              });
            } else {
              item.employees.forEach((employee) => {
                dispatch(deleteSelected(employee));
              });
            }
          }}
        />
      </div>
      <TableCell
        allowChanges={true}
        value={item.name}
        onChange={(event) => {
          dispatch(changeName({ id: item.id, name: event.target.value }));
        }}
      />
      <TableCell allowChanges={false} value={item.employees.length} />
      <TableCell allowChanges={true} value={item.address} />
    </section>
  );
};

export default TableRow;
