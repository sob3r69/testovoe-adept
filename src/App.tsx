import './App.css';
import { companyData } from './api/data';
import { CompanyTable, EmployeeTable } from './widgets';

function App() {
  return (
    <>
      <main>
        <CompanyTable data={companyData} />
        <EmployeeTable />
      </main>
    </>
  );
}

export default App;
