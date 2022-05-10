import React, { useEffect, useState } from 'react'

import {getOrganizations, getProjects} from '../src/apis/endpoints'
import './App.css'
const BASE_URL = "https://mdsa.bipad.gov.np/api/v1"

const App = () => {
  const [organizations, setOrganizations] = useState([])
  const [projects, setProjects] = useState([])
  useEffect(()=>{
    fetch(BASE_URL + getOrganizations)
    .then(res => res.json())
    .then(data => {
      setOrganizations(data)
    })
  },[])
  useEffect(()=>{
    fetch(BASE_URL + getProjects)
    .then(res => res.json())
    .then(data => {
      setProjects(data);
    })
  },[])
  console.log("organizationsArray: ",organizations);
  console.log("projectsArray: ", projects);
  return (
    <div>App</div>
    )
  }
  
  export default App