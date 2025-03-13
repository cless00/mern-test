import Button from "~/shared/FormElements/Button";
import { Input } from "~/shared/FormElements/Input";

import "./PlaceForm.css";
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "~/util/validators";
import type { PlaceItemType } from "~/places/PlaceItem";
import { useParams } from "react-router";

const DUMMY_PLACES: PlaceItemType[] = [
  {
    id: "123",
    title: "경복궁",
    imageUrl:
      "https://lh5.googleusercontent.com/p/AF1QipNn5BjLpnjEbPhCmojbIWWb4YIcLAPx446IMJXq=w426-h240-k-no",
    description:
      "14세기 조선 왕조에서 사용한 웅장한 거주지로 현재는 민속 박물관과 왕실 문화 박물관이 있습니다.",
    address: "서울특별시 종로구 삼청로 37",
    creator: "u1",
    location: {
      lat: 37.5785635,
      lng: 126.9769535,
    },
  },
  {
    id: "124",
    title: "경복궁",
    imageUrl:
      "https://lh5.googleusercontent.com/p/AF1QipNn5BjLpnjEbPhCmojbIWWb4YIcLAPx446IMJXq=w426-h240-k-no",
    description:
      "14세기 조선 왕조에서 사용한 웅장한 거주지로 현재는 민속 박물관과 왕실 문화 박물관이 있습니다.",
    address: "서울특별시 종로구 삼청로 37",
    creator: "u2",
    location: {
      lat: 37.5785635,
      lng: 126.9769535,
    },
  },
];

export const UpdatePlace = () => {
  const placeId = useParams().placeId;
  const identifiedPlace = DUMMY_PLACES.find((p) => p.id === placeId);

  if (!identifiedPlace) {
    return (
      <div className="center">
        <h2>Place not found.</h2>
      </div>
    );
  }

  return (
    <>
      <form className="place-form">
        <Input
          id="title"
          element="input"
          type="text"
          label="Title"
          errorText="Please enter a valid title."
          validators={[VALIDATOR_REQUIRE()]}
          onInput={() => {}}
          value={identifiedPlace.title}
          valid={true}
        />
        <Input
          id="description"
          type="text"
          label="Description"
          errorText="Please enter a valid description. (at least 5 characters)"
          validators={[VALIDATOR_MINLENGTH(5)]}
          onInput={() => {}}
          value={identifiedPlace.description}
          valid={true}
        />
        <Button type="submit" disabled={true}>
          Update place
        </Button>
      </form>
    </>
  );
};

export default UpdatePlace;
