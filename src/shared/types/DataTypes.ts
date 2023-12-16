export type Employee = {
  id: string;
  name: string;
  job: string;
  age: number;
};

export type Companies = {
  name: string;
  address: string;
  employees: Employee[];
};
