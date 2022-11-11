import React, { useContext } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';
import { LocContext } from '../context/ReactContext';

function Mapp() {
  const { loc: { lat, long } } = useContext(LocContext);

  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat, lng: long }}
    />
  );
};

const WrappedMap = withScriptjs(withGoogleMap(Mapp));

const GOOGLE_URL_PART1 = 'https://maps.googleapis.com/maps/api/';
const GOOGLE_URL_PART2 = 'js?v=3.exp&libraries=geometry,drawing,places';

export const MapFragment = () => {
  return (
    <div className='h-[50%] w-[100%]'>
      <WrappedMap
        loadingElement={<div style={{ height: '100%' }}/>}
        containerElement={<div style={{ height: '100%' }}/>}
        mapElement={<div style={{ height: '100%' }}/>}
        googleMapURL={`${GOOGLE_URL_PART1}${GOOGLE_URL_PART2}`}
      />
    </div>
  );
};
