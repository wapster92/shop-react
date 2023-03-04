import React, {useState} from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';

import MenuIcon from '@mui/icons-material/Menu';
import Menu from "../menu/Menu";
const Header = () => {
  const [menu, setMenu] = useState(false);
  const closeMenu = () => {
    setMenu(false);
  }
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
            <IconButton onClick={() => setMenu(true)}>
              <MenuIcon />
            </IconButton>
        </Toolbar>
      </AppBar>
      <Menu open={menu} closeMenu={closeMenu}></Menu>
    </Box>
  );
};

export default Header;
