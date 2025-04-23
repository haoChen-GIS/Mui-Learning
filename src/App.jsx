import React from "react";
import TourCard from "./components/TourCard";
import { Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import SearchAppBar from "./components/SearchAppBar";
import cities from "./data.json";

function App() {
  return (
    <div>
      <SearchAppBar />
      <Container sx={{ mt: 2 }}>
        {cities.map((city) => (
          <React.Fragment key={city.id}>
            <Typography variant="h4" component="h2" mt={5} mb={3}>
              Top {city.name}
            </Typography>
            <Grid container spacing={2}>
              {city.tours.map((tour) => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </Grid>
          </React.Fragment>
        ))}
      </Container>
    </div>
  );
}

export default App;
