import { Entry } from "../../types";

interface Props {
  entry: Entry;
}

const HealthCheckEntry = ({ entry }: Props) => {

  if (entry.type !== 'HealthCheck') {
    return null;
  }

  return (
    <div className="entry">
      <div>{entry.date}</div>
      <div>{entry.description}</div>
      <div>{entry.healthCheckRating}</div>
      <div>diagnosed by {entry.specialist}</div>
    </div>
  );
};

export default HealthCheckEntry;