import React from "react";
import { Typography, Container, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container maxWidth="md" sx={{ textAlign: "center", py: 5 }}>
      <Typography variant="h3" sx={{ fontWeight: "bold", color: "#0d47a1", mb: 2 }}>
        Welcome to My Portfolio
      </Typography>
      <Typography variant="h6" sx={{ mb: 4 }}>
        I am a passionate Software Developer and AI Enthusiast.
      </Typography>
      <Box>
        <Button variant="contained" color="primary" sx={{ m: 1 }} component={Link} to="/projects">
          View My Projects
        </Button>
        <Button variant="outlined" color="primary" sx={{ m: 1 }} component={Link} to="/contact">
          Contact Me
        </Button>
      </Box>
    </Container>
  );
};

export default Home;