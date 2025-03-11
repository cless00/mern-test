import { PlaceList } from "~/places/PlaceList";
import type { PlaceItemType } from "~/places/PlaceItem";

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
export const UserPlaces = () => {
  return <PlaceList items={DUMMY_PLACES} />;
};

export default UserPlaces;
