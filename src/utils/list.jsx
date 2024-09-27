import { collection, getDocs } from 'firebase/firestore';
import { db } from '../infra/firebase';

export async function listarTarefas() {
  let retorno;
  await getDocs(collection(db, 'tarefas')).then((querySnapshot) => {
    retorno = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  });
  return retorno;
}
