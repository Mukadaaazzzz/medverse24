"use client";

import React from "react";
import { Box, Typography, Grid, Button, Link } from "@mui/material";

const LearnPage: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "50px",
        backgroundColor: "#e8f5e9",
      }}
    >
      <Grid container spacing={5} alignItems="center">
        {/* Image Section */}
        <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
          <Box
            sx={{
              backgroundImage: 'url("/medical-background4.jpg")', // Replace with your image URL
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "400px",
              borderRadius: "15px",
            }}
          ></Box>
        </Grid>

        {/* Text Section */}
        <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold", mb: 3, color: "#333" }}
          >
            Learn about AI in Medicine
          </Typography>
          <Typography
            variant="h6"
            sx={{ mb: 4, lineHeight: 1.6, color: "#555" }}
          >
            Artificial Intelligence is revolutionizing healthcare. From
            diagnosis to treatment, AI is helping doctors make more accurate
            decisions faster than ever before. The future of medicine is here,
            and AI is at the forefront of this transformation.
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, color: "#777" }}>
            Explore how AI is shaping the future of healthcare, from
            personalized treatment plans to predictive analytics that can
            anticipate health issues before they arise.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ textTransform: "none", fontSize: "1rem", mb: 3 }}
          >
            Discover More
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

export default LearnPage;
