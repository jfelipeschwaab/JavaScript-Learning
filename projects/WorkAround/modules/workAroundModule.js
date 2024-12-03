// Importando funções de salaryData.js
import { getDataByRole, getDataByCompany } from './salaryData.js';
import salaryData from './salaryData.js';  // Importando o salaryData diretamente

// Função para calcular a média de salários
const calculateAverage = (arrayOfNumbers) => {
  let total = 0;
  arrayOfNumbers.forEach(number => total += number);
  return (total / arrayOfNumbers.length).toFixed(2);
}

// Funções de cálculo que dependem dos dados
export const getAverageSalaryByRole = (role) => {
  const roleData = getDataByRole(role);
  const salariesOfRole = roleData.map(obj => obj.salary);
  return calculateAverage(salariesOfRole);
}

export const getAverageSalaryByCompany = (company) => {
  const companyData = getDataByCompany(company);
  const salariesAtCompany = companyData.map(obj => obj.salary);
  return calculateAverage(salariesAtCompany);
}

export const getSalaryAtCompany = (role, company) => {
  const companyData = getDataByCompany(company);
  const roleAtCompany = companyData.find(obj => obj.role === role);
  return roleAtCompany ? roleAtCompany.salary : 0;
}

export const getIndustryAverageSalary = () => {
  const allSalaries = salaryData.map(obj => obj.salary); // Aqui agora usamos salaryData importado
  return calculateAverage(allSalaries);
}
