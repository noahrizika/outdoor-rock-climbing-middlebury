import React from 'react';
import { GoogleMap, useLoadScript, Marker, OverlayView, OverlayViewF } from '@react-google-maps/api';

const libraries = ['places'];
const mapContainerStyle = {
  width: '60vw',
  height: '90vh',
};
const getPixelPositionOffset = (offsetWidth, offsetHeight, labelAnchor) => {
    return {
        x: offsetWidth + labelAnchor.x,
        y: offsetHeight + labelAnchor.y,
    };
};

const entrance = {
  lat: 43.9365, // latitude
  lng: -72.9493, // longitude
};
const roadsideBoulders = {
    lat: 43.9368, // latitude
    lng: -72.9496, // longitude
  };
const hpBoulders = {
    lat: 43.9369, // latitude
    lng: -72.9483, // longitude
  };

const Map = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: '<INSERT API KEY HERE>',
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }
  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
        <div className="map">
            <div>
                <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    zoom={18}
                    center={entrance}
                >
                    <Marker
                    title = "Midd Gap Entrance"
                    position={entrance}
                    icon={"http://maps.google.com/mapfiles/ms/icons/red-dot.png"}
                    key = "m1"
            />
                    <OverlayView
                        key='mwl'
                        position={entrance}
                        mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                        getPixelPositionOffset={(x, y) => getPixelPositionOffset(x, y, { x: -30, y: 5 })}
            >
                        <div
                            style={{
                                background: 'green',
                                padding: `2px 80px`,
                                fontSize: '18px',
                                color: `white`,
                                borderRadius: '10px',
                                textAlign : 'center',
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            {"Entrance\n43.9365,-72.9493"}
                        </div>
                    </OverlayView>

                    <Marker
                    title = "Boulder Area 1 - Roadside Boulders"
                    position={roadsideBoulders}
                    icon={"http://maps.google.com/mapfiles/ms/icons/purple-dot.png"}
                    key = "m2"
            />
                    <OverlayView
                        key='mwl'
                        position={roadsideBoulders}
                        mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                        getPixelPositionOffset={(x, y) => getPixelPositionOffset(x, y, { x: -30, y: 5 })}
            >
                        <div
                            style={{
                                background: 'green',
                                padding: `2px 80px`,
                                fontSize: '18px',
                                color: `white`,
                                borderRadius: '10px',
                                textAlign : 'center',
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            {"Roadside Boulders\n43.9365,-72.9493"}
                        </div>
                    </OverlayView>

                    <Marker
                    title = "Boulder Area 2 - Harry Potter Boulders"
                    position={hpBoulders}
                    icon={"http://maps.google.com/mapfiles/ms/icons/green-dot.png"}
                    key = "m3"
            />
                    <OverlayView
                        key='mwl'
                        position={hpBoulders}
                        mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                        getPixelPositionOffset={(x, y) => getPixelPositionOffset(x, y, { x: -30, y: 5 })}
            >
                        <div
                            style={{
                                background: 'green',
                                padding: `2px 80px`,
                                fontSize: '18px',
                                color: `white`,
                                borderRadius: '10px',
                                textAlign : 'center',
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            {"Harry Potter Boulders\n43.9365,-72.9493"}
                        </div>
                    </OverlayView>

                </GoogleMap>
            </div>
        </div>
  );
};

export default Map;