import { deleteDoc, doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../infra/firebase';

export async function obterTarefa(id) {
  const docRef = doc(db, 'tarefas', id);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
}

export async function excluirTarefa(id) {
  await deleteDoc(doc(db, 'tarefas', id));
}

export async function atualizarTarefa(id, tarefaAtualizado) {
  const docRef = doc(db, 'tarefas', id);
  await updateDoc(docRef, tarefaAtualizado);
}

export async function marcarComoConcluida(id) {
  const docRef = doc(db, 'tarefas', id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const currentStatus = docSnap.data().concluida;
    await updateDoc(docRef, { concluida: !currentStatus });
  }
}
