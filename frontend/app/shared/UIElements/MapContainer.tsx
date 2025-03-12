import type { CSSProperties, PropsWithChildren } from "react";
import { Map } from "@vis.gl/react-google-maps";
import "./MapContainer.css";

export const MapContainer = (
  props: PropsWithChildren<{
    className?: string;
    style?: CSSProperties;
    center: { lat: number; lng: number };
    zoom: number;
  }>,
) => {
  return (
    <div className={`map ${props.className}`} style={props.style}>
      <Map
        defaultCenter={props.center}
        defaultZoom={props.zoom}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
      />
    </div>
  );
};
