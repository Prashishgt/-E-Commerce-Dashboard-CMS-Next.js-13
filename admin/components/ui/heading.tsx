import React from "react";

interface HeadingPropsI {
  title: string;
  description: string;
}

const Heading = ({ title, description }: HeadingPropsI) => {
  return (
    <div>
      <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
      <p className="text-sm text-muted-foreground pt-1">{description}</p>
    </div>
  );
};

export default Heading;
