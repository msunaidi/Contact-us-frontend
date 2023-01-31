function log() {
  const username = document.getElementById("name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const dropdown = document.getElementById("dropdown");

  const xhr = new XMLHttpRequest();
  xhr.open("POST", "http://localhost:4000/submit");
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);
      console.log(response);
    }
  };

  const data = JSON.stringify({
    name: username.value,
    email: email.value,
    phone: phone.value,
    foundMethod: dropdown.value,
  });

  xhr.send(data);
}
