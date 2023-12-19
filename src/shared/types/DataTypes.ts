export type Employee = {
  id: string;
  name: string;
  secondName: string;
  job: string;
  age: number;
};

export type Companies = {
  id: number;
  name: string;
  address: string;
  employees: Employee[];
};
