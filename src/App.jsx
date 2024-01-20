import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  //code hain idhar sare thikok
  const [count, setCount] = useState(0);
  //item.name isliye kiya
  const arr = [
    {
      name: "pooja",
      age: 16,

      intrest: ["reading", "writing"],
    },
    {
      name: "neha",
      age: 18,
      intrest: ["reading", "writing"],
    },
    {
      name: "manish",
      age: 12,
      intrest: ["reading", "playing"],
    },
  ];

  //jase hame woh pata krna hain
  //-jiski age 24 se kam ho --yaha filter use hoga
  //-jisko kali writing ka inrest ho ---yaha map --ab  yeah karo
  //-jiski age 24 km ho aur usko reading maininterest woh findout karo hm

  //ok kya koi or operation bhi h ya map or filter se haan isse hi hoga karo naok object padha hain na ha padha to tha
  //key kya hota hain ha v key or values key represnt krti h particuar value ko jse y name age key hue na? waah cool
  //acha ruko kuch bata deta hun objectka mian hm
  const personDetail = {
    name: "chandKala",
    hobby: "dancing",
  };

  //dekho yeah object hain ager hame name acces krna ab kr login ki kuch aur bataun

  const person = arr.filter((prsn) => {
    //chlo abhi ayse kr lete hain wrna time chla jayega okok
    //dekho prsh se hme age mil jayega na//kuch fail ho raha condtion ok yrr yesh kaam krna chiye butkuch toh hain jo dikh nahi raha hain
    return prsn.age < 24 && prsn.intrest.includes("writing"); //sahi hogaya ayse bhi kr sakti ho ruko ussi ko fix krtr hain
  });

  //isko bhi krne ke bahut tarike hain
  //kuch gadbad hui kya haan kyatrest ek aarray hain isko array m dalu[] nahi ruko bata hun
  //karo ab socho kese krna hainok

  //next karo na first ho gaya

  //thik ab hamara data ready ho gaya ab ham isspe operation perform karenge

  // let temp = 0;
  // const countval = arr.map((num) => {
  //   if (num == 6) {
  //     temp++;
  //   }
  // });

  let temp = [];
  const countval = arr.map((num) => {
    if (num == 6) {
      temp.push(num);
    }
  });

  //yeah jo tumhe krna tha ab array wala pata ruko sb
  //a gaya ha acha ismekoi doubt aya kya nhi acha arr iski length nikalo complete array?haan
  console.log(temp.length, "ggg");
  //a gaya na samjh ha e vo hum key de rhe the vha but jo intrest h vo array h with strng values ha?haan waha key tab deta ager hamar array aysa hota
  //ok aya samjhha simpletha na bhot jyada hi isliye map aur filter bahut practice karayahmm acha ab intrest ko bhi dikhana hain toh kese karoge
  //ab kya krna hain jo hame uper array banaya hain use ab yaha dikhana hain ok using map inside the retrn ok
  //dekho ab hm react ka jada use karen jayse state
  //-api call krna hain aur view ke ander kese dikhana
  //-api call ke liye hum kuch services ka use karenge online
  //-fetch padha hai na ha cool
  //bas ab padh kr krna hain
  return (
    <>
      {arr.map((item) => {
        return (
          <p>
            {item.intrest.map((a) => {
              return <p>{a}</p>; //y kya k bas itna ayga kyu ki woh string hain na
            })}
          </p>
        ); //v jse aapne name pr item.name kiya to ese yha kuch access
      })}
    </>
  );
}
//return(
//  <>{arr.map((item)=>{
//    return <p>item.name</p>
//})}</>
//)

export default App;

/*

find even number
[1,3,6,4,10]

 isme hum filter apply kr skte h haan sahi ja rahi ho
const arr=[1,3,6,4,10]
const even=arr.filter(num=>num%2===0) 



*/
