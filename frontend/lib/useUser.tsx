import { useEffect } from 'react'


import { getCookie, deleteCookie } from 'cookies-next';


export default function getUser() {

  let user
  const logout = () => {
    deleteCookie("username");
    deleteCookie("password");
  }
  if (getCookie("username")) user = { 
    username: getCookie("username"), 
    password: getCookie("password"), 
    id: getCookie("userid"),
    points:getCookie("points"), logout: logout }



  return user ? user : undefined
}