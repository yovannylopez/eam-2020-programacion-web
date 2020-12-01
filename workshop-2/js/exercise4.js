function data () {
  let firstName = formData.firstName.value;
  let lastName  = formData.lastName.value;
  let fullName  = `${firstName} ${lastName}`; // let fullName  = firstName + ' ' + lastName;
  let color     = 'red';
  let firstNameValidate = document.getElementById('firstName').style.borderColor = color;
  let lastNameValidate  = document.getElementById('lastName').style.borderColor = color;

  if (!firstName && !lastName) {
    firstNameValidate;
    lastNameValidate;

    return alert('First Name and Last Name cannot empty');
  } else if (!firstName) {
    firstNameValidate;

    return alert('First Name cannot empty');
  } else if (!lastName) {
    lastNameValidate;

    return alert('Last Name cannot empty');
  } else {

    return document.write(`Your Name: ${fullName}`); // return document.write('Your Name: ' + fullName);
  }
}