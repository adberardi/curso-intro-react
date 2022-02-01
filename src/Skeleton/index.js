import React from "react";
import ContentLoader from "react-content-loader";

const Loading = () => (
  <div className="TodoItem">
    <ContentLoader
      speed={2}
      width={480}
      height={48}
      viewBox="0 0 480 48"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="10" y="12" width="12" height="12" />
      <rect x="25" y="15" rx="5" ry="5" width="220" height="10" />
    </ContentLoader>
  </div>
);

export { Loading };
