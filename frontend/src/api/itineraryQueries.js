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

// function to convert itinerary day keys to a consolidated
// array "days"
const transformItineraryData = (itinerary) => {
    console.log("itinerary", itinerary.Title);

    // create a transformed itinerary data to which
    // we will push the data for each day
    const transformedItineraryData = {
        title: itinerary["Title"],
        days: [],
    };

    // Iterate through each property in itinerary
    for (const key in itinerary) {
        // Check if the key starts with "Day"
        if (key.startsWith("Day")) {
            // Add the Day's data into the array
            transformItineraryData.days.push(itinerary[key]);
        }
    }

    // return the transformed data
    return transformedItineraryData;
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

            // get itinearry data
            const itinerary = JSON.parse(response.data.itinerary);


            // transform itinerary to a usable format
            const transformedItineraryData = transformItineraryData(itinerary);

            // return itinerary data
            return transformedItineraryData;
        } catch (error) {
            console.log("error", error);
            alert("Something went wrong");
        }
    },
};
