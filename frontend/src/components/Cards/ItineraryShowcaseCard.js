import React from "react";
import LargeHeading from "../Texts/LargeHeading";
import Button from "../Buttons/Button";

const dayActivity =
    "Consequat laborum do exercitation duis est deserunt non dolor cillum commodo esse amet. Eu duis anim velit cupidatat ipsum ullamco ex adipisicing nisi fugiat. In ut eiusmod ea mollit ullamco non incididunt mollit. Anim aliqua fugiat enim labore ipsum aliqua aliqua. Enim dolore sunt adipisicing aute reprehenderit consequat minim aliqua mollit ipsum. Dolore dolore minim quis voluptate voluptate minim ea Lorem est ex.";

const DayCard = ({ dayNumber, dayActivity }) => (
    <div className="border-2 border-white p-5 flex flex-col space-y-5">
        {/* Day Number */}
        <div>
            <span className="text-white text-3xl">Day {dayNumber}</span>
        </div>

        <div>
            <span className="text-white">{dayActivity}</span>
        </div>
    </div>
);

function ItineraryShowcaseCard({ itinerary }) {
    return (
        <div className="flex flex-col space-y-5">
            {/* Title */}
            <div>
                <LargeHeading>3 DAYS TRIP TO NEW YORK</LargeHeading>
            </div>

            {/* Show days data in cards */}

            <div className="flex flex-col space-y-10">
                {Array(5)
                    .fill(0)
                    .map((dayEvent) => (
                        <DayCard dayNumber={1} dayActivity={dayActivity} />
                    ))}
            </div>

            {/* Save Button to save the itinerary */}
            <div>
                <Button label="SAVE" />
            </div>
        </div>
    );
}

export default ItineraryShowcaseCard;
