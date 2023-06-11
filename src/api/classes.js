// get all classes
export const getAllClasses = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/classes`);
  const data = await response.json();
  return data;
};

// get all classes by sorting on enrolledStudents
export const getAllClassesByEnrolledStudents = async () => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/classesByEnrolledStudents`
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

  fetch(`${import.meta.env.VITE_API_URL}/selectedClasses/${classData?.bookingId}`, {
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


// delete a selected class data
export const deleteSelectedClass = async (id) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/selectedClasses/${id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
  })
  const result = await response.json();
  return result;
}

