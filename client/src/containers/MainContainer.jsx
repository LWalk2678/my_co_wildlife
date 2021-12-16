import { useState, useEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import AnimalCreate from '../screens/AnimalCreate'
import AnimalEdit from '../screens/AnimalEdit'
import Animals from '../screens/Animals'
import { getAllAnimals, postAnimal, deleteAnimal } from '../services/animal'

export default function MainContainer() {
  const [animals, setAnimals] = useState([])
  //const history = useHistory();
  
  useEffect(() => {
    const fetchAnimals = async () => {
      const animalList = await getAllAnimals();
      setAnimals(animalList);
    };
    fetchAnimals();
  }, [])

  const handleAnimalCreate = async (formData) => {
    const newAnimal = await postAnimal(formData);
    setAnimals((prevState) => [...prevState, newAnimal]);
    //history.push('/animals');
  };

  const handleAnimalDelete = async (id) => {
    await deleteAnimal(id);
    setAnimals(prevState=> prevState.filter(animal => animal.id !== id))
  }

  return (
    <div>
      <Switch>
        <Route path='/animals/:id/edit'>
          <AnimalEdit animals={animals}/>
        </Route>
        <Route path='/animals/new'>
          <AnimalCreate handleAnimalCreate={handleAnimalCreate}/>
        </Route>
        <Route path='/animals'>
          <Animals animals={animals} handleAnimalDelete={handleAnimalDelete}/>
        </Route>
        <Route path='/'>
          <h1>Home</h1>
        </Route>
      </Switch>
    </div>
  )
}
