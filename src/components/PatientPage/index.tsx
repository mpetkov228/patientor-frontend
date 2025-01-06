import { useParams } from "react-router-dom";
import { Patient } from "../../types";

interface Props {
  patients: Patient[];
}

const PatientPage = ({ patients }: Props) => {
  const id = useParams().id;
  const patient = patients.find(p => p.id === id);

  return (
    <div>
      <h2>{patient.name}</h2>
      <div>ssn: {patient.ssn}</div>
      <div>occupation: {patient.occupation}</div>
    </div>
  );
};

export default PatientPage;