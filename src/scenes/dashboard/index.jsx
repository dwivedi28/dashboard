import React, { useState } from 'react';
import { Box, IconButton, Typography, TextField, Button } from "@mui/material";
import { tokens } from "../../theme";
import { Help, Margin } from "@mui/icons-material";
import Slider from '../slider/slidern'
const Dashboard = () => {
  const colors = tokens('light');

  const [brandNameAnswer, setBrandNameAnswer] = useState("");
  const [showBrandNameBox, setShowBrandNameBox] = useState(false);

  const [scriptAnswer, setScriptAnswer] = useState("");
  const [showScriptBox, setShowScriptBox] = useState(false);

  const handleBrandNameChange = (event) => {
    setBrandNameAnswer(event.target.value);
  };

  const handleScriptChange = (event) => {
    setScriptAnswer(event.target.value);
  };

  const handleBrandNameIconButtonClick = () => {
    setShowBrandNameBox(!showBrandNameBox);
    setShowScriptBox(false);
  };

  const handleScriptIconButtonClick = () => {
    setShowScriptBox(!showScriptBox);
    setShowBrandNameBox(false);
  };

  const handleBrandNameSubmit = () => {
    // Handle submit logic for brand name here
  };

  const handleScriptGenerate = () => {
    // Handle generate logic for script here
  };

  return (
    <Box m="20px">
      {/* Brand Name Question Box */}
      <Box mt={2} display="flex" alignItems="center">
        <Box sx={{ width: "40%" }}>
          <Typography variant="h6" gutterBottom>
            What is your brand name?
          </Typography>
          <TextField
            id="brand-name-input"
            label="Answer"
            value={brandNameAnswer}
            onChange={handleBrandNameChange}
            variant="outlined"
            fullWidth
            className="brand-name-text-area" // Add classname to differentiate
          />
        </Box>
        <IconButton
          sx={{
            position: "relative",
            top: "10px",
            left: "10px",
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
            "&:hover": { backgroundColor: colors.blueAccent[800] },
          }}
          onClick={handleBrandNameIconButtonClick}
        >
          <Help />
        </IconButton>
        {showBrandNameBox && (
          <Box
            id="brand-name-box"
            sx={{
              position: "fixed",
              top: "33%",
              right: "120px",
              transform: "translateY(-50%)",
              width: "30%",
              backgroundColor: "#141B2D",
              p: "1rem",
              borderRadius: "0.5rem",
              boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.2)"
            }}
          >
            <Typography variant="h4" gutterBottom>
              Our Snappy wants to know
            </Typography>
            <Typography variant="h6" gutterBottom>
              What is your theme?
            </Typography>
            <TextField
              id="theme-input"
              label="e.g. Sports, Facts"
              value={brandNameAnswer}
              onChange={handleBrandNameChange}
              variant="outlined"
              fullWidth
              className="theme-text-area" // Add classname to differentiate
            />
            <Button variant="contained" style={{ marginTop: "15px", backgroundColor: "blue" }} onClick={handleBrandNameSubmit}>
              Submit
            </Button>
          </Box>
        )}
      </Box>

      {/* Script Question Box */}
      <Box mt={2} display="flex" alignItems="center">
        <Box sx={{ width: "40%" }}>
          <Typography variant="h6" gutterBottom>
            What is your Script?
          </Typography>
          <TextField
            id="script-input"
            label="Answer"
            value={scriptAnswer}
            onChange={handleScriptChange}
            variant="outlined"
            fullWidth
            className="script-text-area" // Add classname to differentiate
          />
        </Box>
        <IconButton
          sx={{
            position: "relative",
            top: "10px",
            left: "10px",
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
            "&:hover": { backgroundColor: colors.blueAccent[800] },
          }}
          onClick={handleScriptIconButtonClick}
        >
          <Help />
        </IconButton>
        {showScriptBox && (
          <Box
            id="script-box"
            sx={{
              position: "fixed",
              top: "33%",
              right: "120px",
              transform: "translateY(-50%)",
              width: "30%",
              backgroundColor: "#141B2D",
              p: "1rem",
              borderRadius: "0.5rem",
              boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.2)"
            }}
          >
            <Typography variant="h4" gutterBottom>
              Do our Snappy generate your script?
            </Typography>
            <TextField
              id="script-input"
              label="e.g. gaming, driving"
              value={scriptAnswer}
              onChange={handleScriptChange}
              variant="outlined"
              fullWidth
              className="script-text-area" // Add classname to differentiate
            />
            <Button variant="contained" style={{ marginTop: "15px", backgroundColor: "blue" }} onClick={handleScriptGenerate}>
              Generate
            </Button>
          </Box>
        )}
      </Box>

      <slider/>

      {/* Generate Button */}
      <Box mt={2} display="flex" >
        <Button variant="contained" style={{ backgroundColor: "blue" }} onClick={handleScriptGenerate}>
          Generate
        </Button>
      </Box>
    </Box>
 
  );
  
};

export default Dashboard;
