import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Divider } from "@mui/material";
import { CREATE_USER } from "../mutations/userMutations";
import { GET_USERS } from "../queries/userQueries";
import { useMutation } from '@apollo/client';



export default function FormDialog() {
      const [name, setName] = useState('');
      const [gender, setGender] = useState('Male');
      const [email, setEmail] = useState('');
      const [address, setAddress] = useState('');

      const [createUsers] = useMutation(CREATE_USER, {
            variables: {
                  createuserInput: {
                        name: name,
                        gender: gender,
                        email: email,
                        address: address
                  }
            },
            refetchQueries: [{ query: GET_USERS }]
      });


      const handleChange = (event) => {
            setGender(event.target.value);
      };

      const [open, setOpen] = useState(false);

      const clear = ()=>{
            setName('');
            setAddress('');
            setEmail('');
            setGender('Male');
      }
      
      const handleClickOpen = () => {
            setOpen(true);
            clear()
      };
  
      const handleClose = () => {
            setOpen(false);
            clear()
      };

  const handleSubmit = async (event) => {
    event.preventDefault();
    handleClose()
    await createUsers();
    clear()
  };

  return (
    <div>
      <Box
      m={2}
      display="flex"
      justifyContent="flex-end"
      alignItems="flex-end"
      >
            <Button variant="outlined" onClick={handleClickOpen} color="success">
                  Create User
            </Button>

      </Box>
            <Divider variant="middle" />
      <Dialog open={open} onClose={handleClose}>
            <DialogTitle variant="outlined">Create a new user</DialogTitle>
            <Divider />
            <DialogContent>
                  <Box 
                        component="form" onSubmit={handleSubmit} 
                        sx={{mt: 3, width: 350}}
                        >
                              <Grid container spacing={3}>
                              <Grid item xs={12}>
                                    <TextField
                                    name="name"
                                    required
                                    fullWidth
                                    id="name"
                                    label="Full Name"
                                    autoFocus
                                    value={name}
                                    onChange={(event) => setName(event.target.value)}
                                    />
                              </Grid>
                              <Grid item xs={12} >
                                    <FormControl required xs={12} sx={{ minWidth: 150 }}>
                                          <InputLabel id="genderLabel">Gender</InputLabel>
                                          <Select
                                          labelId="genderLabel"
                                          id="selectItem"
                                          value={gender}
                                          label="Gender *"
                                          onChange={handleChange}
                                          >
                                                <MenuItem value={"Male"}>Male</MenuItem>
                                                <MenuItem value={"Female"}>Female</MenuItem>
                                          </Select>
                                    </FormControl>
                              </Grid>
                              <Grid item xs={12}>
                                    <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                    />
                              </Grid>
                              <Grid item xs={12}>
                                    <TextField
                                    required
                                    fullWidth
                                    name="address"
                                    label="Address"
                                    type="address"
                                    id="address"
                                    value={address}
                                    onChange={(event) => setAddress(event.target.value)}
                                    />
                              </Grid>
                              <Grid item xs={5}></Grid>
                              <Grid item xs={3}>
                                    <Button onClick={handleClose} variant="outlined" color="error">Cancel</Button>
                              </Grid>
                              <Grid item xs={4}>
                                    <Button type="submit" variant="outlined" color="success" >Create</Button>

                              </Grid>
                        </Grid>
                  
                  </Box>

            </DialogContent>
      </Dialog>
    </div>
  );
}
