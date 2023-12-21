import { useState } from 'react';
import { Companies } from '../../types/DataTypes';
import { TableCell } from '..';
import { useAppDispatch } from '../../hooks/redux';
import { addEmployee, changeEmployeeName } from '../../../store/reducers/SelectedCompaniesSlice';
import generateEmployeeID from '../../helpers/generateEmployeeID';

type EmployeesTableRowProps = {
  company: Companies;
};

const EmployeesTableRow = ({ company }: EmployeesTableRowProps) => {
  const [selected, setSelected] = useState(false);
  const dispatch = useAppDispatch();

  return (
    <>
      {company.employees.map((item, index) => (
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
                  companyId: company.id,
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
        onClick={() =>
          dispatch(
            addEmployee({
              companyId: company.id,
              employee: { id: generateEmployeeID(company.name, company.employees.length) },
            })
          )
        }
      >
        +
      </button>
    </>
  );
};

export default EmployeesTableRow;
