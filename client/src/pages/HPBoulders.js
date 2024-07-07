import React from "react";
import Map from '../components/Map';

const HPBoulders = () => {
    return (
        <div className="hpBoulders">
            <div className="main-text">
                <h1>Harry Potter Boulders</h1>
                <div className="info"></div>
                <br />
                <h3>Description: </h3>
                    <p>A secluded outdoor bouldering area nestled in a quaint alcove, surrounded by a copse of trees and rock formations. This area boasts a multitude of climbs on high-quality rock, offering a rich array of cool moves that challenge climbers with a mix of crimps and balance-focused problems. A steeper hill provides access to this hidden gem, adding a sense of adventure to the approach. One of the area's highlights is a classic traverse line, a creative route that ingeniously connects two separate climbs, inviting climbers to experience a continuous, engaging challenge amidst this tranquil, natural setting.</p>
                <br />
                <h3>Boulders: </h3>
                    <ul>
                        <li>The Scar (v5)</li>
                        <li>Dobby's Sock (v6)</li>
                        <li>The Traverse (v7)</li>
                    </ul>
                <br />
                <h3>Location: </h3>
                    <p>From the roadside boulders, crossing the small stream and start up a brief but steep uphill. Continue traveling up, then veer right at the obvious, dead tree. After about 5 minutes, the boulders will be on your left below eye level. (Green Pin)</p>
            </div>
            <div className="map">
                <Map />
            </div>
        </div>
    );
}

export default HPBoulders;