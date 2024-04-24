import React, { useState } from "react";

import BeachShowcase from "../assets/beachShowcase.jpeg";
import ShowcaseContainer from "../components/Utilities/ShowcaseContainer";
import Navbar from "../components/Utilities/Navbar";
import LargeHeading from "../components/Texts/LargeHeading";
import TextBox from "../components/Inputs/TextBox";
import Button from "../components/Buttons/Button";
import DateInput from "../components/Inputs/DateInput";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Utilities/Loader";

function CreateItinerary() {
    // STATES
    const [location, setLocation] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [preference, setPreference] = useState("");
    const [guests, setGuests] = useState();
    const [preferences, setPreferences] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    // HOOKS
    const navigate = useNavigate();

    // function to create itinerary
    const createItinerary = () => {
        setIsLoading(true);

        // test the loader to show for 4 seconds
        setTimeout(() => {
            setIsLoading(false);
        }, 4000);
    };

    return (
        <div className="h-[100vh] relative bg-black overflow-hidden">
            {/* Navbar */}
            <Navbar />
            {/* Loader */}
            {isLoading && (
                <div className="absolute top-0 left-0 h-[100%] w-[100%]">
                    <Loader />
                </div>
            )}
            <ShowcaseContainer>
                {/* Main */}
                <div className="h-[100%] flex flex-col justify-center">
                    <LargeHeading>AIBNB YOUR NEXT TRIP</LargeHeading>

                    <div className="flex flex-row mt-5 space-x-10">
                        {/* Itinerary Form */}
                        <div className="flex flex-col flex-1 space-y-8">
                            {/* Location Input */}
                            <div>
                                <TextBox placeholder="Enter Location" />
                            </div>

                            {/* Date Inmput */}
                            <div className="flex flex-row items-end space-x-10">
                                <DateInput placeholder="Start Date" />
                                <span className="text-white">TO</span>
                                <DateInput placeholder="End Date" />
                            </div>

                            {/* User Preferences */}
                            <div>
                                <TextBox placeholder="Preferences" />
                            </div>

                            {/* Guests */}
                            <div>
                                <TextBox placeholder="Guests" />
                            </div>

                            {/* Submit form */}
                            <Button
                                label="LET'S GO"
                                onClick={createItinerary}
                            />
                        </div>

                        {/* Form Showcase Image */}
                        <div className="flex flex-1 flex-col">
                            <img src={BeachShowcase} />
                        </div>
                    </div>
                </div>
            </ShowcaseContainer>
        </div>
    );
}

export default CreateItinerary;
