import { Box, Grid, Typography } from "@mui/material";

import mdek from "assets/mdek.png";

const AboutMeWidget = () => {
  return (
    <Box
      sx={{
        overflow: "hidden",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography
            sx={{
              fontSize: "clamp(1.5rem, 5vw, 2.5rem)",
              fontFamily: "Playfair Display",
            }}
          >
            About Me
          </Typography>
          <Typography>
            I am a full stack web developer with a passion for learning and
            creating. I have a background in the medical field and have worked
            with many different types of people. I am a hard worker and a team
            player. I am always looking for new challenges and opportunities to
            grow.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            filter: "grayscale(100%)",
            "&:hover": {
              transition: "all 0.5s ease",
              filter: "grayscale(0%)",
            },
          }}
        >
          <img src={mdek} alt="Mark DeKraker" width="600px" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutMeWidget;
