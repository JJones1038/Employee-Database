# Employee-Database

This is a simple web application that allows users to manage employee data. Users can perform operations such as listing current employees, creating new employees, updating existing employee information, and deleting employees from the database. The application uses AJAX requests to communicate with the API, and it displays the retrieved employee data in a table format on the web page.

## Features
- List Employees: Click the "List" button to retrieve a list of current employees from the database by sending a GET request to the API. The employee data will be displayed in a table format on the web page.

- Create Employee: To create a new employee, enter the employee's information into the "Name," "Age," and "Salary" fields (the "ID" field can be ignored for new employees). Click the "Create" button to send a POST request to the API to add the new employee.

- Update Employee: To update an existing employee, enter the ID and the employee's new information into the form. Click the "Update" button to send a PUT request to the API to update the employee's information.

- Delete Employee: To delete an employee, only the ID is needed. Enter the ID and click the "Delete" button to send a DELETE request to the API to remove the employee from the database.

## AJAX Requests
- The client communicates with the API using AJAX requests powered by jQuery.
- To send data with the request, the input form is serialized to a query string, and this string is added to the AJAX request object in the "data" property.
- Ensure that the "name" attributes assigned to the form elements match the parameter names expected by the API: "id," "name," "age," and "salary."
