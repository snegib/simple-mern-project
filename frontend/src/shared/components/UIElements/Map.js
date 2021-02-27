import React, { useRef, useEffect } from "react";
import "./Map.css";

const Map = (props) => {
    const mapRef = useRef();

    //     // props destructuring, pulls properties key value from out of props
    const { center, zoom } = props;
    //     // this will run very first time in the code but after first render
    //     // so how it's estibilish connection betweeb mapRef and map Map() constractor
    //     useEffect(() => {
    //         const map = new window.googel.maps.Map(mapRef.current, {
    //             center: center,
    //             zoom: zoom,
    //         });

    //         // create a marker in center of our map
    //         new window.googel.maps.Marker({ position: center, map: map });
    //     }, [center, zoom]);

    useEffect(() => {
        new window.ol.Map({
            target: mapRef.current.id,
            layers: [
                new window.ol.layer.Tile({
                    source: new window.ol.source.OSM(),
                }),
            ],
            view: new window.ol.View({
                center: window.ol.proj.fromLonLat([center.lng, center.lat]),
                zoom: zoom,
            }),
        });
    }, [center, zoom]);
    return (
        <div
            ref={mapRef}
            className={`map ${props.className}`}
            style={props.style}
            id="map"
        ></div>
    );
};

export default Map;
