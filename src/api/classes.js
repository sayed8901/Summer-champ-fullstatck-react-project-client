// get all classes
export const getAllClasses = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/classes`);
  const data = await response.json();
  return data;
};

// get all classes by sorting on available seats
export const getAllClassesBySeats = async () => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/classesByAvailableSeats`
  );
  const data = await response.json();
  return data;
};

// get all the approved classes
export const getAllApprovedClasses = async () => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/approvedClasses`
  );
  const data = await response.json();
  return data;
};



// save a selected class data
export const saveSelectedClass = (classData) => {

  fetch(`${import.meta.env.VITE_API_URL}/selectedClass/${classData?.bookingId}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(classData),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
};


// get all the selected classes
export const getAllSelectedClasses = async () => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/selectedClasses`
  );
  const data = await response.json();
  return data;
};

