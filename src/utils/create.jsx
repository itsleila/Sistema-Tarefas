import { addDoc, collection } from 'firebase/firestore';
import { db } from '../infra/firebase';

export async function inserirTarefa(novaTarefa) {
  const docRef = await addDoc(collection(db, 'tarefas'), novaTarefa);
  return docRef.id;
}
