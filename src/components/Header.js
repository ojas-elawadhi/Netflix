import React, { useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/slices/userSlice";
import { NETFLIX_LOGO, USER_AVATAR } from "../utils/constants";
import { toggleSearchView } from "../utils/slices/searchSlice";
import down from "../assets/down.png";
import up from "../assets/up.png";
import ProfileModal from "./ProfileModal";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showProfile, setShowProfile] = useState(false);
  const user = useSelector((store) => store.user);
  const currentLocation = window.location.pathname;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        if(currentLocation==="/"){
          navigate("/browse");
        }
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    //Unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleSearch = () => {
    dispatch(toggleSearchView());
    navigate("/search")
  };

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="sticky top-0 z-50">
      <div
        className={`${
          user ? " max-h-14" : "min-h-24"
        } absolute w-screen pl-0 sm:px-[1.5vw] z-30 flex justify-between pt-2 ${
          scrollPosition ? "bg-[#141414]" : " bg-gradient-to-b from-black"
        }  `}
      >
        <div className="flex gap-8">
          <img
            className={`${user ? "w-28 h-12 ml-[2vw]" : "w-32 sm:w-52"} cursor-pointer`}
            src={NETFLIX_LOGO}
            alt="Netflix"
            onClick={()=>navigate("/browse")}
          />
          {user && (
            <div className="flex gap-8">
              <button className={`${currentLocation==="/browse"? "font-bold":"font-normal"} text-white flex items-center hover:text-[#E50914]`} onClick={()=>navigate("/browse")}>
                Home
              </button>
              <button className="text-white font-semibold flex items-center hover:text-[#E50914]">
                My List
              </button>
            </div>
          )}
        </div>
        {user && (
          <div className="flex px-4">
            <button
              onClick={handleSearch}
              className=" mx-4 h-8 py-3 px-3 text-white "
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="search-icon ltr-4z3qvp e1svuwfo1"
                data-name="MagnifyingGlass"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10ZM15.6177 17.0319C14.078 18.2635 12.125 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 12.125 18.2635 14.078 17.0319 15.6177L22.7071 21.2929L21.2929 22.7071L15.6177 17.0319Z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
            <div
              className="flex cursor-pointer"
              onMouseEnter={() => setShowProfile(true)}
              onMouseLeave={() => setShowProfile(false)}
            >
              <p className="font-semibold my-2 text-lg text-white mr-8">
                {user.displayName || "User"}
              </p>
              <img className="w-8 h-8 my-2" src={USER_AVATAR} alt="usericon" />
              <img className="w-5 h-5 my-3 " src={showProfile ? up : down} alt="arrow" />
            {showProfile && <ProfileModal name={user.displayName} />}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
