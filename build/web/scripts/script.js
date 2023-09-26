function listEmployees(){
    $.ajax({
        url:"https://testbed.jaysnellen.com:8443/EmployeeDatabaseServer/employee",
        method:"GET",
        dataType:"json",
        success: function(response){
            var table = document.createElement("table");
            table.style.border="1px solid";
            var headerRow = document.createElement("tr");
            jsonKey = ["Id", "Name", "Salary", "Age"];

            for(var index in jsonKey){
                var headerColumn = document.createElement("th");
                headerColumn.style.border="1px solid";
                headerColumn.innerHTML = jsonKey[index];
                headerRow.appendChild(headerColumn);
                table.appendChild(headerRow);
            }

            var database = response["employees"];

            for(let i = 0; i < database.length; i++){
                var tableRow = document.createElement("tr");
                var id = database[i].id;
                var name = database[i].name;
                var salary = database[i].salary;
                var age = database[i].age;
                var keys = [id, name, salary, age];

                for(var index in keys){
                    var tableData = document.createElement("td");
                    tableData.style.border="1px solid";
                    tableData.innerHTML = keys[index];
                    tableRow.appendChild(tableData);
                    table.appendChild(tableRow);
                }

            }

            $("#output").html(table);
        }
    });
}

function createEmployee(){
    $.ajax({
        url:"https://testbed.jaysnellen.com:8443/EmployeeDatabaseServer/employee",
        method:"POST",
        data:$("#employeeform").serialize(),
        dataType:"json",
        success: function(response){
            $("#employeeform")[0].reset();
            $("#output").html("Employee successfully added!");
        }
    });
}

function updateEmployee(){
    $.ajax({
       url:"https://testbed.jaysnellen.com:8443/EmployeeDatabaseServer/employee",
       method:"PUT",
       data:$("#employeeform").serialize(),
       dataType:"json",
       success: function(response){
           $("#employeeform")[0].reset();
           $("#output").html("Employee successfully updated!");
       }
    });
}

function deleteEmployee(){
    $.ajax({
        url:"https://testbed.jaysnellen.com:8443/EmployeeDatabaseServer/employee",
        method:"DELETE",
        data:$("#employeeform").serialize(),
        dataType:"json",
        success: function(response){
            $("#employeeform")[0].reset();
            $("#output").html("Employee deleted successfully!");
        }
    });
}