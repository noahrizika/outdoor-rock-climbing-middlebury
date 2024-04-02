import React from "react";
import Map from '../components/Map';

const RoadsideBoulders = () => {
    return (
      <div className="roadsideBoulders">
        <div className="main-text">
            <h1>Roadside Boulders</h1>
            <div className="info"></div>
            <br />
            <h3>Description: </h3>
                <p>A bouldering area characterized by high-quality, textured rocks that offer excellent friction, enhancing the grip for climbers. These rocks are adorned with a plethora of cool, intricate moves, ranging from dynamic leaps to delicate balancing acts. Access to this area is easy and user-friendly, with well-maintained trails leading directly to the base of the boulders. This setup makes it an ideal spot for both seasoned climbers and beginners to practice and enjoy the sport without the hassle of a difficult approach. The combination of superb rock quality and accessibility makes it a preferred destination for bouldering enthusiasts.</p>
            <br />
            <h3>Boulders: </h3>
                <ul>
                    <li>Zebra Boulder Stand (v4)</li>
                    <li>Zebra Boulder Sit (v7)</li>
                </ul>
            <br />
            <h3>Location: </h3>
                <p>After parking, walk south downhill next to the road. Look for a 20ft black and white striped boulder through the trees at eye level. (Purple Pin)</p>
        </div>
        <div className="map">
            <Map />
        </div>
      </div>
    );
  }
   
  export default RoadsideBoulders;