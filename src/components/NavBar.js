import React from "react";

function linkLink(link) {
  return (
    <a href={"#"+link} key={link}>{link}</a>
  )
}

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>{links.map(link=>{return linkLink(link)})}</nav>;
}

export default NavBar;
