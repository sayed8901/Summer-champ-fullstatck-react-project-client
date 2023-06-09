// save newClass data in database
export const addClass = async (newClassData) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/classes`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newClassData),
    });
    const data = await response.json();
    return data;
  };
  
  
  // get all addedClasses for individual instructor by email
  export const getAddedClasses = async email => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/classes?email=${email}`);
    const data = await response.json();
    return data;
  }




  // update class approval status
  export const updateStatus = async (id, status) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/rooms/status/${id}`, {
      method: 'PATCH',
      headers: {
          "content-type": "application/json",
      },
      body: JSON.stringify({status})
    });
    const data = await response.json();
    return data;
  };