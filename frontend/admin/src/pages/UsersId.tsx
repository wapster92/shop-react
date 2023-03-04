import React, {useEffect, useState} from 'react';
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import modal from '../assets/style/modal.module.scss';
import {Typography} from "@mui/material";
import {useNavigate, useParams} from "react-router-dom";
import {api} from "../api";

const UsersId = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const [user, setUser] = useState();
  const getUser = async () => {
    if(id) {
      const {data} = await api.getUserById(id);
      setUser(data.data)
    }
  }
  useEffect(() => {
    getUser();
  }, [])
  const closeModal = () => {
    navigate('/users');
  }
  return (
    <Modal
      open
      onClose={closeModal}
    >
      <Box className={modal.modal}>
        <Typography variant="h6" component="h2">
          Text in a modal
        </Typography>
      </Box>

    </Modal>
  );
};

export default UsersId;
