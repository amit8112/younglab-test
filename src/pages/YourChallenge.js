import React, { useState, useEffect } from 'react';
import "./YourChallenge.css";

const YourChallenge = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=20')
      .then(response => response.json())
      .then(data => {
        setUserData(data.results);
      })
      .catch(error => {
        console.log('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="yourchallenge">
      <div className="yourchallenge-parent">
        <b className="yourchallenge1">YoungLabs </b>
        <div className="product-parent">
          <div className="product">Product</div>
          <div className="product">Download</div>
          <div className="product">Pricing</div>
        </div>
        <div className="group-child" />
      </div>
      <div className="frame-parent">
        <div className="card-parent">
          {userData.map((user, index) => (
            <div className="card1" key={index}>
              <div className="frame-group">
                <div className="female-parent">
                  <div className="product">{user.gender === 'male' ? 'Male' : 'Female'}</div>
                  <div className="separator">·</div>
                  <div className="product">{user.nat}</div>
                </div>
                <b className="mr-carl-jensen">{user.name.title} {user.name.first} {user.name.last}</b>
              </div>
              <div className="insturl1">{user.email}</div>
            </div>
          ))}
        </div>
      </div>

      {userData.length > 0 && (
        <div className="rectangle-parent">
          <div className="group-item" />
          <div className="group-parent">
            <div className="heindertweg-born-zeeland-ne-parent">
              <div className="heindertweg-born-zeeland-container">
                <p className="heindertweg-born-zeeland-ne">
                  <b className="b">{userData[0].location.postcode}</b>
                  <span>
                    <span className="heindertweg-born-zeeland">{`, ${userData[0].location.street.name}, ${userData[0].location.city}, ${userData[0].location.state}, `}</span>
                    <b className="heindertweg-born-zeeland">{userData[0].location.country}</b>
                    <span className="heindertweg-born-zeeland">, {userData[0].location.coordinates.latitude}, {userData[0].location.coordinates.longitude}</span>
                  </span>
                </p>
                <p className="heindertweg-born-zeeland-ne">
                  <span>
                    <span className="heindertweg-born-zeeland">{`+${userData[0].location.timezone.offset} - ${userData[0].location.timezone.description}, `}</span>
                    <span className="heindertweg-born-zeeland">
                      <span className="dhaka1">Dhaka</span>
                      {`, `}
                    </span>
                    <i className="heindertweg-born-zeeland">Colombo</i>
                  </span>
                </p>
                <p className="heindertweg-born-zeeland-ne">
                  <span className="female11">{userData[0].gender === 'male' ? 'Male' : 'Female'}</span>

                </p>
              </div>
              <b className="ms-teatske-nijenhuis10">{userData[0].name.title} {userData[0].name.first} {userData[0].name.last}</b>
            </div>
            <img className="icon" alt="" src={userData[0].picture.large} />
          </div>
        </div>
      )
      }
    </div>

  );
};
export default YourChallenge;