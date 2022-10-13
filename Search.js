import { Grid, TextField } from "@mui/material";
import React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";

const Search = () => {
  return (
    <div className="routees">
      <TextField
        placeholder="What are you looking for?"
        className="field"
        type="text"
        color="success"
        label="Search"
      ></TextField>
     <Grid className="search">
     <Paper
        component="form"
        elevation={3}
        sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
      >
        <IconButton sx={{ p: "10px" }} aria-label="menu">
          <MenuIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search Product name"
          inputProps={{ "aria-label": "search product name" }}
        />
        <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
        <Divider sx={{ height: 30, m: 0.5 }} orientation="vertical" />
        <IconButton color="info" sx={{ p: "10px" }} aria-label="directions">
          <DirectionsIcon />
        </IconButton>
      </Paper>
     </Grid>
    </div>
  );
};

export default Search;
