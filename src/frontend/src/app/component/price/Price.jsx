import React from "react";
import "./style.css";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import TextField from "@material-ui/core/TextField";

const Price = () => {
  const [value, setValue] = React.useState([2, 500]);

  // Changing State when volume increases/decreases
  const rangeSelector = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };

  return (
    <div
      className="pricing"
      style={{
        margin: "auto",
        display: "block",
        width: "fit-content",
      }}
    >
      <h3>Pricing</h3>
      <Typography id="range-slider" gutterBottom>
        Select Price Range:
      </Typography>
      <Slider value={value} onChange={rangeSelector} valueLabelDisplay="auto" max={1000}/>
      <div className="row">
        {" "}
        <div className="col-lg-6">
          {" "}
          <TextField
            value={value[0]}
            error
            label="min"
            // defaultValue={value[0]}
            variant="outlined"
          />
        </div>
        <div className="col-lg-6">
          {" "}
          <TextField
            value={value[1]}
            error
            label="max"
            // defaultValue={value[1]}
            variant="outlined"
          />
        </div>
      </div>
      min ${value[0]} - max ${value[1]}
    </div>
  );
};

export default Price;
