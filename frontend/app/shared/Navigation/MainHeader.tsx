import "./MainHeader.css";
import type { PropsWithChildren } from "react";

export const MainHeader = (props: PropsWithChildren) => {
  return <header className="main-header">{props.children}</header>;
};
