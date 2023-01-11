import { ProgressBar } from "react-bootstrap";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export const ShowProgress = (props) => {
    if (props.bar)
      return <ProgressBar now={props.percentage} className="barfiller" />;
    return (
      <CircularProgressbar
        value={props.percentage}
        styles={{
          text: {
            fill: "#d90a2c",
            fontSize: "25px",
            fontWeight: "bolder",
          },
          // Customize background - only used when the `background` prop is true
          trail: {
            // Trail color
            stroke: "#f88",
          },
          path: {
            stroke: "#d90a2c",
          },
        }}
        className="progress-bar-circle"
        text={`${props.percentage}%`}
      />
    );
  };