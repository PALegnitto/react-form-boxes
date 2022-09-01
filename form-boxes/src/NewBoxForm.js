
import { useState } from "react";
import createBox from "./BoxList";

function NewBoxForm() {


  const initialState = {
    height: "",
    width: "",
    backgroundColor: "",
  };


  const [formData, setFormData] = useState(initialState);

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value,

    }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    createBox(formData);
    setFormData(initialState);
  }
  return(
    <div>
      <form onSubmit={handleSubmit}>
      <label htmlFor="height">Height:</label>
      <input
        id="height"
        type="number"
        name="height"
        value={formData.height}
        onChange={handleChange}
      />

      <label htmlFor="width">Width:</label>
      <input
        id="width"
        type="number"
        name="width"
        value={formData.width}
        onChange={handleChange}
      />

      <label htmlFor="backgroundColor">Background Color:</label>
      <input
        id="backgroundColor"
        type="text"
        name="backgroundColor"
        value={formData.backgroundColor}
        onChange={handleChange}
      />

      <button>Add a new box!</button>
    </form>

    </div>
  )
}


export default NewBoxForm;