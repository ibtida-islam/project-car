// import React, { useEffect, useState } from 'react';
// import { FaPhoneAlt, FaMapMarkerAlt, FaHandsHelping } from 'react-icons/fa';
// import '../../styles/sos.css';
// import Map from "../UI/Map";

// function SOSPage() {
//     const [latitude, setLatitude] = useState(null);
//     const [longitude, setLongitude] = useState(null);
//     const [nearestStation, setNearestStation] = useState(null);
//     const [error, setError] = useState(null);
//     const [phoneNumber, setPhoneNumber] = useState('');
//     const [isPhoneNumberSaved, setIsPhoneNumberSaved] = useState(false); // Track if the phone number is saved

//     // Get user's location using the geolocation API
//     useEffect(() => {
//         if (navigator.geolocation) {
//             navigator.geolocation.getCurrentPosition(success, errorCallback);
//         } else {
//             setError('Geolocation is not supported by this browser.');
//         }
//     }, []);

//     const success = (position) => {
//         setLatitude(position.coords.latitude);
//         setLongitude(position.coords.longitude);
//         fetchNearestPoliceStation(position.coords.latitude, position.coords.longitude);
//     };

//     const errorCallback = (error) => {
//         setError('Unable to retrieve your location. Please allow location access.');
//     };

//     // Fetch the nearest police station
//     const fetchNearestPoliceStation = async (lat, lon) => {
//         const apiUrl = `https://nominatim.openstreetmap.org/search?lat=${lat}&lon=${lon}&format=json&addressdetails=1&extratags=1`;
//         try {
//             const response = await fetch(apiUrl);
//             const data = await response.json();
//             if (data && data[0]) {
//                 const station = data.find(item => item.type === 'building' && item.address && item.address.amenity === 'police');
//                 if (station) {
//                     setNearestStation({
//                         name: station.address.policestation || 'Police Station Not Found',
//                         address: station.address.road || 'No Address Available',
//                         phone: station.phone || 'Phone number not available'
//                     });
//                 } else {
//                     setNearestStation({ name: 'Searching for a nearby police station...', address: '', phone: '' });
//                 }
//             } else {
//                 setNearestStation({ name: 'Searching for a nearby police station...', address: '', phone: '' });
//             }
//         } catch (err) {
//             setError('Unable to fetch police station information.');
//         }
//     };

//     const handleSavePhoneNumber = () => {
//         if (phoneNumber) {
//             setIsPhoneNumberSaved(true); // Mark the number as saved
//         } else {
//             alert('Please enter a valid phone number.');
//         }
//     };

//     const handleUnsavePhoneNumber = () => {
//         setPhoneNumber(''); // Clear the phone number input
//         setIsPhoneNumberSaved(false); // Mark the number as unsaved
//     };

//     const handleSOSButtonClick = () => {
//         if (isPhoneNumberSaved && latitude && longitude) {
//             // Send the phone number along with the latitude and longitude to the phone number via the `tel:` scheme
//             const message = `Emergency Help Needed! \nLatitude: ${latitude}, Longitude: ${longitude}`;
//             window.location.href = `tel:${phoneNumber}?body=${encodeURIComponent(message)}`;
//         } else {
//             alert('Please save a valid phone number and make sure your location is available.');
//         }
//     };

//     // List of emergency helplines
//     const emergencyHelplines = [
//         { name: "Women Safety Helpline", number: "1091" },
//         { name: "National Emergency Number", number: "112" },
//         { name: "Police", number: "100" },
//         { name: "Ambulance", number: "108" },
//         { name: "Roadside Assistance", number: "1800-11-8000" },
//         { name: "Child Helpline", number: "1098" },
//         { name: "Tourist Helpline", number: "1363" },
//         { name: "Fire", number: "101" },
//     ];

//     return (
//         <div className="sos-page">
//             <header className="sos-header">
//                 <h1 className="section__title">SOS Emergency Help</h1>
//             </header>
            
//             <main className="sos-content">
//                 <h2 className="section__subtitle">Your Safety, Our Priority</h2>
//                 <p className="section__desc">If you're in an emergency, contact the appropriate helpline below. We are here to assist you.</p>

               
//                 <div className="info-wrapper">
//                 <section className="steps-section">
//                     <h3 className="section__subtitle">Steps to Take in an Emergency</h3>
//                     <ol className="section__desc">
//                         <li><FaHandsHelping className="icon" /> Stay calm and assess the situation.</li>
//                         <li><FaPhoneAlt className="icon" /> Call the appropriate helpline number from the list above.</li>
//                         <li><FaMapMarkerAlt className="icon" /> Alert nearby individuals for assistance if it is safe.</li>
//                         <li><FaMapMarkerAlt className="icon" /> Share your location with trusted contacts.</li>
//                         <li><FaHandsHelping className="icon" /> Follow the instructions given by emergency personnel.</li>
//                     </ol>
//                 </section>

//                 <section className="user-phone-section">
//                     <h3 className="section__subtitle">Enter Emergency Contact Number:</h3>
//                     <input className="section__desc"
//                         type="text" 
//                         placeholder="Enter your contact number" 
//                         value={phoneNumber} 
//                         onChange={(e) => setPhoneNumber(e.target.value)} 
//                         disabled={isPhoneNumberSaved} // Disable input when the number is saved
//                     />
//                     <div className="phone-number-actions">
//                         {isPhoneNumberSaved ? (
//                             <button className="unsave-button" onClick={handleUnsavePhoneNumber}>Unsave</button>
//                         ) : (
//                             <button className="save-button" onClick={handleSavePhoneNumber}>Save</button>
//                         )}
//                     </div>
//                 </section>
//                 </div>

//                 <div className="info-wrapper">
//                     <section className="location-info">
//                         <h3  className="section__subtitle">Your Location:</h3>
//                         {error ? (
//                             <p className="error-message">{error}</p>
//                         ) : (
//                             <div>
//                                 <p ><strong>Latitude:</strong> {latitude}</p>
//                                 <p><strong>Longitude:</strong> {longitude}</p>
//                             </div>
//                         )}
//                     </section>

//                     <section className="station-info">
//                         <h3 className="section__subtitle">Nearest Police Station:</h3>
//                         {nearestStation ? (
//                             <div>
//                                 <p><strong>Name:</strong> {nearestStation.name}</p>
//                                 <p><strong>Address:</strong> {nearestStation.address}</p>
//                                 <p><strong>Phone:</strong> {nearestStation.phone}</p>
//                             </div>
//                         ) : (
//                             <p>Searching for the nearest police station...</p>
//                         )}
//                     </section>
//                 </div>
//                 <section className="helpline-section">
                    
//                     <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#333', margin: '20px 0' }}>
//     Important Helpline Numbers
// </h3>
//                     <ul className="helpline-numbers">
//                         {emergencyHelplines.map((helpline, index) => (
//                             <li key={index}><FaPhoneAlt className="icon" /> 
//                                 <span className="section__subtitle">{helpline.name} : </span> 
//                                 <a href={`tel:${helpline.number}`} className="helpline-link">{helpline.number}</a>
//                             </li>
//                         ))}
//                     </ul>
//                 </section>
                    
//                 <button className="sos-button" onClick={handleSOSButtonClick}>Get Immediate Help</button>
//                 <Map />
//             </main>
//             <footer className="sos-footer">
//                 <p>&copy; 2025 Your Car Rental Company | Safety First</p>
//             </footer>
//         </div>
//     );
// }

// export default SOSPage;


import React, { useEffect, useState } from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaHandsHelping } from 'react-icons/fa';
import '../../styles/sos.css';
import Map from "../UI/Map";

function SOSPage() {
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [nearestStation, setNearestStation] = useState(null);
    const [error, setError] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isPhoneNumberSaved, setIsPhoneNumberSaved] = useState(false);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, errorCallback);
        } else {
            setError('Geolocation is not supported by this browser.');
        }
    }, []);

    const success = (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        fetchNearestPoliceStation(position.coords.latitude, position.coords.longitude);
    };

    const errorCallback = () => {
        setError('Unable to retrieve your location. Please allow location access.');
    };

    const fetchNearestPoliceStation = async (lat, lon) => {
        const apiUrl = `https://nominatim.openstreetmap.org/search?lat=${lat}&lon=${lon}&format=json&addressdetails=1&extratags=1`;
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            if (data && data[0]) {
                const station = data.find(item => item.type === 'building' && item.address && item.address.amenity === 'police');
                if (station) {
                    setNearestStation({
                        name: station.address.policestation || 'Police Station Not Found',
                        address: station.address.road || 'No Address Available',
                        phone: station.phone || 'Phone number not available'
                    });
                } else {
                    setNearestStation({ name: 'Searching for a nearby police station...', address: '', phone: '' });
                }
            } else {
                setNearestStation({ name: 'Searching for a nearby police station...', address: '', phone: '' });
            }
        } catch (err) {
            setError('Unable to fetch police station information.');
        }
    };

    const handleSavePhoneNumber = () => {
        if (phoneNumber.length !== 12) {
            alert('Phone number must be exactly 12 digits.');
        } else {
            setIsPhoneNumberSaved(true);
            alert('Phone number saved successfully!');
        }
    };

    const handlePhoneNumberChange = (e) => {
        const value = e.target.value;

        if (!/^\d*$/.test(value)) {
            alert('Please enter only numeric digits.');
            return;
        }

        if (value.length > 12) {
            alert('Phone number cannot exceed 10 digits.');
            return;
        }

        setPhoneNumber(value);
    };

    const handleUnsavePhoneNumber = () => {
        setPhoneNumber('');
        setIsPhoneNumberSaved(false);
    };

    const handleSOSButtonClick = () => {
        if (isPhoneNumberSaved && latitude && longitude) {
            const message = `Emergency Help Needed! \nLatitude: ${latitude}, Longitude: ${longitude}`;
            window.location.href = `tel:${phoneNumber}?body=${encodeURIComponent(message)}`;
        } else {
            alert('Please save a valid phone number and make sure your location is available.');
        }
    };

    const emergencyHelplines = [
        { name: "Women Safety Helpline", number: "1091" },
        { name: "National Emergency Number", number: "112" },
        { name: "Police", number: "100" },
        { name: "Ambulance", number: "108" },
        { name: "Roadside Assistance", number: "1800-11-8000" },
        { name: "Child Helpline", number: "1098" },
        { name: "Tourist Helpline", number: "1363" },
        { name: "Fire", number: "101" },
    ];

    return (
        <div className="sos-page">
            <header className="sos-header">
                <h1 className="section__title">SOS Emergency Help</h1>
            </header>
            
            <main className="sos-content">
                <h2 className="section__subtitle">Your Safety, Our Priority</h2>
                <p className="section__desc">If you're in an emergency, contact the appropriate helpline below. We are here to assist you.</p>

                <div className="info-wrapper">
                    <section className="steps-section">
                        <h3 className="section__subtitle">Steps to Take in an Emergency</h3>
                        <ol className="section__desc">
                            <li><FaHandsHelping className="icon" /> Stay calm and assess the situation.</li>
                            <li><FaPhoneAlt className="icon" /> Call the appropriate helpline number from the list above.</li>
                            <li><FaMapMarkerAlt className="icon" /> Alert nearby individuals for assistance if it is safe.</li>
                            <li><FaMapMarkerAlt className="icon" /> Share your location with trusted contacts.</li>
                            <li><FaHandsHelping className="icon" /> Follow the instructions given by emergency personnel.</li>
                        </ol>
                    </section>

                    <section className="user-phone-section">
                        <h3 className="section__subtitle">Enter Emergency Contact Number:</h3>
                        <input
                            className="section__desc"
                            type="text"
                            placeholder="Enter your contact number"
                            value={phoneNumber}
                            onChange={handlePhoneNumberChange}
                            disabled={isPhoneNumberSaved}
                        />
                        <div className="phone-number-actions">
                            {isPhoneNumberSaved ? (
                                <button className="unsave-button" onClick={handleUnsavePhoneNumber}>Unsave</button>
                            ) : (
                                <button className="save-button" onClick={handleSavePhoneNumber}>Save</button>
                            )}
                        </div>
                    </section>
                </div>

                <div className="info-wrapper">
                    <section className="location-info">
                        <h3 className="section__subtitle">Your Location:</h3>
                        {error ? (
                            <p className="error-message">{error}</p>
                        ) : (
                            <div>
                                <p><strong>Latitude:</strong> {latitude}</p>
                                <p><strong>Longitude:</strong> {longitude}</p>
                            </div>
                        )}
                    </section>

                    <section className="station-info">
                        <h3 className="section__subtitle">Nearest Police Station:</h3>
                        {nearestStation ? (
                            <div>
                                <p><strong>Name:</strong> {nearestStation.name}</p>
                                <p><strong>Address:</strong> {nearestStation.address}</p>
                                <p><strong>Phone:</strong> {nearestStation.phone}</p>
                            </div>
                        ) : (
                            <p>Searching for the nearest police station...</p>
                        )}
                    </section>
                </div>

                <section className="helpline-section">
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#333', margin: '20px 0' }}>
                        Important Helpline Numbers
                    </h3>
                    <ul className="helpline-numbers">
                        {emergencyHelplines.map((helpline, index) => (
                            <li key={index}>
                                <FaPhoneAlt className="icon" />
                                <span className="section__subtitle">{helpline.name} : </span>
                                <a href={`tel:${helpline.number}`} className="helpline-link">{helpline.number}</a>
                            </li>
                        ))}
                    </ul>
                </section>
                    
                <button className="sos-button" onClick={handleSOSButtonClick}>Get Immediate Help</button>
                <Map />
            </main>
            <footer className="sos-footer">
                <p>&copy; 2025 Your Car Rental Company | Safety First</p>
            </footer>
        </div>
    );
}

export default SOSPage;
