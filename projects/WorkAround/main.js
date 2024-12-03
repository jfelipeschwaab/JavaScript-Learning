// Importar as funções de salaryData.js
import { getRoles, getCompanies } from './modules/salaryData.js';

// Importar as funções de workAroundModule.js
import { 
  getAverageSalaryByRole, 
  getAverageSalaryByCompany, 
  getSalaryAtCompany, 
  getIndustryAverageSalary 
} from './modules/workAroundModule.js';

// Inicializar as variáveis companies e roles com as funções de salaryData.js
const companies = getCompanies();
const roles = getRoles();

// Criar os botões de input para cada empresa e cargo
renderInputButtons(companies, 'company');
renderInputButtons(roles, 'role');

// Função que cria os botões de input
function renderInputButtons(labels, groupName) {
  const container = document.createElement('section');
  container.setAttribute('id', `${groupName}Inputs`);

  let header = document.createElement('h3');
  header.innerText = `Select a ${groupName}`;
  container.appendChild(header);

  labels.forEach(label => {
    let divElement = document.createElement('div');
    divElement.setAttribute('class', 'option');

    let inputElement = document.createElement('input');
    inputElement.setAttribute('type', 'radio');
    inputElement.setAttribute('name', groupName);
    inputElement.setAttribute('value', label);
    divElement.appendChild(inputElement);

    let labelElement = document.createElement('label');
    labelElement.setAttribute('for', label);
    labelElement.innerText = label;
    divElement.appendChild(labelElement);

    // Atualizar os resultados quando o input for selecionado
    inputElement.addEventListener('click', updateResults);

    container.appendChild(divElement);
  });

  document.querySelector('main').prepend(container);
}

// Função que atualiza os resultados com base nas escolhas
function updateResults() {
  const company = document.querySelector("input[name='company']:checked")?.value;
  const role = document.querySelector("input[name='role']:checked")?.value;

  if (!company || !role) { return; }

  // Obter os valores calculados com as funções do workAroundModule
  const averageSalaryByRole = getAverageSalaryByRole(role);
  const averageSalaryByCompany = getAverageSalaryByCompany(company);
  const salary = getSalaryAtCompany(role, company);
  const industryAverageSalary = getIndustryAverageSalary();

  // Exibir os resultados na tela
  document.getElementById('salarySelected').innerText = `The salary for ${role}s at ${company} is $${salary}`;
  document.getElementById('salaryAverageByRole').innerText = `The industry average salary for ${role} positions is $${averageSalaryByRole}`;
  document.getElementById('salaryAverageByCompany').innerText = `The average salary at ${company} is $${averageSalaryByCompany}`;
  document.getElementById('salaryAverageIndustry').innerText = `The average salary in the Tech industry is $${industryAverageSalary}`;
}
