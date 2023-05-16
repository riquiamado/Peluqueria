import { useEffect } from "react";
import { Service } from "../models/service";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Container,
  CardActionArea,
  CardMedia,
  Pagination
} from "@mui/material";
import { useStore } from "../store/services";
import React from "react";

const ServicioCard = ({ servicio }: { servicio: Service }) => {
  return (
    <Card sx={{marginBottom:"10px", marginTop:"50px"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={servicio.image ? servicio.image.secure_url : ""}
          height="200"
          alt="image"
        />

        <CardContent>
          <Typography variant="h5" component="div">
            {servicio.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Precio: {servicio.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Duración: {servicio.duration}
          </Typography>
          <Typography>Decripcion: {servicio.description}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

const ServicioList = () => {
  const servicios = useStore((state) => state.servicios);
  console.log("Actualizando servicios en el store:", servicios);
  const fetchServicios = useStore((state) => state.fetchServicios);
  const [page, setPage] = React.useState(1);

  const servicesPerPage = 2;
  const startIndex = (page - 1) * servicesPerPage;
  const displayedServices = servicios.slice(startIndex, startIndex + servicesPerPage);
  const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    fetchServicios();
  }, [fetchServicios]);

  return (
    <Container>
      <Grid container spacing={3} marginTop={10}>
        {displayedServices?.map((servicio) => (
          <Grid item xs={12} sm={6} md={4} key={servicio._id}>
            <ServicioCard servicio={servicio} />
          </Grid>
        ))}
      </Grid>
      <Pagination count={Math.ceil(servicios.length / servicesPerPage)} page={page} onChange={handleChangePage} sx={{marginTop:"50px"}} />
    </Container>
  );
};

export default ServicioList;
