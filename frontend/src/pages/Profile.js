import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ShowcaseContainer from "../components/Utilities/ShowcaseContainer";
import { authQueries } from "../api/authQueries";
import Navbar from "../components/Utilities/Navbar";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import LargeHeading from "../components/Texts/LargeHeading";
import Caption from "../components/Texts/Caption";

const ProfileLabel = ({label, value}) => (
  <div className="flex flex-row">
    <span className="text-white font-bold">{label}:&nbsp;</span>
    <span className="text-white">{value}</span>
  </div>
)

function Profile() {
    // HOOKS
    const dispatch = useDispatch();

    // Get user acess and refresh token
    const { accessToken, profileData } = useSelector(
        (state) => state.UserReducer
    );

    // function to fetch profile data
    const fetchProfileData = async () => {
        // invoke a api call to get profile data
        await authQueries.getProfile(accessToken, profileData, dispatch);
    };

    // Get user information on load
    useEffect(() => {
        fetchProfileData();
    }, []);

    console.log("profile data", profileData);

    return (
        <div className="h-[100vh] overflow-hidden bg-black">
            {/* Navbar */}
            <Navbar />

            {/* Main */}
            <ShowcaseContainer>
                <div className="flex flex-row space-x-10 h-[100%] py-5">
                    {/* My profile information */}
                    <div className="p-5 flex flex-[0.2] flex-col border-2 border-white h-[80%]">
                        {/* Profile Image */}
                        <div>
                            <UserCircleIcon height={200} color="white" />
                        </div>

                        {/* Profile Information */}
                        <div>
                          <ProfileLabel label="Email" value={profileData.email} />
                          <ProfileLabel label="Name" value={`${profileData.first_name} ${profileData.last_name}`} />
                        </div>
                    </div>

                    <div className="flex flex-col flex-1 h-[80%] border-2 border-white p-5">
                      <LargeHeading>MY ITINERARIES</LargeHeading>

                      <div className="h-[100%] flex flex-col items-center justify-center">
                        <Caption>Nothing to show</Caption>
                      </div>
                    </div>
                </div>
            </ShowcaseContainer>
        </div>
    );
}

export default Profile;
