"use client";

import React from "react";
import { Box, Typography, Button, AppBar, Toolbar } from "@mui/material";
import { useRouter } from "next/navigation";

const HomePage: React.FC = () => {
  const router = useRouter();

  return (
    <Box
      sx={{
        height: "100vh",
        backgroundImage: 'url("/medical-background2.jpg")', // Replace with your background image URL
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      {/* Navigation Bar */}
      <AppBar
        position="absolute"
        sx={{ background: "transparent", boxShadow: "none" }}
      >
        <Toolbar sx={{ justifyContent: "center" }}>
          <Button color="inherit" onClick={() => router.push("/about")}>
            About
          </Button>
          <Button color="inherit" onClick={() => router.push("/learn")}>
            Learn
          </Button>
          <Button color="inherit" onClick={() => router.push("/chat")}>
            Try
          </Button>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box
        sx={{
          textAlign: "center",
          color: "#fff",
          mt: 8,
        }}
      >
        <Typography
          variant="h2"
          sx={{ fontWeight: "bold", mb: 3, animation: "fadeIn 2s" }}
        >
          Welcome to Medverse24
        </Typography>
        <Typography variant="h5" sx={{ mb: 5, animation: "fadeIn 2s 1s" }}>
          Bridging the gap between doctors and patients
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ animation: "fadeIn 2s 2s" }}
          onClick={() => router.push("/chat")}
        >
          Try Now
        </Button>
      </Box>

      {/* Animation Keyframes */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </Box>
  );
};

export default HomePage;
