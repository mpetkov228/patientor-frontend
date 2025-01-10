import FavoriteIcon from '@mui/icons-material/Favorite';

interface Props {
  rating: number;
}

const HealthCheckIcon = ({ rating }: Props) => {
  switch (rating) {
    case 0:
      return <FavoriteIcon style={{ color: 'green' }} />;
    case 1:
      return <FavoriteIcon style={{ color: 'yellow' }} />;
    case 2:
      return <FavoriteIcon style={{ color: 'orange' }} />;
    case 3:
      return <FavoriteIcon style={{ color: 'red' }} />;
    default:
      return null;
  }
};

export default HealthCheckIcon;