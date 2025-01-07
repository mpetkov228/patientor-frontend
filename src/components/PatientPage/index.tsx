import { useParams } from "react-router-dom";
import { Patient } from "../../types";

import GenderIcon from "./GenderIcon";

interface Props {
  patients: Patient[];
}

const PatientPage = ({ patients }: Props) => {
  const id = useParams().id;
  const patient = patients.find(p => p.id === id);

  if (!patient) {
    return null;
  }

  return (
    <div>
      <h2>{patient.name} <GenderIcon gender={patient.gender} /></h2>
      <div>ssn: {patient.ssn}</div>
      <div>occupation: {patient.occupation}</div>
    </div>
  );
};

export default PatientPage;