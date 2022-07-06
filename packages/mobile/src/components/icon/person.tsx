import React, { FunctionComponent } from 'react'
import Svg, { Path } from 'react-native-svg'
import { IconProps } from './arrow'

export const PersonIcon: FunctionComponent<{
  color: string
  size: number
}> = ({ color, size }) => {
  return (
    <Svg
      viewBox="0 0 128 128"
      width={size}
      height={size}
      style={{
        width: size,
        height: size
      }}
    >
      <Path
        fill={color}
        d="M64 27c-12.7 0-23 10.3-23 23s10.3 23 23 23 23-10.3 23-23-10.3-23-23-23zm0 6c9.4 0 17 7.6 17 17s-7.6 17-17 17-17-7.6-17-17 7.6-17 17-17zm0 48c-16.4 0-31.6 8.9-39.7 23.1-.8 1.4-.3 3.3 1.2 4.1.5.3 1 .4 1.5.4 1 0 2.1-.5 2.6-1.5C36.6 94.7 49.8 87 64 87s27.4 7.7 34.5 20.1c.8 1.4 2.7 1.9 4.1 1.1 1.4-.8 1.9-2.7 1.1-4.1C95.6 89.9 80.4 81 64 81z"
      />
    </Svg>
  )
}

export const ValidatorOutlineIcon: FunctionComponent<IconProps> = ({
  color = '#5F5E77',
  size =  16
}) => {
  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      style={{
        width: size,
        height: size
      }}
    >
      <Path
        d="M8.00033 8.50016C5.88699 8.50016 4.16699 6.78016 4.16699 4.66683C4.16699 2.5535 5.88699 0.833496 8.00033 0.833496C10.1137 0.833496 11.8337 2.5535 11.8337 4.66683C11.8337 6.78016 10.1137 8.50016 8.00033 8.50016ZM8.00033 1.8335C6.44033 1.8335 5.16699 3.10683 5.16699 4.66683C5.16699 6.22683 6.44033 7.50016 8.00033 7.50016C9.56033 7.50016 10.8337 6.22683 10.8337 4.66683C10.8337 3.10683 9.56033 1.8335 8.00033 1.8335Z"
        fill={color}
      />
      <Path
        d="M2.27344 15.1667C2.0001 15.1667 1.77344 14.94 1.77344 14.6667C1.77344 11.82 4.56677 9.5 8.0001 9.5C8.67344 9.5 9.33343 9.58668 9.97343 9.76668C10.2401 9.84002 10.3934 10.1133 10.3201 10.38C10.2468 10.6467 9.97343 10.8 9.70677 10.7267C9.1601 10.5734 8.58677 10.5 8.0001 10.5C5.1201 10.5 2.77344 12.3667 2.77344 14.6667C2.77344 14.94 2.54677 15.1667 2.27344 15.1667Z"
        fill={color}
      />
      <Path
        d="M11.9997 15.1668C10.893 15.1668 9.85301 14.5802 9.29301 13.6268C8.99301 13.1468 8.83301 12.5802 8.83301 12.0002C8.83301 11.0268 9.26634 10.1268 10.0197 9.52681C10.5797 9.08015 11.2863 8.8335 11.9997 8.8335C13.7463 8.8335 15.1663 10.2535 15.1663 12.0002C15.1663 12.5802 15.0063 13.1468 14.7063 13.6335C14.5397 13.9135 14.3263 14.1668 14.073 14.3802C13.5197 14.8868 12.7797 15.1668 11.9997 15.1668ZM11.9997 9.8335C11.5063 9.8335 11.0397 10.0001 10.6463 10.3135C10.133 10.7201 9.83301 11.3402 9.83301 12.0002C9.83301 12.3935 9.93968 12.7802 10.1463 13.1135C10.533 13.7668 11.2463 14.1668 11.9997 14.1668C12.5263 14.1668 13.033 13.9735 13.4197 13.6268C13.593 13.4802 13.7397 13.3068 13.8463 13.1202C14.0597 12.7802 14.1663 12.3935 14.1663 12.0002C14.1663 10.8068 13.193 9.8335 11.9997 9.8335Z"
        fill={color}
      />
      <Path
        d="M11.6202 13.1602C11.4936 13.1602 11.3669 13.1136 11.2669 13.0136L10.6069 12.3536C10.4136 12.1602 10.4136 11.8402 10.6069 11.6469C10.8002 11.4535 11.1202 11.4535 11.3136 11.6469L11.6336 11.9669L12.7002 10.9802C12.9002 10.7935 13.2202 10.8069 13.4069 11.0069C13.5936 11.2069 13.5802 11.5269 13.3802 11.7135L11.9602 13.0269C11.8602 13.1135 11.7402 13.1602 11.6202 13.1602Z"
        fill={color}
      />
    </Svg>
  )
}
