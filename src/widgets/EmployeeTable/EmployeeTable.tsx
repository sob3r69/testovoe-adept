import { Header } from '..';
import { useAppSelector } from '../../shared/hooks/redux';

const EmployeeTable = () => {
  const selected = useAppSelector((state) => state.selectedUsersReducer);
  return (
    <div>
      <Header text="Сотрудники" />
      <section className="table-fields">
        {selected.map((item, index) => (
          <div key={index}>
            <div>{item.name}</div>
            <div>{item.job}</div>
            <div>{item.age}</div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default EmployeeTable;
