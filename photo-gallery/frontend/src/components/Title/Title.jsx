import React from "react";

export default function Title({level, children}) {
  const Heading = `h${level}`;
  return <Heading>{children}</Heading>;
}
