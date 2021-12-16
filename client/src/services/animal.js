import api from './apiConfig'

export const getAllAnimals = async () => {
  const resp = await api.get('/animals');
  return resp.data;
}

export const postAnimal = async (animalData) => {
  const resp = await api.post('./animals', {animal: animalData });
  return resp.data
};

export const deleteAnimal = async (id) => {
  await api.delete(`/animals/${id}`);
}
