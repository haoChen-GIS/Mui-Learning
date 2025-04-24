import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Container,
  Paper,
  Typography,
} from "@mui/material";
import ImageCollage from "../components/ImageCollage";
import CustomizedAccordions from "../components/CustomizedAccordions";
import BasicModal from "../components/BasicModal";
function Tour() {
  return (
    <Container sx={{ width: "900px", height: "auto" }}>
      <Typography variant="h3" component="h1" mt={3}>
        Explore the World in Las Vegas
      </Typography>
      <Box sx={{ display: "flex", marginTop: 3 }}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Las_Vegas_63.jpg/1920px-Las_Vegas_63.jpg"
          alt="Las Vegas"
          height={325}
        />
        <ImageCollage />
      </Box>
      <Box>
        <Typography variant="h6" component="h4" mt={3}>
          About this ticket
        </Typography>
        <Typography variant="paragraph" component="p" mt={3}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
          accusamus, officia, laboriosam enim nam adipisci repellendus deserunt
          architecto voluptatibus assumenda dolores, voluptatem dicta eum quas
          consequatur. Non qui dicta ex.
        </Typography>
      </Box>
      <Box>
        <CustomizedAccordions />
      </Box>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation>
          <BasicModal />
        </BottomNavigation>
      </Paper>
    </Container>
  );
}

export default Tour;
