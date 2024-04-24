import React from "react";

function DateInput({ placeholder, inputValue }) {
    return (
        <input
            className="h-[50px] p-4 bg-transparent text-white outline-none border-b-2 border-white  w-[100%]"
            type="date"
            value={inputValue}
            placeholder={placeholder}
        />
    );
}

export default DateInput;
