import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Rating from "@mui/material/Rating";

export default function TourCard() {
  return (
    <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
      <Item>
        <Paper elevation={3}>
          <Box
            component="img"
            sx={{
              width: "100%",
              height: "auto",
              borderRadius: 1, // 添加圆角
            }}
            src="https://plus.unsplash.com/premium_photo-1669863283335-9370289707d7?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFsbHN8ZW58MHx8MHx8fDA%3D"
            alt="pic"
          />
          <Box sx={{ paddingX: 2 }}>
            <Typography variant="subtitle1" component="h2">
              Immerse into the Falls
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
                5 hours
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Rating
                name="read-only"
                value={4.5}
                precision={0.5}
                size="small"
                readOnly
              />
            </Box>
          </Box>
        </Paper>
      </Item>
    </Grid>
  );
}
