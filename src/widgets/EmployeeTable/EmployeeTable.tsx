import { Header } from '..';
import { EmployeesTableRow } from '../../shared/components';
import { useAppSelector } from '../../shared/hooks/redux';

const EmployeeTable = () => {
  const companies = useAppSelector((state) => state.selectedCompaniesReducer);
  return (
    <div>
      <Header text="Сотрудники" />
      <section className="table_row">
        <div className="table_cell"></div>
        <div className="table_cell">Имя</div>
        <div className="table_cell">Фамилия</div>
        <div className="table_cell">Должность</div>
        <div className="table_cell">Возраст</div>
      </section>
      <section className="table-fields">
        {companies.map((company, CIndex) =>
          company.employees.map((employee, EIndex) => (
            <EmployeesTableRow key={EIndex} item={employee} companyId={company.id} />
          ))
        )}
      </section>
    </div>
  );
};

export default EmployeeTable;
