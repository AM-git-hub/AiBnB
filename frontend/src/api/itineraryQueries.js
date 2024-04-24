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
        preferences
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
                itineraryInputData
            );

            console.log("response", response.data.itinerary);

            // get itinearry data
            const itinerary = JSON.parse(response.data.itinerary);

            // return itinerary data
            return itinerary;
        } catch (error) {
            console.log("error", error);
            alert("Something went wrong");
        }
    },
};
