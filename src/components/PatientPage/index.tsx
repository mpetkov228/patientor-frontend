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

  console.log(patient.entries);

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
                <li key={code}>{code}</li>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default PatientPage;