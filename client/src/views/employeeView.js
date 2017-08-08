var EmployeeView = function(employees){
  this.render(employees);
}

EmployeeView.prototype = {
  render: function(employees){
    
    console.log(employees);
    employees.forEach( function(employee){
      var li = document.createElement('li');
      var text = document.createElement('p');
      var ul = document.getElementById('employees');
      text.innerText = employee.name + ": " + '"' + employee.department + '"'; // name and department defined in index.html
      li.appendChild(text);
      ul.appendChild(li);
    })
  }
}

 module.exports = EmployeeView;