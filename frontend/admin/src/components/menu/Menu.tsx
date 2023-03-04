import React from 'react';
import routes from "../../pages/router";
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import {Link} from "react-router-dom";

interface Props {
  open: boolean;
  closeMenu: () => void;
}

const menuList = () => (

  routes.map(route => (
    <ListItem disablePadding key={route.path}>
      <ListItemButton component={Link} to={route?.link ? route.link : route.path}>
        <ListItemText>
          {route.name}
        </ListItemText>
      </ListItemButton>
    </ListItem>
  ))
)
const Menu = (props: Props) => {
  return (
    <Drawer open={props.open} onClose={props.closeMenu}>
      <Box
        sx={{width: 250}}
        role="presentation"
        onClick={props.closeMenu}
      >
        <List>
          {menuList()}
        </List>
      </Box>
    </Drawer>
  );
};

export default Menu;
