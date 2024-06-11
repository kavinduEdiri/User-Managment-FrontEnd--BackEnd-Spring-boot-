import { Button, Grid, Input, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

function UserForm({ addUser, updateUser, isEdit, data }) {
  const [id, setId] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    if (isEdit) {
      setId(data.id);
      setName(data.name);
    } else {
      setId("");
      setName("");
    }
  }, [data, isEdit]);
  

  const handleSubmit = () => {
    if (isEdit) {
      updateUser({ id, name });
    } else {
      addUser({ id, name });
    }
  };

  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{
          backgroundColor: "white",
          marginBottom: "30px",
          display: "block"
        }}
      >
        <Grid item>
          <Typography component={'h1'} sx={{ color: 'black' }}>User Form</Typography>
        </Grid>

        <Grid item sx={{ display: 'flex' }}>
          <Typography
            component={'label'}
            sx={{
              color: 'black',
              marginRight: '20px',
              fontSize: '16px',
              width: '100px',
              display: 'block'
            }}
          >
            ID
          </Typography>

          <Input
            type='number'
            id='id'
            name='id'
            sx={{ width: '400px' }}
            value={id}
            onChange={e => { setId(e.target.value) }}
            disabled={isEdit} // Disable ID input when editing
          />
        </Grid>

        <Grid item sx={{ display: 'flex' }}>
          <Typography
            component={'label'}
            sx={{
              color: 'black',
              marginRight: '20px',
              fontSize: '16px',
              width: '100px',
              display: 'block'
            }}
          >
            NAME
          </Typography>

          <Input
            type='text'
            id='name'
            name='name'
            sx={{ width: '400px' }}
            value={name}
            onChange={e => { setName(e.target.value) }}
          />
        </Grid>

        <Button
          sx={{
            margin: 'auto',
            marginBottom: '20px',
            backgroundColor: 'blue',
            color: 'white',
            marginLeft: '15px',
            marginTop: '20px',
            '&:hover': {
              backgroundColor: 'blue',
              color: 'white',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            },
          }}
          onClick={handleSubmit}
        >
          {isEdit ? "UPDATE" : "ADD"}
        </Button>
      </Grid>
    </>
  );
}

export default UserForm;
