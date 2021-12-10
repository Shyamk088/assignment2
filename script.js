"use strict";
const para = document.querySelector(".para");
const lastVisit = document.querySelector(".lastvisit");
const button = document.querySelector(".btn");
let options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
};
let date = new Date();
let currentDate = date.toLocaleDateString("en-US", options);
// To delete all the session
function deleteAllSession() {
  sessionStorage.clear();
  setSession("visited", 1);
  setSession("current", currentDate);
  para.textContent = "You have never visited before";

  lastVisit.textContent = "";
}
// to the set the session by passing key and value
function setSession(cname, cvalue) {
  sessionStorage.setItem(cname, cvalue);
}
// to get the session by key
function getSession(cname) {
  let item = sessionStorage.getItem(cname);
  return item;
}

setSession("userName", "Smith");

let getDate = getSession("current");
let cok = getSession("visited");

setSession("visited", Number(cok) + 1);
setSession("current", currentDate);

if (cok != null) {
  para.textContent = `You have visited ${Number(cok) + 1} times`;
  lastVisit.textContent = `You last visited on ${getDate}`;
}

button.addEventListener("click", deleteAllSession);
