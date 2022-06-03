import React, { FunctionComponent } from "react";
import Svg, { Path } from "react-native-svg";

export const MoneybagIcon: FunctionComponent<{
  color?: string;
  height?: number;
}> = ({}) => {
  return (
    <Svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <Path
        d="M15.5416 11.5001C15.2761 11.5001 14.9947 11.5001 14.7133 11.5312H14.6665C9.54161 12.0156 5.33325 16.8803 5.33325 22.3021C5.33325 28.599 11.1822 29.3333 15.5416 29.3333C19.8697 29.3333 24.9165 28.6772 25.6196 23.5053C26.3539 17.4427 21.5415 11.5001 15.5416 11.5001Z"
        fill="#7C83E9"
      />
      <Path
        d="M20.9627 5.26044L19.4002 10H11.6817L10.1192 5.26044C10.0252 5.02606 10.0722 4.76036 10.2128 4.55732C10.3691 4.35427 10.6034 4.22915 10.8535 4.22915H13.3378C13.6503 3.32278 14.5253 2.66666 15.541 2.66666C16.5566 2.66666 17.416 3.32278 17.7441 4.22915H20.2285C20.4785 4.22915 20.7129 4.35427 20.8691 4.55732C21.0097 4.76036 21.0567 5.02606 20.9627 5.26044Z"
        fill="#7C83E9"
      />
      <Path
        d="M17.8691 22.5364C17.8691 23.552 17.2287 24.3957 16.3223 24.7239V25.427C16.3223 25.8646 15.9787 26.2082 15.541 26.2082C15.1034 26.2082 14.7598 25.8646 14.7598 25.427V24.7395C13.8534 24.4114 13.1816 23.552 13.1816 22.5364C13.1816 22.099 13.5409 21.7551 13.9629 21.7551C14.4005 21.7551 14.7441 22.099 14.7441 22.5364C14.7441 22.9583 15.1034 23.3176 15.5254 23.3176H15.541C15.9787 23.302 16.3066 22.9583 16.3066 22.5364C16.3066 22.099 15.9787 21.7708 15.541 21.7551H15.5254C14.2443 21.7551 13.1816 20.6925 13.1816 19.4114C13.1816 18.3801 13.8536 17.5207 14.7598 17.2082V16.052C14.7598 15.6144 15.1034 15.2708 15.541 15.2708C15.9787 15.2708 16.3223 15.6144 16.3223 16.052V17.2082C17.2287 17.5364 17.8691 18.3958 17.8691 19.4114C17.8691 19.8333 17.5255 20.1926 17.0879 20.1926C16.6659 20.1926 16.3066 19.8333 16.3066 19.4114C16.3066 18.974 15.9787 18.6458 15.541 18.6301H15.5254C15.1034 18.6301 14.7441 18.974 14.7441 19.4114C14.7441 19.8333 15.1034 20.1926 15.5254 20.1926H15.541C16.838 20.2083 17.8691 21.2396 17.8691 22.5364Z"
        fill="white"
      />
      <Path
        d="M21.0102 10.5312C21.0102 11.3906 20.3071 12.0937 19.4477 12.0937H11.6352C10.7759 12.0937 10.0728 11.3906 10.0728 10.5312C10.0728 9.67184 10.7759 8.96872 11.6352 8.96872H19.4477C20.3071 8.96872 21.0102 9.67184 21.0102 10.5312Z"
        fill="white"
      />
    </Svg>
  );
};
