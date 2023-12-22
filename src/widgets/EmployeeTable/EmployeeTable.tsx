import { Header } from '..';
import { EmployeesTableRow } from '../../shared/components';
import { useAppDispatch, useAppSelector } from '../../shared/hooks/redux';
import { saveSelectedEmployees } from '../../store/reducers/CompaniesSlice';

const EmployeeTable = () => {
  const selectedCompanies = useAppSelector((state) => state.selectedCompaniesReducer);
  const dispatch = useAppDispatch();
  return (
    <div>
      <Header
        text="Сотрудники"
        saveCallback={() => {
          selectedCompanies.forEach((company) => {
            dispatch(saveSelectedEmployees(company));
          });
        }}
        onChecked={() => {}}
        onUnChecked={() => {}}
      />
      <section className="table_row">
        <div className="table_cell"></div>
        <div className="table_cell">Имя</div>
        <div className="table_cell">Фамилия</div>
        <div className="table_cell">Должность</div>
        <div className="table_cell">Возраст</div>
      </section>
      <section className="table-fields">
        {selectedCompanies.map((company, index) => (
          <EmployeesTableRow key={index} company={company} />
        ))}
      </section>
    </div>
  );
};

export default EmployeeTable;
