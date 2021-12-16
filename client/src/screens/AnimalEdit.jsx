import {useState, useEffect} from 'react'
import { useParams } from 'react-router'

export default function AnimalEdit({animals, handleAnimalUpdate}) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    seen: '',
    notes: ''
    //image_url: '',
  })

  const { name, description, seen, notes } = formData
  const { id } = useParams();
    
  useEffect(() => {
    const prefillFormData = () => {
      const animalItem = animals.find(animal => animal.id === Number(id))
      setFormData({ name: animalItem.name, description: animalItem.description, seen: animalItem.seen, notes: animalItem.notes })
    };
    if (animals.length) prefillFormData();
  }, [animals, id])


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
      handleAnimalUpdate(id, formData);
    }}
    >
      <h3>Correct your Animal info here:</h3>
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
