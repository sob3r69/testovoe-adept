import { Header } from '..';
import { companyData } from '../../api/data';
import { TableCell } from '../../shared/components';

type CompanyTableProps = {
  data: typeof companyData;
};

const CompanyTable = ({ data }: CompanyTableProps) => {
  return (
    <div className="table">
      <Header text="Компании" />
      <section className="table_row">
        <div className="table_cell"></div>
        <div className="table_cell">Наименование</div>
        <div className="table_cell">Кол-во сотрудников</div>
        <div className="table_cell">Адрес</div>
      </section>
      {data.map((item) => (
        <section className="table_row" key={item.name}>
          <div className="table_cell">
            <input type="checkbox" />
          </div>
          <TableCell allowChanges={true} value={item.name} />
          <TableCell allowChanges={false} value={item.employees} />
          <TableCell allowChanges={true} value={item.address} />
        </section>
      ))}
    </div>
  );
};

export default CompanyTable;
