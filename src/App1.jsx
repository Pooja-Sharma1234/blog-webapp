import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./pages/Navbar";
import Homepage from "./pages/HomePage";
import {
  BrowserRouter as Routes,
  Route,
  BrowserRouter,
  Link,
} from "react-router-dom";
import Registration from "./pages/Registration";

function App() {
  const [count, setCount] = useState(0);
  const [post, setPosts] = useState([]);

  //yeah useEffect baar bar runhoga
  // useEffect(() => {
  //   console.log("mai baar baar call hunga dekh lena ");
  // });

  //yeah useEffect ek baar runhoga
  // useEffect(() => {
  //   console.log("mai ek baar call hunga dekh lena dekha na ha ");
  // }, []);
  //CRUD
  //types of requests ->GET,POST,PUT,PATCH,DELETE
  // const getPosts = () => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => response.json())
  //     .then((json) => {
  //       console.log(json);
  //       setPosts(json);
  //     });
  // };
  // useEffect(() => {
  //   getPosts();
  // }, []);

  //    //yeah useEffect ek baar aur jab koi dependency chnage hogi tab run hoga
  // useEffect(() => {
  //   console.log(
  //     "mai ek baar call hunga aur jab count state ko upadte karoge tab call hunga dekh lena dekha na ha "
  //   );
  // }, [count]);

  //yaha pr hm api call karenge using fetchok
  //useEffect padha hain ha ok

  //acha useEffectek hook hota hain jo page run hote hi useEffect call ho jaya isko udhar use kerte hain
  //jaha hame API call krni ho ya koi function call krna hain .yeah self run type function
  //ab btao aage ok
  //toh yeah sab fark hain bas samjhi ha
  //sahi sahi batao dil pr pathar rak ke mat batonhi nhi agya ha agya ok
  //nahi nahi ruko ok ok kuch bolrahi ho kya apnhi kya hua kuch nhioff kr ke whats app pr aye okok
  //CREATE(POST) READ(GET) UPDATE(POST PUT PATCH) DELETE

  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Homepage />
        <Registration />
      </>
    </BrowserRouter>
    // <Routes>

    //   <Route exact path="/Signup">
    //     <Registration />
    //   </Route> kha gye haan
    // </Routes>
  );
}

export default App;

/* {post.map((p) => {
        return (
          <div>
            <p>{p.title}</p>
            <p>{p.body}</p>
          </div>
        );
      })} */
