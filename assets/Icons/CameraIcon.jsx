import React from "react";
import { Svg, Path, Circle, Defs, ClipPath,G, Rect } from "react-native-svg";

const CameraIcon = () => {
    return (
        <Svg width="71" height="71" viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Circle cx="35.5" cy="35.5" r="34" fill="#D9D9D9" stroke="white" stroke-width="3"/>
            <G clip-path="url(#clip0_3706_248)">
                <Path d="M50.0139 44.0766C50.0139 44.758 49.7359 45.4116 49.241 45.8934C48.7461 46.3753 48.0749 46.646 47.375 46.646H23.625C22.9252 46.646 22.2539 46.3753 21.7591 45.8934C21.2642 45.4116 20.9861 44.758 20.9861 44.0766V29.9446C20.9861 29.2631 21.2642 28.6096 21.7591 28.1277C22.2539 27.6459 22.9252 27.3752 23.625 27.3752H28.9028L31.5417 23.521H39.4584L42.0973 27.3752H47.375C48.0749 27.3752 48.7461 27.6459 49.241 28.1277C49.7359 28.6096 50.0139 29.2631 50.0139 29.9446V44.0766Z" stroke="#1E1E1E" stroke-opacity="0.55" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                <Path d="M35.5 41.5071C38.4149 41.5071 40.7778 39.2063 40.7778 36.3682C40.7778 33.5301 38.4149 31.2293 35.5 31.2293C32.5852 31.2293 30.2223 33.5301 30.2223 36.3682C30.2223 39.2063 32.5852 41.5071 35.5 41.5071Z" stroke="#1E1E1E" stroke-opacity="0.55" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            </G>
            <Defs>
                <ClipPath id="clip0_3706_248">
                <Rect width="31.6667" height="30.8333" fill="white" transform="translate(19.6667 19.6667)"/>
                </ClipPath>
            </Defs>
        </Svg>

    )
}

export default CameraIcon