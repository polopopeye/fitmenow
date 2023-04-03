import React, { useMemo, useState } from 'react';

const VideoContainer = ({
  muscle,
  videoId,
}: {
  muscle: string;
  videoId: string;
}) => {
  // "abdominals"
  // "obliques"
  // "forearms"
  // "biceps"
  // "shoulders"
  // "traps"
  // "chest"
  // "quads"
  // "calves"
  // "hamstrings"
  // "lowerback"
  // "glutes"
  // "lats"
  // "traps_middle"
  // "triceps"

  return (
    <div className="w-full h-full">
      <div>VIDEO OF {muscle}</div>
      <div className="w-full h-full">
        <iframe
          className="w-full h-screen py-20 md:py-32"
          src={'https://tube.rvere.com/embed?v=' + videoId}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
        />
      </div>
    </div>
  );
};

export default VideoContainer;
