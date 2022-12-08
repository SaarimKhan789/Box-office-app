import React from "react";
import IMAGE_NOT_FOUND from "../../images/notfound.png";
import ShowCard from "./ShowCard";
import { FlexGrid } from "../styled";
const ShowGrid = ({ data }) => {
  return (
    <FlexGrid>
      {data.map(({ show }) => (
        <ShowCard
          key={show.id}
          id={show.id}
          name={show.name}
          image={show.image ? show.image.medium : IMAGE_NOT_FOUND}
          summmary={show.summmary}
        />
      ))}
    </FlexGrid>
  );
};

export default ShowGrid;
