import React, { useState } from "react";
import { ReactTyped } from "react-typed";

const AnimatedTextComponent = () => {
  const [key, setKey] = useState(0); // Key will trigger a re-render

  const handleComplete = () => {
    // Set a 4-second delay before re-rendering
    setTimeout(() => {
      setKey((prevKey) => prevKey + 1); // Trigger re-render by updating the key
    }, 4000); // 4000 ms = 4 seconds
  };

  return (
    <div className="3xl:text-6xl text-5xl flex flex-col gap-3">
      <p className="font-bold">
        <ReactTyped
          key={key}
          strings={["<span class='text-blue-700'>H</span>armonic"]}
          typeSpeed={200}
          showCursor={false}
        />
      </p>
      <p className="font-bold">
        <ReactTyped
          key={key}
          strings={["<span class='text-blue-700'>A</span>daptive"]}
          typeSpeed={200}
          showCursor={false}
          startDelay={3000}
        />
      </p>
      <p className="font-bold">
        <ReactTyped
          key={key}
          strings={["<span class='text-blue-700'>D</span>edicated"]}
          typeSpeed={200}
          showCursor={false}
          startDelay={6000}
        />
      </p>
      <p className="font-bold">
        <ReactTyped
          key={key}
          strings={["<span class='text-blue-700'>E</span>xcellent"]}
          typeSpeed={200}
          showCursor={false}
          startDelay={9000}
          onComplete={handleComplete} // Trigger re-render with a 4-second delay
        />
      </p>
    </div>
  );
};

export default AnimatedTextComponent;
