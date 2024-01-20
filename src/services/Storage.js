//yeah apka ek trah ka database hain loke ko use kr ke banaya hain
export class Storage {
  static key = "USERS";

  //yeah ek function hain jo ek data params ko leta hain aur fir usse localstroaje main store kara deta hain
  //USERs ek key hain jo ki users ki key pr store kara deta hain
  static setUser(data) {
    return localStorage.setItem("USERS", JSON.stringify(data));
  }

  //wase user ko get kr rahe hain getItem function use kr ke aue usse parse kr de
  //rahe hain kyu ki hame ek string milti hain jab hum parse kr deta hian  ttoh woh ek object ban jata hain
  static getUser() {
    const parse = JSON.parse(localStorage.getItem("USERS"));
    return parse;
  }

  //yeah user ke data ko remeove kr dega isme kse pta chlega ki konse user ka data remove krna b user key seok whats app dekho na
  static clearUser() {
    localStorage.removeItem("USERS");
  }
}
