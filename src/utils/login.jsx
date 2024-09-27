import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../infra/firebase';

export async function fazerLogin(email, senha, setUsuario, setError, navigate) {
  setError('');

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, senha);
    const usuario = {
      id: userCredential.user.uid,
      email: userCredential.user.email,
    };

    setUsuario(usuario);
    return {
      usuario,
      successMessage: 'Login realizado com sucesso!',
      error: null,
    };
  } catch (error) {
    console.error('Erro no login:', error);

    let errorMessage =
      'Ocorreu um erro ao fazer login, tente novamente mais tarde.';
    if (
      error.code === 'auth/invalid-email' ||
      error.code === 'auth/invalid-credential'
    ) {
      errorMessage = 'Credenciais inválidas. Verifique seu email e/ou senha';
    }

    return {
      usuario: null,
      successMessage: null,
      error: errorMessage,
    };
  }
}
