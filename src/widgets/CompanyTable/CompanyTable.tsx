import { Header } from '..';
import { TableCell } from '../../shared/components';
import { useAppSelector } from '../../shared/hooks/redux';

const CompanyTable = () => {
  const companies = useAppSelector((state) => state.companiesReducer);
  console.log(companies);
  return (
    <div className="table">
      <Header text="Компании" />
      <section className="table_row">
        <div className="table_cell"></div>
        <div className="table_cell">Наименование</div>
        <div className="table_cell">Кол-во сотрудников</div>
        <div className="table_cell">Адрес</div>
      </section>
      {companies.map((item) => (
        <section className="table_row" key={item.name}>
          <div className="table_cell">
            <input type="checkbox" checked={item.checked} />
          </div>
          <TableCell allowChanges={true} value={item.name} />
          <TableCell allowChanges={false} value={item.employees.length} />
          <TableCell allowChanges={true} value={item.address} />
        </section>
      ))}
    </div>
  );
};

export default CompanyTable;
