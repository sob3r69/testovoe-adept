import { Header } from '..';
import { CompaniesTableRow } from '../../shared/components';
import { generateCompanyID } from '../../shared/helpers/generators';
import { useAppDispatch, useAppSelector } from '../../shared/hooks/redux';
import { addCompany, setSelected } from '../../store/reducers/CompaniesSlice';
import { addSelected, deleteSelected } from '../../store/reducers/SelectedCompaniesSlice';

const CompanyTable = () => {
  const companies = useAppSelector((state) => state.companiesReducer);
  const dispatch = useAppDispatch();
  return (
    <div className="table">
      <Header
        text="Компании"
        onChecked={() => {
          companies.forEach((company) => {
            dispatch(addSelected(company));
            dispatch(setSelected({ id: company.id, selected: true }));
          });
        }}
        onUnChecked={() => {
          companies.forEach((company) => {
            dispatch(deleteSelected(company));
            dispatch(setSelected({ id: company.id, selected: false }));
          });
        }}
      />
      <section className="table_row">
        <div className="table_cell"></div>
        <div className="table_cell">Наименование</div>
        <div className="table_cell">Кол-во сотрудников</div>
        <div className="table_cell">Адрес</div>
      </section>
      {companies.map((company, index) => (
        <CompaniesTableRow key={index} item={company} />
      ))}
      <button
        className="add_button"
        onClick={() =>
          dispatch(addCompany({ id: generateCompanyID(companies.length), employees: [] }))
        }
      >
        +
      </button>
    </div>
  );
};

export default CompanyTable;
