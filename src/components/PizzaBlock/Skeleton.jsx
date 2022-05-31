import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="134" cy="121" r="114" />
    <rect x="0" y="259" rx="10" ry="10" width="280" height="27" />
    <rect x="0" y="317" rx="10" ry="10" width="280" height="88" />
    <rect x="0" y="435" rx="10" ry="10" width="90" height="27" />
    <rect x="124" y="426" rx="25" ry="25" width="153" height="45" />
  </ContentLoader>
)

export default Skeleton
