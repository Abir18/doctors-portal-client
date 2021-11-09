import { useEffect, useState } from 'react';
import initializeFirebase from '../Pages/Login/Firebase/firebase.init';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState('');

  const auth = getAuth();

  const registerUser = (email, password) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        setAuthError('');
      })
      .catch(error => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const signInUser = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const destination = location?.state?.from || '/';
        history.replace(destination);
        setAuthError('');
      })
      .catch(error => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  //   Observe User State
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, []);

  const logOutUser = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setAuthError('');
      })
      .catch(error => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  return { isLoading, user, registerUser, signInUser, logOutUser, authError };
};

export default useFirebase;
