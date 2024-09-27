import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDDLwPWwXm7XdYsKjkwvNhvtIYj-_LS6t0',
  authDomain: 'sistema-tarefas-593cb.firebaseapp.com',
  projectId: 'sistema-tarefas-593cb',
  storageBucket: 'sistema-tarefas-593cb.appspot.com',
  messagingSenderId: '973362616879',
  appId: '1:973362616879:web:9b31141dda51ddc58d04da',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
export const db = getFirestore(app);
