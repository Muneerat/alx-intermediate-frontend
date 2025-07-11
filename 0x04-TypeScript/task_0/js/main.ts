interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Munie",
  lastName: "Ola",
  age: 30,
  location: "UK",
};

const student2: Student = {
  firstName: "Fatima",
  lastName: "Ola",
  age: 20,
  location: "Canada",
};

const studentsList: Student[] = [student1, student2];

function renderTable(students: Student[]) {
  const table = document.createElement("table");
  table.border = "1";
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");

  const firstNameHeader = document.createElement("th");
  firstNameHeader.textContent = "First Name";

  const locationHeader = document.createElement("th");
  locationHeader.textContent = "Location";

  headerRow.appendChild(firstNameHeader);
  headerRow.appendChild(locationHeader);

  thead.appendChild(headerRow);
  table.appendChild(thead);

  const tbody = document.createElement("tr");

  students.forEach((student) => {
    const row = document.createElement("tr");
    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;

    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
  });
  table.appendChild(tbody);

  document.body.appendChild(table);
}

renderTable(studentsList);
