import { initializeApp } from "firebase/app"
import { getFirestore, doc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDWiUHWHAPft5TJZ7RbteUSr5pdvMIqs_c",
  authDomain: "vtr-pt.firebaseapp.com",
  databaseURL: "https://vtr-pt.firebaseio.com",
  projectId: "vtr-pt",
  storageBucket: "vtr-pt.appspot.com",
  messagingSenderId: "363782155278",
  appId: "1:363782155278:web:df68e732efd529d346205f",
  measurementId: "G-L1ZGQDL204"
};

class Firebase {
  constructor() {
    this.app = initializeApp(firebaseConfig);

    this.firestore = getFirestore(this.app);
  }

  // *** Firestore API ***
  config = (configName) => doc(this.firestore, "config", configName);
}

export default Firebase;