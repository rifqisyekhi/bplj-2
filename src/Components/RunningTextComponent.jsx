import React, { useEffect } from "react";
import axios from "axios";
import { getRunningText } from "../libs/meeting";

const formatDate = (dateString) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const date = new Date(dateString);
  return date.toLocaleDateString("id-ID", options); // Adjust locale if needed
};

export default function RunningTextComponent({ text }) {
  const [content, setContent] = React.useState(text);

  useEffect(() => {
    (async () => {
      try {
        const response = await getRunningText();

        // Assuming `response.data` is the meetings array
        const meetings = response.data;

        // Generate one line string with all meetings formatted
        const formattedMeetings = meetings
          .map((meeting) => {
            return `${meeting.judul} (${meeting.start_time} - ${
              meeting.end_time
            }) ${formatDate(meeting.tanggal)}`;
          })
          .join(" | "); // Join all formatted meetings with a separator

        setContent(formattedMeetings); // Update state with the formatted string
      } catch (error) {
        console.error("Error fetching meetings:", error);
      }
    })();
  }, []);

  return (
    <div className="bg-yellow-400 text-blue-950 mt-4 py-4 px-1 overflow-hidden">
      <div className="marquee">
        <div className="marquee-content">
          <span className="text-3xl font-semibold italic whitespace-nowrap">
            {content || "Belum ada rapat hari ini"}
          </span>
          <span className="text-3xl font-semibold italic whitespace-nowrap">
            {content || "Belum ada rapat hari ini"}
          </span>
        </div>
      </div>
    </div>
  );
}
