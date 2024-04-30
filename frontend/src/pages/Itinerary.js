import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { itineraryQueries } from "../api/itineraryQueries";
import { useSelector } from "react-redux";
import ShowcaseContainer from "../components/Utilities/ShowcaseContainer";
import ItineraryShowcaseCard from "../components/Cards/ItineraryShowcaseCard";
import Navbar from "../components/Utilities/Navbar";

function Itinerary() {
    // get access token
    const { accessToken } = useSelector((state) => state.UserReducer);

    // get route parameters
    const { id } = useParams();

    // STATES
    const [itinerary, setItinerary] = useState(null);

    // function to fetch itinerary data
    const fetchItineraryData = async () => {
        const itineraryById = await itineraryQueries.getItineraryById(
            id,
            accessToken
        );

        // set itinerary data
        setItinerary(itineraryById);
    };

    useEffect(() => {
        // fetch itinerary data
        fetchItineraryData();
    }, []);

    return (
        <div className="bg-black h-[100vh] overflow-x-hidden overflow-y-auto">
            <Navbar />
            <ShowcaseContainer>
                {itinerary && <ItineraryShowcaseCard itinerary={itinerary} />}
            </ShowcaseContainer>
        </div>
    );
}

export default Itinerary;
