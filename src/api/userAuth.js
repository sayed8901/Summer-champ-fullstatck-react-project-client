// save a user to database
export const saveUser = (user) => {
  const currentUser = {
    email: user.email,
    name: user.displayName,
    image: user.photoURL
  };

  fetch(`${import.meta.env.VITE_API_URL}/users/${user?.email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
};



// to get all the users
export const getAllUsers = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/users`);
  const data = await response.json();
  return data;
};




// to make role as an instructor
export const makeInstructor = async (email) => {
  const currentUser = {
    role: "instructor",
  };

  return await fetch(`${import.meta.env.VITE_API_URL}/users/${email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  }).then((res) => res.json());
};



// to make role as an admin
export const makeAdmin = async (email) => {
  const currentUser = {
    role: "admin",
  };

  return await fetch(`${import.meta.env.VITE_API_URL}/users/${email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  }).then((res) => res.json());
};



// get user role
export const getRole = async (email) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/users/${email}`);
  const user = await response.json();
  return user?.role;
};
