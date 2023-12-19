import { Header } from '..';
import { CompaniesTableRow } from '../../shared/components';
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
        <CompaniesTableRow key={index} item={company} />
      ))}
      <button className="add_button">+</button>
    </div>
  );
};

export default CompanyTable;
