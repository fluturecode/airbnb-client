import ReactMapGL from 'react-map-gl';

export const Map = () => {
  return (
  <ReactMapGL
  mapStyle='mapbox://styles/fluturecode/cktip20cp0sj817qlkzcfbqwx'
  mapboxApiAccessToken={process.env.mapbox_key}>
  </ReactMapGL>
  )
}