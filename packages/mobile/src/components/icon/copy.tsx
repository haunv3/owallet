import React, { FunctionComponent } from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

export const CopyIcon: FunctionComponent<{
  color: string;
  size: number;
}> = ({ color, size = 16 }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 16 17"
      style={{
        width: size,
        height: size
      }}
    >
      <Path
        d="M11.333 3.833h-6a2 2 0 00-2 2v6"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <Rect
        x={5.417}
        y={5.917}
        width={7.833}
        height={7.833}
        rx={1.25}
        stroke={color}
        strokeWidth={1.5}
      />
    </Svg>
  );
};

export const CopyFillIcon: FunctionComponent<{
  color?: string;
  size?: number;
  onPress?: () => void;
}> = ({ color = 'none', size = 16, onPress }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill={color}
    >
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2.62192 6.62201C2.30638 6.93754 2.08325 7.50732 2.08325 8.60001V11.4C2.08325 12.4927 2.30638 13.0625 2.62192 13.378C2.93745 13.6935 3.50722 13.9167 4.59992 13.9167H7.39992C8.49261 13.9167 9.06239 13.6935 9.37792 13.378C9.69345 13.0625 9.91659 12.4927 9.91659 11.4V8.60001C9.91659 7.50732 9.69345 6.93754 9.37792 6.62201C9.06239 6.30648 8.49261 6.08334 7.39992 6.08334H4.59992C3.50722 6.08334 2.93745 6.30648 2.62192 6.62201ZM1.56126 5.56135C2.29572 4.82688 3.35928 4.58334 4.59992 4.58334H7.39992C8.64056 4.58334 9.70411 4.82688 10.4386 5.56135C11.1731 6.29582 11.4166 7.35937 11.4166 8.60001V11.4C11.4166 12.6406 11.1731 13.7042 10.4386 14.4387C9.70411 15.1731 8.64056 15.4167 7.39992 15.4167H4.59992C3.35928 15.4167 2.29572 15.1731 1.56126 14.4387C0.826786 13.7042 0.583252 12.6406 0.583252 11.4V8.60001C0.583252 7.35937 0.826786 6.29582 1.56126 5.56135Z"
        fill={color}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.08327 4.58334H7.39992C8.64056 4.58334 9.70411 4.82688 10.4386 5.56135C11.1731 6.29582 11.4166 7.35937 11.4166 8.60001V9.91666C12.4984 9.9144 13.064 9.69194 13.3779 9.37801C13.6935 9.06248 13.9166 8.49271 13.9166 7.40001V4.60001C13.9166 3.50732 13.6935 2.93754 13.3779 2.62201C13.0624 2.30648 12.4926 2.08334 11.3999 2.08334H8.59992C7.50722 2.08334 6.93745 2.30648 6.62192 2.62201C6.30799 2.93593 6.08553 3.50151 6.08327 4.58334ZM5.56126 1.56135C6.29572 0.826878 7.35928 0.583344 8.59992 0.583344H11.3999C12.6406 0.583344 13.7041 0.826878 14.4386 1.56135C15.1731 2.29582 15.4166 3.35937 15.4166 4.60001V7.40001C15.4166 8.64065 15.1731 9.70421 14.4386 10.4387C13.7041 11.1731 12.6406 11.4167 11.3999 11.4167H10.6666C10.2524 11.4167 9.91659 11.0809 9.91659 10.6667V8.60001C9.91659 7.50732 9.69345 6.93754 9.37792 6.62201C9.06239 6.30648 8.49261 6.08334 7.39992 6.08334H5.33325C4.91904 6.08334 4.58325 5.74756 4.58325 5.33334V4.60001C4.58325 3.35937 4.82679 2.29582 5.56126 1.56135Z"
        fill={color}
      />
    </Svg>
  );
};

export const CopyAccountIcon: FunctionComponent<{
  color?: string;
  size?: number;
  onPress?: () => void;
}> = ({ color = 'none', size = 16, onPress }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill={color}
      onPress={onPress}
    >
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.4386 5.56135C9.70411 4.82688 8.64056 4.58334 7.39992 4.58334H6.08327C6.08553 3.50151 6.30799 2.93593 6.62192 2.62201C6.93745 2.30648 7.50722 2.08334 8.59992 2.08334H11.3999C12.4926 2.08334 13.0624 2.30648 13.3779 2.62201C13.6935 2.93754 13.9166 3.50732 13.9166 4.60001V7.40001C13.9166 8.49271 13.6935 9.06248 13.3779 9.37801C13.064 9.69194 12.4984 9.9144 11.4166 9.91666V8.60001C11.4166 7.35937 11.1731 6.29582 10.4386 5.56135ZM11.4166 11.4167C12.6501 11.4145 13.7074 11.1699 14.4386 10.4387C15.1731 9.70421 15.4166 8.64065 15.4166 7.40001V4.60001C15.4166 3.35937 15.1731 2.29582 14.4386 1.56135C13.7041 0.826878 12.6406 0.583344 11.3999 0.583344H8.59992C7.35928 0.583344 6.29572 0.826878 5.56125 1.56135C4.83007 2.29253 4.58544 3.34986 4.58327 4.58336C3.34976 4.58554 2.29244 4.83017 1.56126 5.56135C0.826786 6.29582 0.583252 7.35937 0.583252 8.60001V11.4C0.583252 12.6406 0.826786 13.7042 1.56126 14.4387C2.29572 15.1731 3.35928 15.4167 4.59992 15.4167H7.39992C8.64056 15.4167 9.70411 15.1731 10.4386 14.4387C11.1698 13.7075 11.4144 12.6502 11.4166 11.4167ZM5.33325 6.08334H4.59992C3.50722 6.08334 2.93745 6.30648 2.62192 6.62201C2.30638 6.93754 2.08325 7.50732 2.08325 8.60001V11.4C2.08325 12.4927 2.30638 13.0625 2.62192 13.378C2.93745 13.6935 3.50722 13.9167 4.59992 13.9167H7.39992C8.49261 13.9167 9.06239 13.6935 9.37792 13.378C9.69345 13.0625 9.91659 12.4927 9.91659 11.4V10.6667V8.60001C9.91659 7.50732 9.69345 6.93754 9.37792 6.62201C9.06239 6.30648 8.49261 6.08334 7.39992 6.08334H5.33325Z"
        fill="#5F5E77"
      />
    </Svg>
  );
};

export const CopyTransactionIcon: FunctionComponent<{
  color?: string;
  size?: number;
  onPress?: () => void;
}> = ({ color = 'none', size = 20, onPress }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill={color}
      onPress={onPress}
    >
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.05636 8.05636C2.57467 8.53806 2.2915 9.35315 2.2915 10.7498V14.2498C2.2915 15.6465 2.57467 16.4616 3.05636 16.9433C3.53805 17.425 4.35315 17.7082 5.74984 17.7082H9.24984C10.6465 17.7082 11.4616 17.425 11.9433 16.9433C12.425 16.4616 12.7082 15.6465 12.7082 14.2498V10.7498C12.7082 9.35315 12.425 8.53806 11.9433 8.05636C11.4616 7.57467 10.6465 7.2915 9.24984 7.2915H5.74984C4.35315 7.2915 3.53805 7.57467 3.05636 8.05636ZM2.17248 7.17248C3.00329 6.34167 4.22986 6.0415 5.74984 6.0415H9.24984C10.7698 6.0415 11.9964 6.34167 12.8272 7.17248C13.658 8.00329 13.9582 9.22986 13.9582 10.7498V14.2498C13.9582 15.7698 13.658 16.9964 12.8272 17.8272C11.9964 18.658 10.7698 18.9582 9.24984 18.9582H5.74984C4.22986 18.9582 3.00329 18.658 2.17248 17.8272C1.34167 16.9964 1.0415 15.7698 1.0415 14.2498V10.7498C1.0415 9.22986 1.34167 8.00329 2.17248 7.17248Z"
        fill="#8B1BFB"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.05636 3.05636C7.57467 3.53805 7.2915 4.35315 7.2915 5.74984V6.0415H9.24984C10.7698 6.0415 11.9964 6.34167 12.8272 7.17248C13.658 8.00329 13.9582 9.22986 13.9582 10.7498V12.7082H14.2498C15.6465 12.7082 16.4616 12.425 16.9433 11.9433C17.425 11.4616 17.7082 10.6465 17.7082 9.24984V5.74984C17.7082 4.35315 17.425 3.53805 16.9433 3.05636C16.4616 2.57467 15.6465 2.2915 14.2498 2.2915H10.7498C9.35315 2.2915 8.53806 2.57467 8.05636 3.05636ZM7.17248 2.17248C8.00329 1.34167 9.22986 1.0415 10.7498 1.0415H14.2498C15.7698 1.0415 16.9964 1.34167 17.8272 2.17248C18.658 3.00329 18.9582 4.22986 18.9582 5.74984V9.24984C18.9582 10.7698 18.658 11.9964 17.8272 12.8272C16.9964 13.658 15.7698 13.9582 14.2498 13.9582H13.3332C12.988 13.9582 12.7082 13.6783 12.7082 13.3332V10.7498C12.7082 9.35315 12.425 8.53805 11.9433 8.05636C11.4616 7.57467 10.6465 7.2915 9.24984 7.2915H6.6665C6.32133 7.2915 6.0415 7.01168 6.0415 6.6665V5.74984C6.0415 4.22986 6.34167 3.00329 7.17248 2.17248Z"
        fill="#8B1BFB"
      />
    </Svg>
  );
};
