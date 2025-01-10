import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { Entry } from "../../types";

interface Props {
  entry: Entry;
}

const HospitalEntry = ({ entry }: Props) => {
  return (
    <div className="entry">
      <div>{entry.date} <LocalHospitalIcon /></div>
      <div>{entry.description}</div>
      <div>diagnosed by {entry.specialist}</div>
    </div>
  );
};

export default HospitalEntry;