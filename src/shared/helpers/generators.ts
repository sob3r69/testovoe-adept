const generateEmployeeID = (companyName: string, employeesLength: number) => {
  return `${companyName.toLowerCase()}_employee-${employeesLength + 1}`;
};

const generateCompanyID = (companiesLength: number) => {
  return companiesLength + 1;
};

export { generateEmployeeID, generateCompanyID };
