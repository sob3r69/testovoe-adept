const generateEmployeeID = (companyName: string, employeesLength: number) => {
  return `${companyName.toLowerCase()}_employee-${employeesLength + 1}`;
};

export default generateEmployeeID;
