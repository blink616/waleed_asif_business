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
            fill: "#b6bac2",
            fontSize: "25px",
            fontWeight: "bolder",
          },
          // Customize background - only used when the `background` prop is true
          trail: {
            // Trail color
            stroke: "#b6bac2",
          },
          path: {
            stroke: "#b6bac2",
          },
        }}
        className="progress-bar-circle"
        text={`${props.percentage}%`}
      />
    );
  };