function log() {
  const username = document.getElementById("name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const dropdown = document.getElementById("dropdown");
  console.log(
    "Name: " +
      username.value +
      "| Email: " +
      email.value +
      "| Phone Number:" +
      phone.value +
      "| How did you find us:" +
      dropdown.value
  );
}

// document.getElementById("btn").addEventListener("click", log);
