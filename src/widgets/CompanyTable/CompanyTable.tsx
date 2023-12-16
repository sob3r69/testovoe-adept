import { Header } from '..';
import { TableRow } from '../../shared/components';
import { useAppSelector } from '../../shared/hooks/redux';

const CompanyTable = () => {
  const companies = useAppSelector((state) => state.companiesReducer);
  return (
    <div className="table">
      <Header text="Компании" />
      <section className="table_row">
        <div className="table_cell"></div>
        <div className="table_cell">Наименование</div>
        <div className="table_cell">Кол-во сотрудников</div>
        <div className="table_cell">Адрес</div>
      </section>
      {companies.map((company, index) => (
        <TableRow key={index} item={company} />
      ))}
    </div>
  );
};

export default CompanyTable;
