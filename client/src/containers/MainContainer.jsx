import { useState, useEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import AnimalCreate from '../screens/AnimalCreate'
import Animals from '../screens/Animals'
import { getAllAnimals, postAnimal } from '../services/animal'

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

  return (
    <div>
      <Switch>
        <Route path='/animals/new'>
          <AnimalCreate handleAnimalCreate={handleAnimalCreate}/>
        </Route>
        <Route path='/animals'>
          <Animals animals={animals} />
        </Route>
        <Route path='/'>
          <h1>Home</h1>
        </Route>
      </Switch>
    </div>
  )
}
