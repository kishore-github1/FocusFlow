import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import API_BASE_URL from "../config/api";
import { useState } from "react";
import axios from 'axios';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(){
    try{
      const formData = { username: name,email: email, password: password };
      const res = await axios.post(`${API_BASE_URL}/users/signUp`, formData );

      console.log('Success', res.data);
      alert('SignUp Successful');
    }
    catch(error){
      console.log('Signup Failed: ', error.message);
      alert('Signup failed');
    }
  }

  return (
    <div>
      <div className="flex flex-col items-center justify-center border-2 min-h-screen space-y-4 w-96">
        <TextField id="outlined-basic" label="Name" variant="outlined"  value = {name} onChange={(e)=>setName(e.target.value)}/>
        <TextField id="outlined-basic" label="Email" variant="outlined" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <Button variant="contained" onClick={handleSubmit}>SignUp</Button>
      </div>
    </div>
  );
};

export default SignUp;
