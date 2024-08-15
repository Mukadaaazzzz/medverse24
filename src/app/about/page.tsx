"use client";

import React from "react";
import { Box, Typography, Grid, Button, Link } from "@mui/material";

const AboutPage: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "50px",
        backgroundColor: "#f0f4f8",
      }}
    >
      <Grid container spacing={5} alignItems="center">
        {/* Image Section */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              backgroundImage: 'url("/medical-background3.jpg")', // Replace with your image URL
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "400px",
              borderRadius: "15px",
            }}
          ></Box>
        </Grid>

        {/* Text Section */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold", mb: 3, color: "#333" }}
          >
            About Medverse24
          </Typography>
          <Typography
            variant="h6"
            sx={{ mb: 4, lineHeight: 1.6, color: "#555" }}
          >
            Medverse24 is dedicated to helping patients understand their medical
            conditions by breaking down complex medical terminologies into
            simple, understandable information. Our goal is to bridge the gap
            between doctors and patients, ensuring that patients feel empowered
            and informed every step of the way.
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, color: "#777" }}>
            This project is a creation of Mukadaz Labs, committed to building
            technology-driven solutions that make a real impact on people.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ textTransform: "none", fontSize: "1rem", mb: 3 }}
          >
            Learn More
          </Button>
          <br />
          <Link
            href="/"
            sx={{
              textDecoration: "none",
              color: "#1976d2",
              fontWeight: "bold",
            }}
          >
            Back to Homepage
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutPage;
