import React, { Fragment, useState } from "react";
import ReactMapGl, { Marker, NavigationControl } from "react-map-gl";

function Map() {
    const [viewport, setViewport] = useState({
        latitude: 44.12391938671472,
        longitude: 18.11580200025107,
        // width: "100%",
        // height: "100%",
        zoom: 17,
        minZoom: 1.5,
    });

    const onViewportChange = (viewport) => {
        const { width, height, ...etc } = viewport;
        setViewport(etc);
    };

    return (
        <Fragment>
            <ReactMapGl
                width="100%"
                height="100%"
                {...viewport}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_KEY}
                mapStyle="mapbox://styles/mapbox/streets-v11"
                onViewportChange={(viewport) => onViewportChange(viewport)}
            >
                <Marker latitude={44.124021} longitude={18.11575}>
                    <i className="fas fa-map-marker-alt"></i>
                </Marker>
                ))
                <NavigationControl
                    className="mapboxgl-ctrl-top-right"
                    showCompass={false}
                    onViewportChange={(viewport) => {
                        setViewport({
                            ...viewport,
                            minZoom: 1.6,
                        });
                    }}
                />
            </ReactMapGl>
        </Fragment>
    );
}

export default Map;
