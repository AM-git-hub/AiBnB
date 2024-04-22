import React from "react";

import BeachShowcase from "../assets/beachShowcase.jpeg"
import ShowcaseContainer from "../components/Utilities/ShowcaseContainer";
import Navbar from "../components/Utilities/Navbar";
import LargeHeading from "../components/Texts/LargeHeading";
import TextBox from "../components/Inputs/TextBox";
import Button from "../components/Buttons/Button";


function CreateItinerary() {
    return (
        <div className="h-[100vh] bg-black overflow-hidden">
            {/* Navbar */}
            <Navbar />
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
                            <div className="flex flex-row items-center space-x-10">
                                <TextBox placeholder="Start Date" />
                                <TextBox placeholder="End Date" />
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
                            <Button label="LET'S GO" />
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
