import Card from "~/shared/UIElements/Card";
import "./PlaceItem.css";
import Button from "~/shared/FormElements/Button";
import { useContext, useState } from "react";
import { Modal } from "~/shared/UIElements/Modal";
import { MapContainer } from "~/shared/UIElements/MapContainer";
import { AuthContext } from "~/shared/context/AuthContext";

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
  const authContext = useContext(AuthContext);
  const [showMap, setShowMap] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const openMapHandler = () => setShowMap(true);
  const closeMapHandler = () => setShowMap(false);
  const openDeleteConfirmHandler = () => setShowDeleteModal(true);
  const closeDeleteConfirmHandler = () => setShowDeleteModal(false);
  const deleteHandler = () => {
    setShowDeleteModal(false);
    console.log("Deleting...");
  };

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
          <MapContainer center={place.location} zoom={16} />
        </div>
      </Modal>
      <Modal
        show={showDeleteModal}
        onCancel={closeDeleteConfirmHandler}
        header="Are you sure?"
        footerClass="place-item__modal-actions"
        footer={
          <>
            <Button inverse onClick={closeDeleteConfirmHandler}>
              Cancel
            </Button>
            <Button danger onClick={deleteHandler}>
              Delete
            </Button>
          </>
        }
      >
        <p>Do you want to proceed and delete this place?</p>
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
            {authContext.isLoggedIn && (
              <Button to={`/places/${place.id}`}>Edit</Button>
            )}
            {authContext.isLoggedIn && (
              <Button danger onClick={openDeleteConfirmHandler}>
                Delete
              </Button>
            )}
          </div>
        </Card>
      </li>
    </>
  );
};
