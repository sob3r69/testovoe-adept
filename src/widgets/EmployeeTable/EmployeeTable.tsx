import { Header } from '..';

const EmployeeTable = () => {
  return (
    <div>
      <Header text="Сотрудники" />
      <section className="table-fields">
        <div>*</div>
        <div>Фамилия</div>
        <div>Имя</div>
        <div>Должность</div>
      </section>
    </div>
  );
};

export default EmployeeTable;
