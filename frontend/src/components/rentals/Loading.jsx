import React from "react";

const Loading = () => {
  return (
    <div className="grid place-items-center gap-20 lg:gap-36 sm:grid-cols-2 md:grid-cols-3 mt-16">
        {'qwerty'.split("").map(i => (
            <p>gh</p>
        ))}
    </div>
  );
};

export default Loading;
