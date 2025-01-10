import { useParams } from "react-router-dom";
import { Diagnosis, Patient } from "../../types";

import GenderIcon from "./GenderIcon";
import EntryDetails from "../Entry/EntryDetails";

interface Props {
  patients: Patient[];
  diagnoses: Diagnosis[];
}

const PatientPage = ({ patients, diagnoses }: Props) => {
  const id = useParams().id;
  const patient = patients.find(p => p.id === id);

  if (!patient || !diagnoses) {
    return null;
  }

  return (
    <div>
      <h2>{patient.name} <GenderIcon gender={patient.gender} /></h2>
      <div>ssn: {patient.ssn}</div>
      <div>occupation: {patient.occupation}</div>
      <h3>entries</h3>
      <div>
        {patient.entries.map(entry => 
          <EntryDetails key={entry.id} entry={entry} />
        )}
      </div>
    </div>
  );
};

export default PatientPage;