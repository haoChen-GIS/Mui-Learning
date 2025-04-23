import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";

import Box from "@mui/material/Box";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Rating from "@mui/material/Rating";

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: { variant: "body2" },
          style: {
            fontSize: "0.6rem",
          },
        },
        {
          props: { variant: "h6" },
          style: {
            fontSize: "0.8rem",
          },
        },
      ],
    },
  },
});

export default function TourCard({ tour }) {
  return (
    //size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
    <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} item>
      <ThemeProvider theme={theme}>
        <Item>
          <Paper elevation={3} sx={{ width: "100%", height: "18rem" }}>
            <Box
              component="img"
              sx={{
                width: "100%",
                height: "10rem",
                borderRadius: 1, // 添加圆角
              }}
              src={tour.image}
              alt="pic"
            />
            <Box sx={{ paddingX: 2 }}>
              <Typography variant="subtitle1" component="h2">
                {tour.name}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <AccessTimeIcon
                  sx={{
                    width: 12.5,
                  }}
                />
                <Typography variant="body2" component="p" marginLeft={0.5}>
                  {tour.duration} hours
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: 1,
                  justifyContent: "space-between",
                }}
              >
                <Rating
                  name="read-only"
                  value={tour.rating}
                  precision={0.5}
                  size="small"
                  readOnly
                />
                <Typography variant="body2" component="p" marginLeft={0.5}>
                  {tour.rating} points
                </Typography>
                <Typography variant="body2" component="p" marginLeft={0.5}>
                  ({tour.numberOfReviews} reviews)
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  component="h3"
                  marginTop="0.5rem"
                  sx={{ fontWeight: "bold" }}
                >
                  From C ${tour.price} Dallers
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Item>
      </ThemeProvider>
    </Grid>
  );
}
