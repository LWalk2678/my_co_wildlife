import {useState} from 'react'

export default function AnimalCreate({handleAnimalCreate}) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    seen: '',
    notes: ''
    //image_url: '',
  })

  const {name, description, seen, notes} = formData

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
      [description]: value,
      [seen]: value,
      [notes]: value,
      //[image_url]: value,
    }));
  };


  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleAnimalCreate(formData);
    }}
    >
      <h3>Add your Animal info here:</h3>
      <label> Name:
        <input type='text' name='name' value={name} onChange={handleChange}/>
      </label>
      <label> Description:
        <input type='text' name='description' value={description} onChange={handleChange}/>
      </label>
      <label> When Seen:
        <input type='text' name='seen' value={seen} onChange={handleChange}/>
      </label>
      <label> Notes:
        <input type='text' name='notes' value={notes} onChange={handleChange}/>
      </label>
      {/* <label> Image URL:
        <input type='text' name='image_url' value={image_url} onChange={handleChange}/>
      </label> */}
      <button>Submit</button>
    </form>
  )
}
