import React from "react";

const Header = () => {
  return (
    <div className="absolute top-0 left-0 w-full px-8 py-2 bg-gradient-to-b from-black z-10">
      {/* Kept the logo area fixed at the top and above all other content */}
      <img
        className="w-44"
        alt="netflix-logo"
        src="https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg"
      />
    </div>
  );
};

export default Header;
