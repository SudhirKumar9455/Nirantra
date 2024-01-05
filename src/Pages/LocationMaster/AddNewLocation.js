import React, { useState, useEffect } from "react";
import { Navigate, useHistory } from "react-router-dom"; // Import useHistory from react-router-dom
import Sidebar from "../../Components/Sidebar/Sidebar";
import Header from "../../Components/Header/Header";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
// Correct import statement
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
// import { useMemo } from "react";
import saveFormData from "./saveFormData";
import axios from "axios";
// import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import { TextField } from "@mui/material";

const LocationMasterForm = () => {
  // const history = useHistory(); // Initialize history
  const [locationId, setLocationId] = useState("");
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [locationName, setLocationName] = useState("");
  const [address, setAddress] = useState("");
  //For the google map section used below the form
  const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);
  const [coordinates, setCoordinates] = useState({
    latitude: "",
    longitude: "",
  });
  const getLoationId = async () => {
    let location = await axios.get(
      "http://localhost:5000/api/location?sort=-1&limit=1"
    );
    const { locationID } = location.data.allLocations[0];
    let id = parseInt(locationID.slice(3), 10);
    // setLocationId(id);
    setLocationId(`LOC${id + 1}`);
  };
  // getLoationId();
  useEffect(() => {
    getLoationId();
  }, []);
  //for the isloaded dataset in the map
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyC1Cz13aBYAbBYJL0oABZ8KZnd7imiWwA4",
  });
  const [map, setMap] = React.useState(null);
  const handleSelect = async (selectedAddress) => {
    try {
      const results = await geocodeByAddress(selectedAddress);
      const latLng = await getLatLng(results[0]);

      setAddress(selectedAddress);

      const additionalInfo = extractAdditionalInfo(results[0]);

      setCoordinates({
        latitude: latLng.lat,
        longitude: latLng.lng,
      });

      setLocationName(additionalInfo.locationName);
      // setLocationId(additionalInfo.locationId);
      // setLocationId(locationID ? locationID + 1 : "LOC001");
    } catch (error) {
      console.error("Error fetching coordinates:", error);
    }
  };
  const handleMapClick = (event) => {
    const clickedLat = event.latLng.lat();
    const clickedLng = event.latLng.lng();

    setCoordinates({
      latitude: clickedLat,
      longitude: clickedLng,
    });

    // Use the reverse geocoding to get location details
    reverseGeocode({ lat: clickedLat, lng: clickedLng });
  };
  const reverseGeocode = async (location) => {
    try {
      const results = await geocodeByLatLng(location);

      if (results && results.length > 0) {
        const additionalInfo = extractAdditionalInfo(results[0]);
        setLocationName(additionalInfo.locationName);
        setAddress(additionalInfo.locationName); // Set address based on your requirement
        // Update other state variables if needed

        // You can also update the form fields with the selected location details if needed
        // setLocationId(additionalInfo.locationId);
      }
    } catch (error) {
      console.error("Error fetching location details:", error);
    }
  };
  const geocodeByLatLng = async (location) => {
    try {
      const results = await geocodeByAddress(`${location.lat}, ${location.lng}`);
      return results;
    } catch (error) {
      console.error("Error geocoding by LatLng:", error);
    }
  };
  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);
  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const extractAdditionalInfo = (geocodingResult) => {
    const locationName =
      geocodingResult?.address_components
        ?.filter((component) => component.types.includes("route"))
        .map((component) => component.long_name)
        .join(" ") || "";

    const locationId = generateLocationId(locationName);
    return {
      locationName,
      locationId,
    };
  };

  const generateLocationId = (name) => {
    const sequentialNumber = Math.floor(Math.random() * 100) + 101;
    return `LOC${sequentialNumber}`;
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();
    // alert("ghj");
    try {
      e.preventDefault();

      console.log(locationId);
      console.log(address);
      console.log(coordinates.latitude);
      console.log(coordinates.longitude);
      const reqBody = {
        locationID: locationId,
        locationName: address,
        latitude: coordinates.latitude,
        longitude: coordinates.longitude,
      };
      console.log(reqBody);

      axios.post("http://localhost:5000/api/location", reqBody).then((res) => {
        // alert(res);
        console.log("Data Saved");
        window.history.back();
      });
    } catch (e) {
      console.log(e);
    }
    // saveFormData({
    //   locationID: locationId,
    //   LocationName: locationName,
    //   Latitude: coordinates.latitude,
    //   longitude: coordinates.longitude
    // });

    // setLocationId("");
    // setLocationName("");
    // setCoordinates({
    //   latitude: "",
    //   longitude: "",
    // });
    // <Navigate to="/locationmaster" />
  };
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ width: "20%" }}>
          <Sidebar />
        </div>
        <div style={{ width: "70%" }}>
          <Header />
          <div>
            <h2
              style={{
                fontWeight: "600",
                fontSize: "30px",
                height: "38px",
                color: "#4B465C",
              }}
            >
              Location Master
            </h2>
            <div
              style={{
                padding: "20px 30px 20px 30px",
                borderRadius: "10px",
                width: "700px",
                margin: "none",
                height: "350px",
                marginTop: "10px",
                backgroundColor: "white",
              }}
            >
              <form onSubmit={handleSubmit}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",

                    width: "100%",
                    marginTop: "5%",
                    marginBottom: "5%",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <label htmlFor="locationId">Location ID</label>
                    <TextField
                      type="text"
                      placeholder="Location Master"
                      id="locationId"
                      value={locationId}
                      onChange={(e) => setLocationId(e.target.value)}
                      required
                    />
                  </div>
                  <div
                    className="Addressbutton"
                    style={{
                      marginBottom: "10px",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <label htmlFor="address">Location Name</label>
                    <PlacesAutocomplete
                      value={address}
                      onChange={setAddress}
                      onSelect={handleSelect}
                    >
                      {({
                        getInputProps,
                        suggestions,
                        getSuggestionItemProps,
                        loading,
                      }) => (
                        <div>
                          <TextField
                            {...getInputProps({
                              placeholder: "Enter your address",
                              className: "location-search-input",
                              style: {
                                width: "100%", // Ensure the input takes full width
                                // Adjust padding as needed
                                // Add a border for better visibility
                                height: "40px", // Set a fixed height for the input field
                              },
                            })}
                            required
                          />
                          <div
                            className="autocomplete-dropdown-container"
                            style={{
                              maxHeight: "40px",
                              overflowY: "revert-layer",
                              maxWidth: "200px",
                            }}
                          >
                            {loading && (
                              <div
                                style={{ height: "40px", lineHeight: "40px" }}
                              >
                                Loading...
                              </div>
                            )}
                            {suggestions.map((suggestion) => {
                              const style = {
                                backgroundColor: suggestion.active
                                  ? "#41b6e6"
                                  : "#fff",
                                padding: "10px", // Adjust padding as needed
                                border: "1px solid black",
                              };
                              return (
                                <div
                                  {...getSuggestionItemProps(suggestion, {
                                    style,
                                  })}
                                >
                                  {suggestion.description}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </PlacesAutocomplete>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      marginBottom: "10px",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <label htmlFor="latitude">Latitude</label>
                    <TextField
                      type="text"
                      id="latitude"
                      value={coordinates.latitude}
                      placeholder="Latitude"
                      readOnly
                    />
                  </div>
                  <div
                    style={{
                      marginBottom: "10px",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <label htmlFor="longitude">Longitude</label>
                    <TextField
                      type="text"
                      id="longitude"
                      value={coordinates.longitude}
                      placeholder="Longitude"
                      readOnly
                    />
                  </div>
                </div>

                <div style={{ textAlign: "center" }}>
                  <button
                    // onClick={handleSubmit}
                    style={{
                      color: "white",
                      backgroundColor: "black",
                      width: "280px",
                      padding: "7px 45px 7px 45px",
                      height: "53px",
                      borderRadius: "5px",
                      textAlign: "center",
                      marginTop: "5%",
                    }}
                    type="submit"
                  >
                    <h5>
                      <b>Submit</b>
                    </h5>
                  </button>
                </div>
              </form>
            </div>
            {/* For the map container used below the Form */}
            <div>
              <div className="App">
                {isLoaded && (
                  <GoogleMap
                    mapContainerStyle={{ width: "700px", height: "290px", border:'1px solid black' }}
                    center={center}
                    zoom={1}
                    onLoad={onLoad}
                    onUnmount={onUnmount}
                    onClick={handleMapClick}
                  >
                    {coordinates.latitude && coordinates.longitude && (
                      <Marker
                        position={{
                          lat: coordinates.latitude,
                          lng: coordinates.longitude,
                        }}
                        onClick={() => {
                          setSelectedMarker({
                            lat: coordinates.latitude,
                            lng: coordinates.longitude,
                          });
                        }}
                      />
                    )}
                  </GoogleMap>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationMasterForm;
