import React from "react";
import Map from '../components/Map';

const MGHome = () => {
    return (
        <div class="mghome">
            <div className="main-text">
                <h1>Come Boulder at Midd Gap!</h1>
                <br />
                <p>A bouldering area that blends the best elements of both descriptions: It's a serene enclave surrounded by a canopy of trees and natural rock formations, featuring a multitude of climbs on high-quality, textured rocks. These rocks are known for their excellent friction, facilitating a range of cool, intricate moves from dynamic leaps to delicate balancing acts, including crimpy and balance-focused challenges. A steeper hill leads climbers to this secluded spot, adding an adventurous approach. This idyllic spot is perfect for those seeking a peaceful yet challenging climbing experience, offering an escape into nature where each climb brings its own unique test of skill and endurance.</p>
                <br />
            </div>
            <div className="directions">
                <div className="map">
                    <Map />
                </div>
            </div>
        </div>
    );
}
 
export default MGHome;