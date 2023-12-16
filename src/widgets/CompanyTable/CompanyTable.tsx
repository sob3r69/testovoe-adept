import { Header } from '..';
import { TableCell } from '../../shared/components';
import { useAppDispatch, useAppSelector } from '../../shared/hooks/redux';
import { changeName } from '../../store/reducers/CompaniesSlice';
import { addSelected, deleteSelected } from '../../store/reducers/SelectedUsersSlice';

const CompanyTable = () => {
  const companies = useAppSelector((state) => state.companiesReducer);
  const dispatch = useAppDispatch();
  return (
    <div className="table">
      <Header text="Компании" />
      <section className="table_row">
        <div className="table_cell"></div>
        <div className="table_cell">Наименование</div>
        <div className="table_cell">Кол-во сотрудников</div>
        <div className="table_cell">Адрес</div>
      </section>
      {companies.map((item, index) => (
        <section className="table_row" key={index}>
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
      ))}
    </div>
  );
};

export default CompanyTable;
