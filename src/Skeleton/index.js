import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = () => (
  <div className="TodoItem">
    <ContentLoader
      speed={2}
      width={480}
      height={48}
      viewBox="0 0 480 48"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
            <rect x="48" y="20" rx="3" ry="3" width="88" height="6" /> 
    </ContentLoader>
  </div>
);

export { Skeleton };
