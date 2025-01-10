import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import { Entry } from "../../types";
import HealthCheckIcon from './HealthCheckIcon';

interface Props {
  entry: Entry;
}

const HealthCheckEntry = ({ entry }: Props) => {

  if (entry.type !== 'HealthCheck') {
    return null;
  }

  return (
    <div className="entry">
      <div>{entry.date} <MedicalServicesIcon /></div>
      <div>{entry.description}</div>
      <div><HealthCheckIcon rating={entry.healthCheckRating} /></div>
      <div>diagnosed by {entry.specialist}</div>
    </div>
  );
};

export default HealthCheckEntry;