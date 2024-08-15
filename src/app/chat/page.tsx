"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Container,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const ChatPage: React.FC = () => {
  const [message, setMessage] = useState<string>("");
  const [responses, setResponses] = useState<{ user: string; bot: string }[]>(
    []
  );
  const endOfChatRef = useRef<HTMLDivElement | null>(null);

  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = async () => {
    if (!message) return;

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      if (!res.ok) {
        throw new Error("Network response was not ok.");
      }

      const data = await res.json();
      console.log("Response from API:", data.reply);

      setResponses((prev) => [...prev, { user: message, bot: data.reply }]);
      setMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
      setResponses((prev) => [
        ...prev,
        { user: message, bot: "Sorry, something went wrong." },
      ]);
    }
  };

  useEffect(() => {
    if (endOfChatRef.current) {
      endOfChatRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [responses]);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f0f0f0",
        color: "#000",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Container maxWidth="md" sx={{ flex: 1 }}>
        {/* Header */}
        <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
          <IconButton href="/" sx={{ mr: 2 }}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h4" gutterBottom>
            Chat with Medverse24
          </Typography>
        </Box>

        {/* Chat Log */}
        <Box
          sx={{
            maxHeight: "calc(100vh - 150px)",
            overflowY: "auto",
            mb: 2,
            p: 2,
            backgroundColor: "#ffffff",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <List>
            {responses.map((res, index) => (
              <ListItem
                key={index}
                sx={{ display: "flex", flexDirection: "column", mb: 1 }}
              >
                <ListItemText
                  primary={
                    <Box
                      sx={{
                        textAlign: "right",
                        bg: "blue",
                        borderRadius: "8px",
                        p: 1,
                      }}
                    >
                      {res.user}
                    </Box>
                  }
                />
                <ListItemText
                  secondary={
                    <Box
                      sx={{
                        textAlign: "left",
                        bg: "gray",
                        borderRadius: "8px",
                        p: 1,
                      }}
                    >
                      {res.bot}
                    </Box>
                  }
                />
              </ListItem>
            ))}
            <div ref={endOfChatRef} />
          </List>
        </Box>

        {/* Message Input */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Type your message..."
            value={message}
            onChange={handleMessageChange}
            sx={{ mr: 1 }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSendMessage}
          >
            Send
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ChatPage;
