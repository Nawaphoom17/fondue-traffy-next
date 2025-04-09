/** @format */

import React, { useEffect, useRef, useState } from "react";
import axios from "axios";


const MapMain = ({ data, isMobile, clickForShowModalPost, handleDownload }) => {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);
  const markersRef = useRef([]);

  const [selectedButton, setSelectedButton] = useState("Marker");
  const [currentPosition, setCurrentPosition] = useState({
    lat: 13.7563,
    lng: 100.5018,
  });
  const [zoom, setZoom] = useState(11);
  // 6.3

  const [testData, setTestData] = useState(null);

  useEffect(() => {
    if (!testData) {
      const url = `https://publicapi.traffy.in.th/teamchadchart-stat-api/geojson/v1`;
      axios.get(url)
        .then((response) => {
          const data = response.data;
          console.log("🎯 ข้อมูลจาก API Bangkok:", data);
          // Optionally, update state with the fetched data:
          setTestData(data.features);
        })
        .catch((error) => {
          console.error("Error fetching API data:", error);
        });
    }
    else {
      initMap();
    }
  }, [testData]);


  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyDmAQ43JlSH303YzressfXApjE3j9-AJXI&libraries=marker,visualization&v=beta";
    script.async = true;
    script.onload = () => {
      if (window.google && window.google.maps) {
        initMap();
      } else {
        console.error("Google Maps API failed to load.");
      }
    };
    document.head.appendChild(script);
  }, []);


  useEffect(() => {
    if (mapInstance.current) {
      renderOverlays();
    }
  }, [selectedButton]);

  // useEffect(() => {
  //   initMap();
  // }, [currentPosition]);

  const initMap = () => {
    mapInstance.current = new window.google.maps.Map(mapRef.current, {
      center: currentPosition,
      zoom,
      mapId: "d7c62a106ea7cce5",
      zoomControl: false,
      streetViewControl: false,
      mapTypeControl: false,
      fullscreenControl: false,
      styles: [
        {
          featureType: "poi",
          elementType: "labels",
          stylers: [{ visibility: "off" }],
        },
      ],
    });
  };

  useEffect(() => {
    if (mapInstance.current && testData && testData.length > 0) {
      renderMarkers();
    }
  }, [testData, mapInstance.current]);

  const renderMarkers = () => {
    console.log("renderMarker")
    // if (!testData) return;

    // Clear overlays
    markersRef.current.forEach((marker) => (marker.map = null));
    markersRef.current = [];
    // heatmapRef.current?.setMap(null);
    // clusterRef.current?.clearMarkers?.();

    const clusterList = [];
    const heatList = [];

    testData.forEach((v) => {
      const coord = {
        lat: parseFloat(v.geometry.coordinates[1]),
        lng: parseFloat(v.geometry.coordinates[0]),
      };

      console.log("coord:", coord)

      const data_type = v.properties.problem_type_fondue;
      const color = v.properties.state_type_latest;
      const path_icon = getSrcIconMarkerState(data_type, color);

      const img = document.createElement("img");
      img.src = path_icon;
      img.style.width = "25px";
      img.style.height = "40px";

      const marker = new window.google.maps.marker.AdvancedMarkerElement({
        position: coord,
        content: img,
        map: null,
      });

      // Attach marker to the map
      marker.setMap(mapInstance.current); // Ensure marker is added to the map

      marker.addListener("click", () => handleMarkerClick(v));
      markersRef.current.push(marker);

      // heatList.push(new window.google.maps.LatLng(coord.lat, coord.lng));
      // clusterList.push({ position: coord, icon: path_icon, data: v });
    });

    // setHeatmapData(heatList);
    // setClusterData(clusterList);
  };

  const renderOverlays = () => {
    const map = mapInstance.current;

    // Clear all overlays first
    markersRef.current.forEach((marker) => marker.setMap(null));
    // heatmapRef.current?.setMap(null);
    // clusterRef.current?.clearMarkers?.();

    // MARKER view
    if (selectedButton === "Marker") {
      markersRef.current.forEach((marker) => marker.setMap(map));
    }

    // HEATMAP view
    // if (selectedButton === "Heatmap") {
    //   heatmapRef.current = new window.google.maps.visualization.HeatmapLayer({
    //     data: heatmapData,
    //     map,
    //     opacity: 1,
    //   });
    // }

    // CLUSTERING view
    // if (selectedButton === "Clustering") {
    //   const markers = clusterData.map((item) => {
    //     const icon = {
    //       url: item.icon,
    //       scaledSize: new window.google.maps.Size(25, 40),
    //     };
    //     const marker = new window.google.maps.Marker({
    //       position: item.position,
    //       icon,
    //     });
    //     marker.addListener("click", () => handleMarkerClick(item.data));
    //     return marker;
    //   });

    //   clusterRef.current = new MarkerClusterer({ map, markers });
    // }
  };

  const handleMarkerClick = (marker) => {
    if (isMobile) return;
    // const dataClick = { selectMarker: true, dataShowPostMarker: marker };
    // clickForShowModalPost(dataClick);
    console.log(marker);
  };

  const getSrcIconMarkerState = (_type_name, color) => {
    const stateMap = {
      start: "รอรับเรื่อง",
      report: "รอรับเรื่อง",
      inprogress: "กำลังดำเนินการ",
      finish: "เสร็จสิ้น",
      forward: "ส่งต่อ",
    };
    const typeMap = {
      ไฟฟ้า: "ไฟฟ้า",
      "ฝุ่นควัน&กลิ่น&PM2.5": "PM2.5",
      "ไฟฟ้า/แสงสว่าง": "ไฟฟ้า",
      ทางเท้า: "ทางเท้า",
      เสียงรบกวน: "เสียง",
      เสียง: "เสียง",
      ถนน: "ถนน",
      จราจร: "จราจร",
      คนจรจัด: "คนเร่ร่อน",
      สัตว์จรจัด: "สัตว์",
      ขยะ: "ความสะอาด",
    };

    const state = stateMap[color] || "กำลังดำเนินการ";
    const type = typeMap[_type_name?.[1] || _type_name?.[0]] || "อื่นๆ";
    return `pin_marker_v2/${type}_${state}.png`;
  };

  const handleClick = (buttonName) => setSelectedButton(buttonName);
  const handleDownloadCsvJson = (type) => handleDownload(type);

  const handleCurrentLocationClick = () => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        const currentPosition = { lat: latitude, lng: longitude };

        setCurrentPosition(currentPosition);
        setZoom(13);
      },
      (error) => console.log("Error getting current position:", error)
    );
  };

  return (
    <div className="map" style={{ height: "100%" }}>
      {/* <div className="tab-header-map">
        {!isMobile && (
          <div
            className="problem-nearly-me"
            onClick={() => handleCurrentLocationClick()}>
            <p>ปัญหาใกล้ฉัน</p>
          </div>
        )}

        {!isMobile ? null : (
          <DropdownExport selectDropdownExport={handleDownloadCsvJson} />
        )}

        {!isMobile ? (
          <div className="container-button-map">
            {["Marker", "Heatmap", "Clustering"].map((type) => (
              <div
                key={type}
                className={`btn ${selectedButton === type ? "selected" : ""}`}
                onClick={() => handleClick(type)}>
                <p>{type}</p>
              </div>
            ))}
          </div>
        ) : (
          <DropdownTypeMap selectTypeMap={handleClick} />
        )}
      </div> */}

      <div
        ref={mapRef}
        style={{
          width: "100%",
          height: "100%",
          border: "1px solid rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
        }}
      />
    </div>
  );
};

export default MapMain;
