import React from "react";

interface ContainerPropsI {
  children: React.ReactNode;
}

const Container: React.FC<ContainerPropsI> = ({ children }) => {
  return <div className="mx-auto max-w-7xl">{children}</div>;
};

export default Container;
