import { Header } from '..';
import './Table.css';
import { companyData } from '../../api/data';

type CompanyTableProps = {
  data: typeof companyData;
};

const CompanyTable = ({ data }: CompanyTableProps) => {
  return (
    <div className="table">
      <Header text="Компании" />
      <section className="table-fields">
        <div>*</div>
        <div>Наименование</div>
        <div>Кол-во сотрудников</div>
        <div>Адрес</div>
      </section>
      {data.map((item) => (
        <section className="table-fields" key={item.name}>
          <div></div>
          <div>{item.name}</div>
          <div>{item.employees}</div>
          <div>{item.address}</div>
        </section>
      ))}
    </div>
  );
};

export default CompanyTable;
