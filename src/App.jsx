import TourCard from "./components/TourCard";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
function App() {
  return (
    <div>
      <Container>
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
