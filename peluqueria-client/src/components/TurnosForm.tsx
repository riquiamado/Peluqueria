import {
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Paper,
} from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";

import { useStore } from "../store/services";

interface TurnoFormProps {
  onSubmit: () => void;
}

export const TurnoForm: React.FC<TurnoFormProps> = ({ onSubmit }) => {
  const [fecha, setFecha] = useState("");
  const [cliente, setCliente] = useState("");
  const { servicios, fetchServicios } = useStore((state) => ({
    servicios: state.servicios,
    fetchServicios: state.fetchServicios,
  }));
  console.log(fetchServicios);
  console.log(servicios);
  const [servicioSeleccionado, setServicioSeleccionado] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/turnos", {
        fecha,
        cliente,
        servicios,
      });
      onSubmit();
    } catch (error) {
      console.error(error);
    }
  };

  const handleServicioChange = (event: { target: { value: string } }) => {
    const value = event.target.value as string; // Comprobamos que el valor sea de tipo string
    setServicioSeleccionado(value);
  };

  useEffect(() => {
    fetchServicios();
  }, [fetchServicios]);

  function getDayjsValue(dayjsObject: Dayjs) {
    const value = dayjsObject.toISOString();
    return value;
  }
  const today = dayjs();
  const value = getDayjsValue(today);
  console.log(value); // 2023-05-15T00:00:00.000Z

  return (
    <Paper
    elevation={3}
      sx={{
        margin: "200px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <FormControl onSubmit={handleSubmit} margin="normal" fullWidth>
        <TextField
          label="Cliente"
          value={cliente}
          onChange={(e) => setCliente(e.target.value)}
        />
      </FormControl>
      <FormControl margin="normal" fullWidth>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer
            components={[
              "DateTimePicker",
              "MobileDateTimePicker",
              "DesktopDateTimePicker",
              "StaticDateTimePicker",
            ]}
          >
            <DemoItem label="Fecha y Hora">
              <DateTimePicker
                // sx={{ margin: "20px" }}
                defaultValue={dayjs("2022-04-17T15:30")}
                onChange={(value) => {
                  if (value) {
                    setFecha(value.toISOString());
                  } else {
                    setFecha("");
                  }
                }}
              />
            </DemoItem>
          </DemoContainer>
        </LocalizationProvider>
      </FormControl>
      <FormControl margin="normal" fullWidth>
        <InputLabel id="servicios-label">Seleciona Tu Servicio</InputLabel>
        <Select
          labelId="servicios-label"
          id="servicios"
          label="Seleciona Tu Servicio"
          value={servicioSeleccionado}
          onChange={handleServicioChange}
        >
          {servicios.map((servicio) => (
            <MenuItem key={servicio._id} value={servicio._id}>
              {servicio.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Button type="submit">Guardar</Button >
      {/* </Box> */}
    </Paper>
  );
};
