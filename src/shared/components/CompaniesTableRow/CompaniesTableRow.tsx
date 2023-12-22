import { useState } from 'react';
import { TableCell } from '..';
import { changeAdress, changeName, setSelected } from '../../../store/reducers/CompaniesSlice';
// import { addSelected, deleteSelected } from '../../../store/reducers/SelectedUsersSlice';
import { useAppDispatch } from '../../hooks/redux';
import { Companies } from '../../types/DataTypes';
import { addSelected, deleteSelected } from '../../../store/reducers/SelectedCompaniesSlice';

type TableRowProps = {
  item: Companies;
};

const CompaniesTableRow = ({ item }: TableRowProps) => {
  const dispatch = useAppDispatch();
  return (
    <section
      className="table_row"
      style={{ backgroundColor: item.selected ? 'lightgreen' : 'white' }}
    >
      <div className="table_cell">
        <input
          type="checkbox"
          onChange={(event) => {
            if (event.target.checked) {
              dispatch(setSelected({ id: item.id, selected: true }));
              dispatch(addSelected(item));
            } else {
              dispatch(setSelected({ id: item.id, selected: false }));
              dispatch(deleteSelected(item));
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
      <TableCell
        allowChanges={true}
        value={item.address}
        onChange={(event) => {
          dispatch(changeAdress({ id: item.id, address: event.target.value }));
        }}
      />
    </section>
  );
};

export default CompaniesTableRow;
