import TourCard from "./components/TourCard";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";

import { Typography, Box } from "@mui/material";
function App() {
  return (
    <div>
      <Container>
        <Box sx={{ textAlign: "center", marginBottom: 2 }}>
          <Typography variant="h2" component="h1" gutterBottom>
            Tour Cards
          </Typography>
        </Box>
        <Grid container spacing={2}>
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
        </Grid>
      </Container>
    </div>
  );
}

export default App;
