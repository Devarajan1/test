import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import { gapi } from 'gapi-script';
import Login from './login'
function App() {
  const CLIENT_ID = "476946310824-r70o0t33mmhia9c98vfkmglqucfnggrg.apps.googleusercontent.com"
  const API_KEY = "AIzaSyDHadDLW5LlE_niTK1_Y1G_naAnGXnPrUs"
  const SCOPES = "https://www.googleapis.com/auth/drive"
  useEffect(() => {
    function access() {
      gapi.client.init({
        apikey: API_KEY,
        clientId: CLIENT_ID,
        scope: SCOPES
      })
    }
    gapi.load('client:auth2', access)
  })

  function createFile() {
    var accessToken = gapi.auth.getToken().access_token;
    fetch('https://docs.googleapis.com/v1/documents', {
      method: 'post',
      headers: new Headers({
        'Autorization': 'Bearer' + accessToken
      })
    }).then((res) => {
      return res.json();
    }).then(function (val) {
      console.log(val);
      console.log(val.documentId)
    }
    )}

  return (
    <><Login />
      <button onClick={()=>createFile('test1')}>create a doc</button></>
  )
}

export default App;
