import React from "react";
import IMAGE_NOT_FOUND from "../../images/notfound.png";
import ShowCard from "./ShowCard";
const ShowGrid = ({ data }) => {
  return (
    <div>
      {data.map(({ show }) => (
        <ShowCard
          key={show.id}
          id={show.id}
          name={show.name}
          image={show.image ? show.image.medium : IMAGE_NOT_FOUND}
          summmary={show.summmary}
        />
      ))}
    </div>
  );
};

export default ShowGrid;
