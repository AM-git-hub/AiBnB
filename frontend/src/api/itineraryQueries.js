import axios from "axios";
import { baseUrl } from "./baseUrl";

// function to calcualte days between the start date and the end date
const calculateDays = (startDate, endDate) => {
    // Create a start date and an end date Date object
    const startDateObject = new Date(startDate);
    const endDateObject = new Date(endDate);

    // calculate the difference between the two objects in milliseconds
    const timeDifference = endDateObject - startDateObject;

    // Convert milliseconds to days
    const days = timeDifference / (1000 * 3600 * 24);

    return days;
};

// function to convert preferences array to a string seperated
// by ,
const convertPreferencesToString = (preferences) => {
    return preferences.join(", ");
};

// export the queries handling requests regarding
// itinerary creation, storing, editing
export const itineraryQueries = {
    // createItinerary
    createItinerary: async (
        destination,
        startDate,
        endDate,
        guests,
        budget,
        preferences,
        accessToken
    ) => {
        // get the total number of days to create the itinerary for
        const days = calculateDays(startDate, endDate);

        // get the preferences in string format
        const preferencesString = convertPreferencesToString(preferences);

        // itinerary input data
        const itineraryInputData = {
            destination: destination,
            days: days,
            guests: guests,
            budget: budget,
            preferences: preferencesString,
        };

        try {
            // get the response generated
            const response = await axios.post(
                `${baseUrl}/itinerary/get-itinerary/`,
                itineraryInputData,
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            );

            console.log("response", response.data.data.itinerary);

            // get itinearry data
            const itinerary = JSON.parse(response.data.data.itinerary);

            // return itinerary data
            return itinerary;
        } catch (error) {
            console.log("error", error);
            alert("Something went wrong");
        }
    },

    // save itinerary
    saveItinerary: async (itineraryCreated, accessToken) => {
        // post the itinerary created
        try {
            await axios.post(
                `${baseUrl}/itinerary/create-itinerary/`,
                {
                    name: itineraryCreated["Title"],
                    itinerary_description: JSON.stringify(itineraryCreated),
                },
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            );
        } catch (error) {
            console.error("Something went wrong while saving itinerary", error);
        }
    },

    // get all itineraries
    getAllItineraries: async (accessToken) => {
        // get itineraries of the user
        try {
            const response = await axios.get(
                `${baseUrl}/itinerary/get-user-itineraries/?private=True`,
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            );

            // Unpack the itineraries
            const itineraries = response.data.data;

            return itineraries;

        } catch (error) {}
    },
};
