import Card from "~/shared/UIElements/Card";
import "./PlaceItem.css";
import Button from "~/shared/FormElements/Button";
import { useState } from "react";
import { Modal } from "~/shared/UIElements/Modal";

export type PlaceItemType = {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
  address: string;
  creator: string;
  location: {
    lat: number;
    lng: number;
  };
};

export const PlaceItem = ({ place }: { place: PlaceItemType }) => {
  const [showMap, setShowMap] = useState(false);

  const openMapHandler = () => setShowMap(true);
  const closeMapHandler = () => setShowMap(false);

  return (
    <>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={place.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeMapHandler}>Close</Button>}
      >
        <div className="map-container">
          <h2>map container</h2>
        </div>
      </Modal>
      <li className="place-item">
        <Card className="place-item__content">
          <div className="place-item__image">
            <img src={place.imageUrl} alt={place.title} />
          </div>
          <div className="place-item__info">
            <h2>{place.title}</h2>
            <h3>{place.address}</h3>
            <p>{place.description}</p>
          </div>
          <div className="place-item__actions">
            <Button inverse onClick={openMapHandler}>
              View on map
            </Button>
            <Button to={`/places/${place.id}`}>Edit</Button>
            <Button danger>Delete</Button>
          </div>
        </Card>
      </li>
    </>
  );
};
