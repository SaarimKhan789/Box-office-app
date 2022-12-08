import React from "react";
import IMAGE_NOT_FOUND from "../../images/notfound.png";
import ShowCard from "./ShowCard";
import { FlexGrid } from "../styled";
import { useShows } from "../../misc/custom-hooks";
const ShowGrid = ({ data }) => {
  const [starredShows, dispatchStarred] = useShows();
  return (
    <FlexGrid>
      {data.map(({ show }) => {
        const isStarred = starredShows.includes(show.id);
        const onStartClick = () => {
          if (isStarred) {
            dispatchStarred({ type: "REMOVE", showId: show.id });
          } else {
            dispatchStarred({ type: "ADD", showId: show.id });
          }
        };
        return (
          <ShowCard
            key={show.id}
            id={show.id}
            name={show.name}
            image={show.image ? show.image.medium : IMAGE_NOT_FOUND}
            summmary={show.summmary}
            onStartClick={onStartClick}
            isStarred={isStarred}
          />
        );
      })}
    </FlexGrid>
  );
};

export default ShowGrid;
