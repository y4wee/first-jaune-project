import { Idetails } from "../../interfaces/profile";
import blank_pic from "../../assets/blank.png";

const Details = ({ name, city, description, photo }: Idetails) => {
  return (
    <div>
      <img src={photo ? photo : blank_pic} alt={name} />
      <h1>{name}</h1>
      <h2>{city}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Details;
