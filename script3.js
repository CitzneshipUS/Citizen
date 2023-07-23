let editingRowId = null; // Track the ID of the row being edited

function saveUserInfo(event) {
  event.preventDefault(); // Prevent form submission

  // Get form data
  const dob = document.forms["userInfoForm"]["dob"].value;
  const email = document.forms["userInfoForm"]["email"].value;
  const firstName = document.forms["userInfoForm"]["firstName"].value;
  const lastName = document.forms["userInfoForm"]["lastName"].value;
  const appointmentDate = document.forms["userInfoForm"]["appointmentDate"].value;
  const immigrationType = document.forms["userInfoForm"]["immigrationType"].value;


  if (editingRowId) {
    // Update the existing row in the records table
    const row = document.getElementById(editingRowId);
    row.cells[0].innerText = dob;
    row.cells[1].innerText = email;
    row.cells[2].innerText = firstName;
    row.cells[3].innerText = lastName;
    row.cells[4].innerText = appointmentDate;
    row.cells[5].innerText = immigrationType;
    row.cells[6].innerHTML = '<button class="edit-btn" onclick="editUserInfo(\'' + editingRowId + '\')">Edit</button>';
    editingRowId = null; // Reset the editing row ID
  } else {
    // Create a new row for the records table
    const recordsTableBody = document.getElementById("recordsTableBody");
    const newRow = recordsTableBody.insertRow();

    // Generate a unique ID for the new row
    const rowId = 'row-' + Date.now();
    newRow.id = rowId;

    // Insert the user information into the new row
    newRow.innerHTML = `
      <td>${dob}</td>
      <td>${email}</td>
      <td>${firstName}</td>
      <td>${lastName}</td>
      <td>${appointmentDate}</td>
      <td>${immigrationType}</td>
      <td><button class="edit-btn" onclick="editUserInfo('${rowId}')">Edit</button></td>
    `;
  }

  // Reset the form fields
  document.getElementById("userInfoForm").reset();
}

function editUserInfo(rowId) {
  // Retrieve the row being edited
  const row = document.getElementById(rowId);
  const cells = row.cells;

  // Populate the form fields with the row data
  document.forms["userInfoForm"]["dob"].value = cells[0].innerText;
  document.forms["userInfoForm"]["email"].value = cells[1].innerText;
  document.forms["userInfoForm"]["firstName"].value = cells[2].innerText;
  document.forms["userInfoForm"]["lastName"].value = cells[3].innerText;
  document.forms["userInfoForm"]["appointmentDate"].value = cells[4].innerText;
  document.forms["userInfoForm"]["immigrationType"].value = cells[5].innerText;

  // Set the editingRowId to the current row ID
  editingRowId = rowId;
}