import { useParams } from "react-router";
import Card from "~/shared/UIElements/Card";
import { PlaceItem, type PlaceItemType } from "~/places/PlaceItem";
import "./PlaceList.css";
import Button from "~/shared/FormElements/Button";

export const PlaceList = ({ items }: { items: PlaceItemType[] }) => {
  const userId = useParams().userId;
  const loadedItems = items.filter((place) => place.creator === userId);
  if (loadedItems.length === 0) {
    return (
      <>
        <div className="place-list center">
          <Card>
            <h2>Place not found. Create?</h2>
            <Button>Share place</Button>
          </Card>
        </div>
      </>
    );
  }
  return (
    <>
      <ul className="place-list">
        {loadedItems.map((place) => (
          <PlaceItem key={place.id} place={place} />
        ))}
      </ul>
    </>
  );
};
