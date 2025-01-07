import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";

interface Props {
  gender: string;
}

const GenderIcon = ({ gender }: Props) => {
  switch (gender) {
    case 'male':
      return <MaleIcon />;
    case 'female':
      return <FemaleIcon />;
    default:
      return null;
  }
};

export default GenderIcon;