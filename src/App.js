// import { getDatabase, ref, set } from "firebase/database";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import "./App.css";
import { app } from "./firebase";
import SignupPage from "./pages/SignUp";
import SigninPage from "./pages/SignIn";


// const db = getDatabase(app);

const auth= getAuth(app);

function App() {

  // const signupUser=()=>{
  //  createUserWithEmailAndPassword(auth,
  // 'shivankit@gmail.com',
  // 'slka1210').then((value) => console.log(value));
  // };

  /* This is for checking of our firebase if it connected with our react app or not */
  // const putData = () => {
  //   set(ref(db, "user/shivankit"), {
  //     id: 1,
  //     name: "SHIVANKIT AGARWAL",
  //     age: 22,
  //   });
  // };

  return (
    <div className="App">
      <h1>React app Login tutorial</h1>
        <SigninPage/>
       <SignupPage/>

      {/* <button onClick={signupUser}>Create User</button> */}
     
    </div>
  );
}

export default App;
