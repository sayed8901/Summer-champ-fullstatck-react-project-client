// get all instructors
export const getAllInstructors = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/instructors`);
    const data = await response.json();
    return data;
  };