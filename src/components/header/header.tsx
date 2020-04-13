import React from "react";
type HeaderProps = {
  name: "Abhishek" | "Akshay";
};

const Header = (props: HeaderProps) => {
  return (
    <div>
      <h1>hello {props.name} </h1>
    </div>
  );
};

export default Header;
