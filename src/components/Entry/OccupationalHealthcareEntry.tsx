import { Entry } from "../../types";

interface Props {
  entry: Entry;
}

const OccupationalHealthcareEntry = ({ entry }: Props) => {

  if (entry.type !== 'OccupationalHealthcare') {
    return null;
  }

  return (
    <div className="entry">
      <div>{entry.date} {entry.employerName}</div>
      <div>{entry.description}</div>
      <div>diagnosed by {entry.specialist}</div>
    </div>
  );
};

export default OccupationalHealthcareEntry;