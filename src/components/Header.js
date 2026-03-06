import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((store) => store.user);
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <div className=" flex justify-between absolute top-0 left-0 w-full px-8 py-2 bg-gradient-to-b from-black z-10">
      {/* Kept the logo area fixed at the top and above all other content */}
      <img
        className="w-44"
        alt="netflix-logo"
        src="https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg"
      />
      {user && (
        <div className="flex p-2">
          <img className="w-12 h-12" alt="user-icon" src={user?.photoURL} />
          <button
            onClick={handleSignOut}
            className=" w-auto h-8 bg-red-700 m-2 font-semibold text-white"
          >
            {" "}
            (Sign out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
