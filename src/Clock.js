import React from "react";
import { DateTime } from "luxon";

const Clock = () => {
    const dateTime = DateTime.local().setLocale("nb-NO");

    console.log(DateTime.DATE_FULL)

    return <div className="clock">
        <h2 className="time">
            {dateTime.toLocaleString(DateTime.TIME_24_SIMPLE)}
        </h2>
        <h2>
            {dateTime.toLocaleString(DateTime.DATE_FULL)}
        </h2>
        <h2>
            {dateTime.toLocaleString({
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric"
            })}
        </h2>
    </div>
};

export default Clock;