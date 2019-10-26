function getUserName() {
  var nameField = document.getElementById('nameField').value;
  var result = document.getElementById('result');


  console.log(nameField);
  console.log(result);

  if (nameField.length < 3) {
    result.textContent = 'Username must contain at least 3 characters';
    //alert('Username must contain at least 3 characters');
  } else {
    result.textContent = 'Your username is: ' + nameField;
    //alert(nameField);
  }
}

var button = document.getElementById("subButton");

button.onclick = function() {
      getUserName()
      return false;
  };

// $( document ).ready(function() {
//   var message = $("#nameField");
//   console.log(message);
//   $( "#subButton" ).click(function() {
//       alert(message.value);
//       });
// });
