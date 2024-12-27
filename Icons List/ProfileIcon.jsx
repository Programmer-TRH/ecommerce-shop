import React from "react";

export default function ProfileIcon({className=""}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      xmlSpace="preserve"
      className={className}
    >
      <path
        d="M80 71.2V74c0 3.3-2.7 6-6 6H26c-3.3 0-6-2.7-6-6v-2.8c0-7.3 8.5-11.7 16.5-15.2.3-.1.5-.2.8-.4.6-.3 1.3-.3 1.9.1C42.4 57.8 46.1 59 50 59s7.6-1.2 10.8-3.2c.6-.4 1.3-.4 1.9-.1.3.1.5.2.8.4 8 3.4 16.5 7.8 16.5 15.1ZM50 53c-8.3 0-15-7.1-15-16.5S41.7 20 50 20s15 7.1 15 16.5S58.3 53 50 53Z"
        fill="none"
        stroke="#000"
        strokeWidth={5}
      />
    </svg>
  );
}
