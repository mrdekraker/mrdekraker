import { Box, useMediaQuery, useTheme, Typography, Paper } from "@mui/material";
import Narnia from "../assets/littleNarnia.jpg";
import SocialLinks from "../components/socialLinks";

const Landing = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const navbarHeight = 80;

  if (isNonMobileScreens) {
    // PARENT BOX
    return (
      <Box
        display="flex"
        justifyContent="center"
        flexDirection="row"
        alignItems="center"
        sx={{
          backgroundImage: `url(${Narnia})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: `calc(100vh - ${navbarHeight}px)`,
          zIndex: -11,
        }}>
        {/* LEFT BOX */}
        <Box
          width="50%"
          backgroundColor="rgba(0,0,0,0.3)"
          padding="10rem 3.5rem"
          height="100%">
          <Box padding="1rem" textAlign="center">
            <Typography
              fontFamily="League Spartan"
              fontSize="clamp(3rem, 4rem, 5rem)"
              style={{ opacity: 0.5 }}
              lineHeight={1}
              color={theme.palette.primary.light}
              textAlign="right">
              Mark R
            </Typography>
            <Typography
              fontFamily="League Spartan"
              fontSize="clamp(5rem, 7rem, 15rem)"
              lineHeight="1"
              color={theme.palette.primary.main}
              position="relative"
              textAlign="right">
              DeKraker
            </Typography>
            <Typography
              fontStyle="italic"
              fontSize="clamp(0.8rem, 0.9rem, 1.5rem)"
              lineHeight="1"
              color={theme.palette.primary.light}
              position="relative"
              textAlign="right">
              Worshipper | Husband | Father | Full Stack Developer | Musician |
              Athlete
            </Typography>
            <Typography
              color={theme.palette.primary.light}
              fontStyle="italic"
              fontSize="clamp(0.8rem, 1rem, 1.5rem)"
              display="flex"
              marginTop="20rem"
              justifyContent="right">
              Find Me Here: <SocialLinks color={theme.palette.primary.main} />
            </Typography>
          </Box>
        </Box>

        {/* RIGHT BOX */}
        <Box
          width="50%"
          backgroundColor="rgba(0,0,0,0.3)"
          padding="10rem 3.5rem"
          height="100%">
          <Paper
            elevation={12}
            sx={{
              padding: "1rem",
              color: theme.palette.primary.light,
              maxHeight: "calc(100vh - 80px - 20rem)", // 80px is the navbar height, 20rem is the 'Find Me Here' height
              overflowY: "scroll",
              backgroundColor: "rgba(0,0,0,0.1)",
              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}>
            <Typography fontSize="1.8rem" fontStyle="italic">
              About
            </Typography>
            <Typography marginBottom="1rem" fontSize="0.9rem">
              In 2008 I was introduced to the world of web development. Due to
              life circumstances, I set aside my web development studies, worked
              hard, got my degree in Web Development from Liberty University
              Online, and then became an elementary school teacher. Fast forward
              to 2023, I completed a full stack web development bootcamp through
              Rice University.
            </Typography>
            <Typography marginBottom="1rem" fontSize="0.9rem">
              My main focus now is to find a job as a web developer, preferably
              focusing on front-end. In my free time, I spend time on side
              projects and learning new technologies.
            </Typography>
            <Typography marginBottom="1rem" fontSize="0.9rem">
              When I'm not at the computer, I am with my family, cooking, or
              working out.
            </Typography>
            <Typography fontSize="1.8rem" fontStyle="italic">
              Relevant Project Experience
            </Typography>
            <Typography marginBottom="1rem" fontSize="0.9rem">
              My experience is largely educational and various educational
              projects. I am trained in the MERN Full Stack. I have experience
              with React, Node, Express, MongoDB, MySQL, and more. I am also
              familiar with the MUI, Tailwind, & Bootstrap frameworks.
            </Typography>
            <Typography marginBottom="1rem" fontSize="0.9rem">
              To view all my projects, please visit my projects page.
            </Typography>
            <Typography
              fontSize="1.8rem"
              fontStyle="italic"
              sx={{
                "&:hover": {
                  textDecoration: "underline",
                  color: theme.palette.primary.light,
                },
              }}>
              <a
                href="http://www.github.com/RDCERP/my-stores"
                style={{
                  textDecoration: "none",
                  color: theme.palette.primary.light,
                }}>
                MyStores | github.com/RDCERP/my-stores
              </a>
            </Typography>
            <Typography marginBottom="1rem" fontSize="0.9rem">
              <ol style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                <li>
                  This project is a social media site for those who would want
                  to share yelp locations both to ask for recommendations, or
                  share where they've been for others to try.
                </li>
                <li>
                  I provided a lot of the back end, and designed a large portion
                  of the front end.
                </li>
                <li>
                  We used JavaScript, React, Redux/Toolkit, MaterialUI, MongoDB,
                  Express, Node, and more.
                </li>
              </ol>
            </Typography>
            <Typography
              fontSize="1.8rem"
              fontStyle="italic"
              sx={{
                "&:hover": {
                  textDecoration: "underline",
                  color: theme.palette.primary.light,
                },
              }}>
              <a
                href="http://github.com/Steezy1416/round-table"
                style={{
                  textDecoration: "none",
                  color: theme.palette.primary.light,
                }}>
                RoundTable | github.com/Steezy1416/round-table
              </a>
            </Typography>
            <Typography marginBottom="1rem" fontSize="0.9rem">
              <ol style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                <li>
                  This project is a chat application utilizing Socket.io.</li>
                <li>
                  I provided code for the front end.
                </li>
                <li>
                  We used JavaScript, Handlebars, Socket.io, Session, Sequelizer, and Express
                </li>
              </ol>
            </Typography>
          </Paper>
        </Box>
      </Box>
    );
  } else {
    // PARENT BOX
    return (
      <Box
        display="flex"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
        sx={{
          backgroundImage: `url(${Narnia})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: `calc(100vh - ${navbarHeight}px)`,
        }}>
        {/* Mobile Box */}
        <Box
        >
          <Paper
            elevation={2}
          >
            <Typography>
              This is the mobile version of the landing page.
            </Typography>
          </Paper>
        </Box>
      </Box>
    );
  }
};

export default Landing;
