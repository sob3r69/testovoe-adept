import { useState } from 'react';
import { Employee } from '../../types/DataTypes';
import { TableCell } from '..';
import { useAppDispatch } from '../../hooks/redux';
import { addEmployee, changeEmployeeName } from '../../../store/reducers/SelectedCompaniesSlice';

type EmployeesTableRowProps = {
  // item: Employee;
  companyId: number;
  employees: Employee[];
};

const EmployeesTableRow = ({ companyId, employees }: EmployeesTableRowProps) => {
  const [selected, setSelected] = useState(false);
  const dispatch = useAppDispatch();

  return (
    <>
      {employees.map((item, index) => (
        <section
          key={index}
          className="table_row"
          style={{ backgroundColor: selected ? 'lightgreen' : 'white' }}
        >
          <div className="table_cell">
            <input
              type="checkbox"
              onChange={(event) => {
                if (event.target.checked) {
                  setSelected(true);
                } else {
                  setSelected(false);
                }
              }}
            />
          </div>
          <TableCell
            allowChanges={true}
            value={item.name}
            onChange={(event) =>
              dispatch(
                changeEmployeeName({
                  companyId: companyId,
                  employeeId: item.id,
                  name: event.target.value,
                })
              )
            }
          />
          <TableCell allowChanges={true} value={item.secondName} />
          <TableCell allowChanges={true} value={item.job} />
          <TableCell allowChanges={true} value={item.age} />
        </section>
      ))}
      <button
        className="add_button"
        onClick={() => dispatch(addEmployee({ companyId: companyId, employee: {} }))}
      >
        +
      </button>
    </>
  );
};

export default EmployeesTableRow;
