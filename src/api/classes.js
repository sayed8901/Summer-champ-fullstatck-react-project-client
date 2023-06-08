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
