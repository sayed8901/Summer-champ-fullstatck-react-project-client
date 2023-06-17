// save a user to database
export const saveUser = (user) => {
  const currentUser = {
    email: user.email,
    name: user.displayName,
    image: user.photoURL,
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
    `${import.meta.env.VITE_API_URL}/users/${email}`)
  const user = await response.json();
  return user?.role;
};

// export const getRole = async (email) => {
//   if(email){
//     const response = await fetch(
//       `${import.meta.env.VITE_API_URL}/users/${email}`)
//     const user = await response.json();
//     return user?.role;
//   }
//   else{
//     return "";
//   }
// };






// to make class status set to "approved"
export const makeApproved = async (id) => {
  const approvalStatus = {
    status: "approved",
  };

  return await fetch(`${import.meta.env.VITE_API_URL}/classes/${id}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(approvalStatus),
  }).then((res) => res.json());
};


// to make class status set to "denied"
export const makeDenied = async (id) => {
  const approvalStatus = {
    status: "denied",
  };

  return await fetch(`${import.meta.env.VITE_API_URL}/classes/${id}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(approvalStatus),
  }).then((res) => res.json());
};





// save a instructor to database
export const saveAsInstructor = (user) => {
  const instructorInfo = {
    image: user.image,
    name: user.name,
    email: user.email,
  };

  fetch(`${import.meta.env.VITE_API_URL}/instructors/${user?.email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("access-token")}`,
    },
    body: JSON.stringify(instructorInfo),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
};
