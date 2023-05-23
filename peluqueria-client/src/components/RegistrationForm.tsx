// RegistrationForm.tsx
import React from 'react';
import { TextField, Button, Grid, Paper } from '@mui/material';
import { AccountCircle, Email, Phone, Lock } from '@mui/icons-material';
import { useStore } from '../store/register';

const RegistrationForm: React.FC = () => {
  const { fullName, email, phone, password, isLoading, error, setField, registerUser } = useStore();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setField(event.target.name, event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    registerUser();
  };

  return (
    <Paper sx={{ padding: 10 , Margin:10 }} >
      <form onSubmit={handleSubmit}  >
        <Grid container spacing={1} alignItems="flex-end" margin={3} justifyContent="center">
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextField
              label="Nombre completo"
              name="fullName"
              value={fullName}
              onChange={handleChange}
              required
            />
          </Grid>
        </Grid>
        <Grid container spacing={1} alignItems="flex-end" margin={3} justifyContent="center">
          <Grid item>
            <Email />
          </Grid>
          <Grid item>
            <TextField
              label="Correo electrónico"
              name="email"
              type="email"
              value={email}
              onChange={handleChange}
              required
            />
          </Grid>
        </Grid>
        <Grid container spacing={1} alignItems="flex-end" margin={3} justifyContent="center">
          <Grid item>
            <Phone />
          </Grid>
          <Grid item>
            <TextField
              label="Teléfono"
              name="phone"
              value={phone}
              onChange={handleChange}
              required
            />
          </Grid>
        </Grid>
        <Grid container spacing={1} alignItems="flex-end" margin={3} justifyContent="center">
          <Grid item>
            <Lock />
          </Grid>
          <Grid item>
            <TextField
              label="Contraseña"
              name="password"
              type="password"
              value={password}
              onChange={handleChange}
              required
            />
          </Grid>
        </Grid>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <Grid container justifyContent="center" style={{ marginTop: 16 }}>
          <Button variant="contained" color="primary" type="submit" disabled={isLoading}>
            {isLoading ? 'Registrando...' : 'Registrarse'}
          </Button>
        </Grid>
      </form>
    </Paper>
  );
};

export default RegistrationForm;
