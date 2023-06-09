import Cookies from "js-cookie";

export const whoami = async function () {
  let response = await fetch('api/users/whoami', {
    method: 'GET'
  })

  if (response.status === 200) {
    const authStatus = await response.text() === "Anonymous"
      ? "Anonymous"
      : "Authorized";

    Cookies.set("auth_status", authStatus);

    return authStatus === 'Authorized';
  }
}

export const login = async function (email, password) {
  let user = {
    Email: email,
    Password: password
  }

  let response = await fetch('api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(user)
  })

  if (response.status === 200) {
    Cookies.set("auth_status", 'Authorized');
    return true;
  }

  return false;
}

export const register = async function (email, password) {
  let user = {
    Email: email,
    Password: password
  }

  let response = await fetch('api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(user)
  })

  if (response.status === 200) {
    Cookies.set("auth_status", 'Authorized');
    return true;
  }

  return false;
}

export const getUser = async function(){
  let response = await fetch('/api/users', {
    method: 'GET'
  })

  if (response.status === 200){
    return response.json();
  }

  return null;
}

export const getAllUsers = async function() {
  var response = await fetch('api/users/all', {
    method: 'GET'
  });

  if (response.status === 200){
    return await response.json();
  }

  throw new Error();
}

export const deleteUser = async function(userId){
  let response = await fetch(`api/users/${userId}`, {
    method: 'DELETE'
  })

  return response.status === 200;
}

export const updateUserRole = async function(userId, role) {
  var json = JSON.stringify({
    id: userId,
    role: role
  })

  console.log(json);

  let response = await fetch(`api/users/update-role`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: json
  })

  return response.status === 200;
}

export const updateUser = async function(user){
  var formData = new FormData();
  console.log(user);
  formData.append('Login', user.Login);
  formData.append('Email', user.Email);
  formData.append('Description', user.Description);
  formData.append('Image', user.Image);

  let response = await fetch('/api/users', {
    method: 'PUT',
    body: formData
  })

  return response.status === 200;
}

export const logout = async function () {
  let response = await fetch('api/users/logout');

  if (response.status === 200) {
    Cookies.set('auth_status', 'Anonymous');
  }
}