import React, { useEffect, useState } from "react";
import RunningTextLobbyComponent from "../Components/RunningTextLobbyComponent";
import RealTimeClock from "../Components/RealTimeClock";
import { GoDotFill } from "react-icons/go";
import CardJadwalRapat from "../Components/Atoms/CardJadwalRapat";
import AnimatedTextComponent from "../Components/AnimatedTextComponent";
import { getLobbyMeeting } from "../libs/meeting";

async function getMeetings() {
  try {
    const response = await getLobbyMeeting();
    if (response.success) return response.data;
    else return [];
  } catch (error) {
    console.error("Error fetching meetings:", error);
    return [];
  }
}

// Helper function to format date
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

// Helper function to find the meeting closest to the current time
const getClosestMeeting = (meetings) => {
  if (!meetings || meetings.length === 0) return null;

  if (meetings.length === 1) {
    const today = new Date();
    const offset = 7 * 60 * 60 * 1000; // GMT+7 offset
    const gmt7Today = new Date(today.getTime() + offset);

    // Set the hours to midnight for both the current date and the meeting's 'tanggal' date
    gmt7Today.setUTCHours(0, 0, 0, 0); // current date in GMT+7

    // Get the 'tanggal' from the meeting and set its time to midnight as well
    const meetingDate = new Date(meetings[0].tanggal);
    meetingDate.setUTCHours(0, 0, 0, 0); // ensure the meeting date has no time component

    // Compare the dates
    if (meetingDate.getTime() !== gmt7Today.getTime()) {
      return null; // Return null if the dates do not match
    }
  }

  const now = new Date().toLocaleString("en-US", { timeZone: "Asia/Jakarta" });
  const currentTime = new Date(now);

  let ongoingMeeting = null;
  let closestMeeting = null;
  let closestTimeDiff = Infinity;

  meetings.forEach((meeting, index) => {
    // Extract the date part (YYYY-MM-DD) from the meeting.tanggal
    const meetingDate = new Date(meeting.tanggal);
    const formattedDate = meetingDate.toISOString().split("T")[0]; // "YYYY-MM-DD"

    // Ensure that start_time and end_time are properly formatted
    const startTimeFormatted = meeting.start_time.padStart(5, "0"); // Ensure HH:mm format
    const endTimeFormatted = meeting.end_time.padStart(5, "0"); // Ensure HH:mm format

    // Create valid date strings
    const meetingStartTimeString = `${formattedDate}T${startTimeFormatted}`;
    const meetingEndTimeString = `${formattedDate}T${endTimeFormatted}`;

    // Create Date objects
    const meetingStartTime = new Date(meetingStartTimeString);
    const meetingEndTime = new Date(meetingEndTimeString);

    // Check if the current time is within the meeting time range
    if (currentTime >= meetingStartTime && currentTime <= meetingEndTime) {
      ongoingMeeting = meeting;
    }

    // Calculate the time difference for closest meeting
    const timeDiffStart = Math.abs(currentTime - meetingStartTime);
    if (timeDiffStart < closestTimeDiff) {
      closestTimeDiff = timeDiffStart;
      closestMeeting = meeting;
    }
  });

  // Remove the closest meeting from the array if it exists
  if (closestMeeting) {
    const index = meetings.findIndex(
      (meeting) => meeting.id === closestMeeting.id
    );
    if (index !== -1) {
      meetings.splice(index, 1); // Remove closest meeting from the array
    }
  }

  // Return the ongoing meeting if it exists, otherwise return the closest meeting
  return ongoingMeeting || closestMeeting;
};

export default function Lobby() {
  const [meetings, setMeetings] = useState([]);
  const [todayMeeting, setTodayMeeting] = useState(null);
  const [timeRemaining, setTimeRemaining] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const meetingData = await getMeetings();
      setMeetings(meetingData);

      // Get the closest meeting to the current time
      const closestMeeting = getClosestMeeting(meetingData);
      setTodayMeeting(closestMeeting);
    };

    // Fetch data initially
    fetchData();

    // Set up an interval to fetch data every 5 minutes (300000ms)
    const intervalId = setInterval(fetchData, 180000); // 300000ms = 5 minutes

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (todayMeeting) {
      const now = new Date().toLocaleString("en-US", {
        timeZone: "Asia/Jakarta",
      });
      const currentTime = new Date(now);
      const meetingDate = new Date(todayMeeting.tanggal);
      const formattedDate = meetingDate.toISOString().split("T")[0];
      const meetingStartTime = new Date(
        `${formattedDate}T${todayMeeting.start_time.padStart(5, "0")}:00`
      );

      // If the meeting is not ongoing, calculate the time remaining
      const timeDiff = meetingStartTime - currentTime;
      if (timeDiff > 0) {
        const minutesRemaining = Math.floor(timeDiff / 1000 / 60);
        setTimeRemaining(minutesRemaining);
      }
    }
  }, [todayMeeting]);

  return (
    <div className="h-screen my-0 pb-0 pt-4 bg-gray-100 flex flex-col">
      <div className="mx-6 flex gap-12 justify-between px-2 pb-2 pt-4">
        <div className="basis-6/12">
          <div>
            <RealTimeClock />
          </div>
          <div className="flex flex-col gap-3">
            {/* Rapat Hari Ini */}
            {!todayMeeting && (
              <h2 className="2xl:text-4xl text-3xl text-blue-950 mt-2">
                JADWAL RAPAT TERDEKAT
              </h2>
            )}
            {todayMeeting && (
              <div className="h-[345px] text-blue-950 bg-yellow-400 flex flex-col p-4 rounded-lg shadow-lg border-4 border-blue-950">
                <div className="flex justify-between text-blue-950">
                  <div>
                    <h2 className="text-5xl font-bold">RAPAT HARI INI</h2>
                    <p className="2xl:text-4xl text-2xl">
                      {todayMeeting.judul}
                    </p>
                  </div>
                  <div>
                    <p className="2xl:text-3xl text-xl">
                      {formatDate(todayMeeting.tanggal)}
                    </p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center mt-6 mb-2 gap-2">
                    <span className="text-xl text-red-700 animate-ping delay-700">
                      <GoDotFill />
                    </span>
                    <span className="2xl:text-3xl text-xl">
                      {timeRemaining > 0
                        ? `${timeRemaining} menit lagi`
                        : "Sedang Berlangsung"}
                    </span>
                  </div>
                </div>
                <div className="overflow-x-auto mt-2">
                  <table className="min-w-full table-auto border-collapse border-2 border-blue-950">
                    <thead>
                      <tr>
                        <th className="px-6 py-3 border-2 border-blue-950 text-left 2xl:text-3xl text-2xl font-medium">
                          Waktu
                        </th>
                        <th className="px-6 py-3 border-2 border-blue-950 text-left 2xl:text-3xl text-2xl font-medium">
                          Tempat
                        </th>
                        <th className="px-6 py-3 border-2 border-blue-950 text-left 2xl:text-3xl text-2xl font-medium">
                          Audiens
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-6 py-4 border-2 border-blue-950 2xl:text-3xl text-2xl font-bold">
                          {todayMeeting.start_time} - {todayMeeting.end_time}{" "}
                          WIB
                        </td>
                        <td className="px-6 py-4 border-2 border-blue-950 2xl:text-3xl text-2xl font-bold">
                          {todayMeeting.tempat}
                        </td>
                        <td className="px-6 py-4 border-2 border-blue-950 2xl:text-3xl text-2xl font-bold">
                          {todayMeeting.audiens}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Render upcoming meetings */}
            {meetings.map((meeting) => {
              const startTime = meeting.start_time.slice(0, 5); // Mengambil "HH:mm"
              const endTime = meeting.end_time.slice(0, 5); // Mengambil "HH:mm"

              return (
                <CardJadwalRapat
                  key={meeting.id}
                  title={meeting.judul}
                  date={`${startTime} - ${endTime} | ${formatDate(
                    meeting.tanggal
                  )}`}
                />
              );
            })}

            <div className="flex gap-2 text-gray-500 ml-56 pl-6 mt-2">
              <GoDotFill />
              <GoDotFill />
              <GoDotFill />
            </div>
          </div>
        </div>
        <div className="basis-6/12">
          <div
            className="text-right mb-10 cursor-pointer"
            onClick={() => {
              window.location.href = "/";
            }}
          >
            <h1 className="text-blue-950 2xl:text-4xl text-3xl font-bold">
              Balai Perkerasan dan Lingkungan Jalan
            </h1>
            <h2 className="text-blue-950 2xl:text-2xl text-xl font-semibold">
              Kementrian Pekerjaan Umum dan Perumahan Rakyat
            </h2>
          </div>
          <div className="flex justify-end">
            <iframe
              className="w-10/12 h-[345px] shadow-lg"
              src="https://www.youtube.com/embed/q45ep8wsDQ0?si=2-TeXVkyB38HC1pG&autoplay=1&loop=1&playlist=q45ep8wsDQ0"
              title="Profil BPLJ PURP"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen={true}
            />
          </div>
          <div className="flex ml-28 pl-2 mt-10">
            <AnimatedTextComponent />
          </div>
        </div>
      </div>
      <div className="flex w-full mt-auto gap-2">
        <div>
          <img
            src="/bpljori.png"
            alt="bpljori"
            className="ml-6 2xl:w-[108px] w-24 h-auto"
          />
        </div>
        <div className="w-full mt-2 z-50">
          <RunningTextLobbyComponent
            text={"Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet."}
          />
        </div>
        <div className="absolute bottom-0 right-0 mr-2">
          <img
            src="/mang-hade.png"
            alt="Mang Hade"
            className="3xl:w-[34rem] 2xl:w-96 w-64 h-auto"
          />
        </div>
      </div>
      <div className="flex justify-end lg:mr-72 3xl:mr-96">
        <p className="2xl:text-2xl text-blue-950 font-bold">
          Follow us: <span className="italic font-semibold">@pupr_bm_bplj</span>
        </p>
      </div>
    </div>
  );
}
