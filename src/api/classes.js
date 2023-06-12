// get all instructors
export const getAllInstructors = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/instructors`);
  const data = await response.json();
  return data;
};





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

