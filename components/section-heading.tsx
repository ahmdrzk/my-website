import React from "react";

type SectionHeadingProps = {
  as: React.ElementType;
  children: string;
};

const SectionHeading = ({ as: HTMLTag, children }: SectionHeadingProps) => {
  return (
    <div className="heading-container">
      <HTMLTag>{children}</HTMLTag>
      <div className="heading-border"></div>
    </div>
  );
};

export default SectionHeading;
