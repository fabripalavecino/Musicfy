import React from "react";
import Link from "./Link";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link href="/" className="item">
        Home
      </Link>
      <Link href="/album" className="item">
        Create New Album
      </Link>
      <Link href="/list" className="item">
        List of Albums
      </Link>
    </div>
  )
}

export default Header;