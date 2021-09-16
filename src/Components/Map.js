import { useState } from 'react';
import ReactMapGL from 'react-map-gl';

export const Map = () => {
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 11,

  })
  return (
  <ReactMapGL
    mapStyle='mapbox://styles/fluturecode/cktip20cp0sj817qlkzcfbqwx'
    mapboxApiAccessToken={process.env.mapbox_key}
  {...viewport}>
  </ReactMapGL>
  )
}