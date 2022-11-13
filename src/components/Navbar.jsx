import { Stack } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import {logo} from '../utils/constant'
import SearchBar from './SearchBar'

const Navbar = () => (
    <Stack direction='row' alignItems='center' p={2} sx={{position: "sticky", top:"0", justifyContent:"space-between"}}>
      <Link to='/' style={{display:'flex', alignItems:"center"}}>
        <img src={logo} height={45} alt="Logo"/>
      </Link>
      <SearchBar/>
    </Stack>
  );

export default Navbar