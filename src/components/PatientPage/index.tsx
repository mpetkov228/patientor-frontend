import { useParams } from "react-router-dom";
import { Diagnosis, Patient } from "../../types";

import GenderIcon from "./GenderIcon";

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
          <div key={entry.id}>
            <div>{entry.date} {entry.description}</div>
            <ul>
              {entry.diagnosisCodes?.map(code => 
                <li key={code}>{code} {diagnoses.find(d => d.code === code)!.name}</li>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default PatientPage;