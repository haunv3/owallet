import React, { FunctionComponent } from 'react';
import Svg, { Path, Rect, G, Defs, ClipPath } from 'react-native-svg';
import { IconProps } from './arrow';

export const SendIcon: FunctionComponent<{
  color?: string;
  size?: number;
}> = ({}) => {
  return (
    <Svg width="56" height="56" viewBox="0 0 56 56" fill="none">
      <Rect width="56" height="56" rx="28" fill="#4334F1" />
      <G clip-path="url(#clip0_70_969)">
        <Path
          d="M38.3723 35.506C37.6474 36.231 36.4599 36.0919 34.8436 35.0939L31.7173 33.167C29.6138 31.8711 26.0598 31.8705 23.9582 33.1661L20.8356 35.0925C19.253 36.0679 18.0797 36.2208 17.3478 35.5459C16.6159 34.8709 16.6712 33.6882 17.5147 32.033L24.7054 17.9023C25.5646 16.2095 26.9003 15.3407 28.2476 15.5559C29.3184 15.7263 30.2851 16.5596 30.9665 17.902L38.1634 32.0349C38.9867 33.6538 39.0571 34.8213 38.3723 35.506ZM18.6663 34.1137C19.0978 33.987 19.5077 33.7959 19.8821 33.5468L23.0041 31.6205C25.7132 29.9502 29.9588 29.9502 32.6693 31.6207L35.7972 33.5481C36.1705 33.7973 36.5794 33.9884 37.01 34.115C36.9198 33.6746 36.7626 33.2507 36.5439 32.858L29.3479 18.7246C28.9424 17.926 28.437 17.426 27.9628 17.3496C27.4218 17.2634 26.8039 17.7826 26.3247 18.725L19.1321 32.8562C18.9143 33.2494 18.7573 33.6734 18.6663 34.1137Z"
          fill="white"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_70_969">
          <Rect
            width="32"
            height="32"
            fill="white"
            transform="translate(12 11)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export const FastIcon: FunctionComponent<{
  color?: string;
  size?: number;
}> = ({ color = 'none', size = 20 }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <Path
        d="M16.0757 9.80342C16.0084 9.75292 15.9265 9.72564 15.8423 9.72564H12.8628L15.8112 4.58345C15.9186 4.3974 15.8549 4.15954 15.6688 4.05211C15.6104 4.01838 15.5442 4.0004 15.4767 4H11.338C11.1875 4.00113 11.0512 4.08901 10.988 4.22561L7.03606 12.5106C6.94584 12.7056 7.03074 12.9368 7.22568 13.027C7.27601 13.0503 7.3307 13.0626 7.38613 13.063H10.3578L8.2185 19.5198C8.18109 19.7002 8.27528 19.882 8.44411 19.9555C8.61219 20.0436 8.81927 19.9976 8.93421 19.8466L16.1535 10.348C16.2824 10.1761 16.2475 9.93229 16.0757 9.80342ZM9.72771 17.5439L11.2991 12.7673C11.3679 12.5638 11.2586 12.3431 11.0551 12.2743C11.0159 12.2611 10.9749 12.2542 10.9335 12.2539H8.0318L11.5792 4.73902H14.8154L11.8592 9.92008C11.7518 10.1061 11.8156 10.344 12.0016 10.4514C12.0601 10.4852 12.1263 10.5031 12.1937 10.5035H15.0643L9.72771 17.5439Z"
        fill="black"
      />
    </Svg>
  );
};

export const LowIcon: FunctionComponent<{
  color?: string;
  size?: number;
}> = ({ color = 'none', size = 20 }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.32 8.26005C10.0703 8.03241 9.79517 7.83443 9.5 7.67005C8.7414 7.22759 7.87819 6.99626 7 7.00005C5.67392 7.00005 4.40215 7.52683 3.46447 8.46451C2.52678 9.40219 2 10.674 2 12C2 13.3261 2.52678 14.5979 3.46447 15.5356C4.40215 16.4733 5.67392 17 7 17C7.87819 17.0038 8.7414 16.7725 9.5 16.33C9.79517 16.1657 10.0703 15.9677 10.32 15.74C10.8487 15.2709 11.2719 14.695 11.5618 14.0504C11.8516 13.4057 12.0015 12.7069 12.0015 12C12.0015 11.2932 11.8516 10.5944 11.5618 9.94974C11.2719 9.30506 10.8487 8.72917 10.32 8.26005ZM9.5 15.26C9.24873 15.4605 8.97323 15.6284 8.68 15.76C8.05562 16.0405 7.37096 16.1602 6.68846 16.1082C6.00596 16.0562 5.34734 15.8341 4.77267 15.4623C4.198 15.0904 3.72557 14.5806 3.39847 13.9794C3.07137 13.3781 2.9 12.7045 2.9 12.02C2.9 11.3356 3.07137 10.662 3.39847 10.0607C3.72557 9.45945 4.198 8.94965 4.77267 8.57781C5.34734 8.20596 6.00596 7.98391 6.68846 7.9319C7.37096 7.87989 8.05562 7.99958 8.68 8.28005C8.97323 8.41165 9.24873 8.57963 9.5 8.78005C9.99766 9.16092 10.4009 9.65132 10.6784 10.2132C10.956 10.7751 11.1003 11.3934 11.1003 12.02C11.1003 12.6467 10.956 13.265 10.6784 13.8269C10.4009 14.3888 9.99766 14.8792 9.5 15.26Z"
        fill="black"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.3199 8.25987C15.0703 8.03224 14.7951 7.83426 14.4999 7.66987C13.7398 7.23103 12.8776 7 11.9999 7C11.1222 7 10.26 7.23103 9.49993 7.66987C9.20476 7.83426 8.92959 8.03224 8.67993 8.25987C8.97316 8.39147 9.24866 8.55946 9.49993 8.75987C9.7512 8.55946 10.0267 8.39147 10.3199 8.25987C10.8482 8.02257 11.4208 7.89987 11.9999 7.89987C12.5791 7.89987 13.1516 8.02257 13.6799 8.25987C13.9732 8.39147 14.2487 8.55946 14.4999 8.75987C14.9976 9.14075 15.4008 9.63115 15.6784 10.193C15.9559 10.7549 16.1003 11.3732 16.1003 11.9999C16.1003 12.6266 15.9559 13.2448 15.6784 13.8067C15.4008 14.3686 14.9976 14.859 14.4999 15.2399C14.2487 15.4403 13.9732 15.6083 13.6799 15.7399C13.1516 15.9772 12.5791 16.0999 11.9999 16.0999C11.4208 16.0999 10.8482 15.9772 10.3199 15.7399C10.0267 15.6083 9.7512 15.4403 9.49993 15.2399C9.24866 15.4403 8.97316 15.6083 8.67993 15.7399C8.92959 15.9675 9.20476 16.1655 9.49993 16.3299C10.26 16.7687 11.1222 16.9997 11.9999 16.9997C12.8776 16.9997 13.7398 16.7687 14.4999 16.3299C14.7951 16.1655 15.0703 15.9675 15.3199 15.7399C15.8486 15.2707 16.2719 14.6949 16.5617 14.0502C16.8516 13.4055 17.0014 12.7067 17.0014 11.9999C17.0014 11.293 16.8516 10.5942 16.5617 9.94956C16.2719 9.30489 15.8486 8.729 15.3199 8.25987Z"
        fill="black"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17 6.99965C16.8301 6.9897 16.6598 6.9897 16.49 6.99965C16.3354 7.00915 16.1818 7.0292 16.03 7.05965H15.92L15.58 7.13965C15.2017 7.25051 14.8389 7.40841 14.5 7.60965C14.3876 7.66676 14.2805 7.73369 14.18 7.80965L13.95 7.97965C13.8689 8.03748 13.7921 8.10097 13.72 8.16965C14.0132 8.30125 14.2887 8.46924 14.54 8.66965C14.7912 8.46924 15.0667 8.30125 15.36 8.16965C15.9843 7.88918 16.669 7.76949 17.3515 7.8215C18.034 7.87352 18.6926 8.09557 19.2673 8.46741C19.842 8.83926 20.3144 9.34906 20.6415 9.95032C20.9686 10.5516 21.14 11.2252 21.14 11.9097C21.14 12.5941 20.9686 13.2677 20.6415 13.869C20.3144 14.4702 19.842 14.98 19.2673 15.3519C18.6926 15.7237 18.034 15.9458 17.3515 15.9978C16.669 16.0498 15.9843 15.9301 15.36 15.6497C15.0667 15.5181 14.7912 15.3501 14.54 15.1497C14.2887 15.3501 14.0132 15.5181 13.72 15.6497C13.7921 15.7183 13.8689 15.7818 13.95 15.8397L14.18 16.0097C14.2805 16.0856 14.3876 16.1525 14.5 16.2097C14.8389 16.4109 15.2017 16.5688 15.58 16.6797L15.92 16.7597H16.03C16.1818 16.7901 16.3354 16.8101 16.49 16.8197C16.6561 16.8901 16.8264 16.9503 17 16.9997C18.3261 16.9997 19.5978 16.4729 20.5355 15.5352C21.4732 14.5975 22 13.3257 22 11.9997C22 10.6736 21.4732 9.4018 20.5355 8.46412C19.5978 7.52644 18.3261 6.99965 17 6.99965Z"
        fill="black"
      />
    </Svg>
  );
};

export const AverageIcon: FunctionComponent<{
  color?: string;
  size?: number;
}> = ({ color = 'none', size = 20 }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <Path
        d="M7.41634 16.0013H5.74967C5.51967 16.0013 5.33301 15.8146 5.33301 15.5846C5.33301 15.3546 5.51967 15.168 5.74967 15.168H7.41634C7.64634 15.168 7.833 15.3546 7.833 15.5846C7.833 15.8146 7.64634 16.0013 7.41634 16.0013Z"
        fill="black"
      />
      <Path
        d="M20.9583 16H19.9166C19.6866 16 19.5 15.8133 19.5 15.5833C19.5 15.3533 19.6866 15.1667 19.9166 15.1667H20.6124L21.1741 12.1733C21.1666 10.6417 19.8583 9.33333 18.25 9.33333H15.5141L14.1883 15.1667H16.5833C16.8133 15.1667 17 15.3533 17 15.5833C17 15.8133 16.8133 16 16.5833 16H13.6666C13.54 16 13.42 15.9425 13.3408 15.8433C13.2616 15.745 13.2316 15.615 13.26 15.4916L14.775 8.825C14.8183 8.63417 14.9866 8.5 15.1816 8.5H18.25C20.3175 8.5 21.9999 10.1825 21.9999 12.25L21.3674 15.66C21.3308 15.8575 21.1591 16 20.9583 16Z"
        fill="black"
      />
      <Path
        d="M18.2501 17.6667C17.1017 17.6667 16.1667 16.7325 16.1667 15.5833C16.1667 14.4342 17.1017 13.5 18.2501 13.5C19.3984 13.5 20.3334 14.4342 20.3334 15.5833C20.3334 16.7325 19.3984 17.6667 18.2501 17.6667ZM18.2501 14.3333C17.5609 14.3333 17.0001 14.8942 17.0001 15.5833C17.0001 16.2725 17.5609 16.8333 18.2501 16.8333C18.9392 16.8333 19.5001 16.2725 19.5001 15.5833C19.5001 14.8942 18.9392 14.3333 18.2501 14.3333Z"
        fill="black"
      />
      <Path
        d="M9.08333 17.6667C7.935 17.6667 7 16.7325 7 15.5833C7 14.4342 7.935 13.5 9.08333 13.5C10.2317 13.5 11.1667 14.4342 11.1667 15.5833C11.1667 16.7325 10.2317 17.6667 9.08333 17.6667ZM9.08333 14.3333C8.39416 14.3333 7.83333 14.8942 7.83333 15.5833C7.83333 16.2725 8.39416 16.8333 9.08333 16.8333C9.77249 16.8333 10.3333 16.2725 10.3333 15.5833C10.3333 14.8942 9.77249 14.3333 9.08333 14.3333Z"
        fill="black"
      />
      <Path
        d="M7.41698 8.5013H4.08366C3.85366 8.5013 3.66699 8.31463 3.66699 8.08463C3.66699 7.85463 3.85366 7.66797 4.08366 7.66797H7.41698C7.64698 7.66797 7.83365 7.85463 7.83365 8.08463C7.83365 8.31463 7.64698 8.5013 7.41698 8.5013Z"
        fill="black"
      />
      <Path
        d="M7.41633 11.0013H3.24967C3.01967 11.0013 2.83301 10.8146 2.83301 10.5846C2.83301 10.3546 3.01967 10.168 3.24967 10.168H7.41633C7.64633 10.168 7.83299 10.3546 7.83299 10.5846C7.83299 10.8146 7.64633 11.0013 7.41633 11.0013Z"
        fill="black"
      />
      <Path
        d="M7.41665 13.5013H2.41667C2.18667 13.5013 2 13.3146 2 13.0846C2 12.8546 2.18667 12.668 2.41667 12.668H7.41665C7.64665 12.668 7.83332 12.8546 7.83332 13.0846C7.83332 13.3146 7.64665 13.5013 7.41665 13.5013Z"
        fill="black"
      />
      <Path
        d="M13.6663 16H10.7497C10.5197 16 10.333 15.8133 10.333 15.5833C10.333 15.3533 10.5197 15.1666 10.7497 15.1666H13.3338L15.2271 6.83333H5.74967C5.51967 6.83333 5.33301 6.64666 5.33301 6.41667C5.33301 6.18667 5.51967 6 5.74967 6H15.7496C15.8763 6 15.9963 6.0575 16.0755 6.15667C16.1546 6.255 16.1846 6.385 16.1563 6.50833L14.073 15.675C14.0297 15.8658 13.8605 16 13.6663 16Z"
        fill="black"
      />
    </Svg>
  );
};

export const SendWithinNetworkIcon: FunctionComponent<{
  color?: string;
  size?: number;
}> = ({ size = 45, color = 'none' }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 45 44" fill={color}>
      <Rect x="0.75" width="44" height="44" rx="6" fill="#F8EFFF" />
      <Path
        d="M27.0002 33.72C26.7302 33.72 26.4802 33.57 26.3502 33.34C26.2202 33.11 26.2202 32.82 26.3602 32.59L27.4102 30.84C27.6202 30.48 28.0802 30.37 28.4402 30.58C28.8002 30.79 28.9102 31.25 28.7002 31.61L28.4302 32.06C31.1902 31.41 33.2602 28.93 33.2602 25.97C33.2602 25.56 33.6002 25.22 34.0102 25.22C34.4202 25.22 34.7602 25.56 34.7602 25.97C34.7502 30.24 31.2702 33.72 27.0002 33.72Z"
        fill="#5F5E77"
      />
      <Path
        d="M12 18.72C11.59 18.72 11.25 18.38 11.25 17.97C11.25 13.7 14.73 10.22 19 10.22C19.27 10.22 19.52 10.37 19.65 10.6C19.78 10.83 19.78 11.12 19.64 11.35L18.59 13.1C18.38 13.46 17.92 13.57 17.56 13.36C17.2 13.15 17.09 12.69 17.3 12.33L17.57 11.88C14.81 12.53 12.74 15.01 12.74 17.97C12.75 18.38 12.41 18.72 12 18.72Z"
        fill="#5F5E77"
      />
      <Path
        d="M20.4301 26.08H17.6201C17.2101 26.08 16.8701 25.74 16.8701 25.33V23.08C16.8701 22.67 17.2101 22.33 17.6201 22.33H20.4301C21.4301 22.33 22.3101 23.21 22.3101 24.21C22.3101 25.23 21.4601 26.08 20.4301 26.08ZM18.3701 24.58H20.4301C20.6401 24.58 20.8101 24.41 20.8101 24.2C20.8101 24.05 20.6401 23.8199 20.4301 23.8199H18.3701V24.58Z"
        fill="#5F5E77"
      />
      <Path
        d="M20.8299 28.33H17.6099C17.1999 28.33 16.8599 27.99 16.8599 27.58V25.33C16.8599 24.92 17.1999 24.58 17.6099 24.58H20.8299C21.9499 24.58 22.8699 25.42 22.8699 26.46C22.8699 27.5 21.9599 28.33 20.8299 28.33ZM18.3699 26.83H20.8399C21.1599 26.83 21.3799 26.63 21.3799 26.45C21.3799 26.27 21.1599 26.0699 20.8399 26.0699H18.3699V26.83Z"
        fill="#5F5E77"
      />
      <Path
        d="M19.4199 29.45C19.0099 29.45 18.6699 29.11 18.6699 28.7V27.5699C18.6699 27.1599 19.0099 26.8199 19.4199 26.8199C19.8299 26.8199 20.1699 27.1599 20.1699 27.5699V28.7C20.1699 29.12 19.8299 29.45 19.4199 29.45Z"
        fill="#5F5E77"
      />
      <Path
        d="M19.4199 23.8199C19.0099 23.8199 18.6699 23.4799 18.6699 23.0699V21.9399C18.6699 21.5299 19.0099 21.1899 19.4199 21.1899C19.8299 21.1899 20.1699 21.5299 20.1699 21.9399V23.0699C20.1699 23.4899 19.8299 23.8199 19.4199 23.8199Z"
        fill="#5F5E77"
      />
      <Path
        d="M19.67 32.2499C15.85 32.2499 12.75 29.14 12.75 25.33C12.75 21.52 15.86 18.4099 19.67 18.4099C19.85 18.4099 20.01 18.4199 20.19 18.4299C23.58 18.6899 26.32 21.4299 26.57 24.7999C26.58 25.0199 26.59 25.17 26.59 25.33C26.6 29.14 23.49 32.2499 19.67 32.2499ZM19.67 19.9C16.68 19.9 14.25 22.3299 14.25 25.3199C14.25 28.3099 16.68 30.7399 19.67 30.7399C22.66 30.7399 25.1 28.3099 25.1 25.3199C25.1 25.1899 25.09 25.0599 25.08 24.9299C24.88 22.2499 22.73 20.1099 20.09 19.9099C19.96 19.9099 19.82 19.9 19.67 19.9Z"
        fill="#5F5E77"
      />
      <Path
        d="M26.3302 25.6H25.8402C25.4502 25.6 25.1202 25.3 25.0902 24.91C24.8902 22.26 22.7502 20.12 20.1002 19.92C19.7102 19.89 19.4102 19.56 19.4102 19.17V18.68C19.4102 14.86 22.5202 11.76 26.3402 11.76C30.1602 11.76 33.2602 14.87 33.2602 18.68C33.2602 22.49 30.1402 25.6 26.3302 25.6ZM20.9002 18.51C23.7202 19.02 25.9802 21.27 26.4902 24.1C29.4102 24.01 31.7502 21.61 31.7502 18.68C31.7502 15.69 29.3202 13.26 26.3302 13.26C23.3902 13.25 20.9902 15.59 20.9002 18.51Z"
        fill="#5F5E77"
      />
    </Svg>
  );
};

export const SendCrossChainIcon: FunctionComponent<{
  color?: string;
  size?: number;
}> = ({ size = 45, color = 'none' }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 45 44" fill={color}>
      <Rect x="0.25" width="44" height="44" rx="6" fill="#EBF1FA" />
      <Path
        d="M25.0002 32.75C24.7302 32.75 24.4802 32.6 24.3502 32.37C24.2202 32.13 24.2202 31.85 24.3602 31.61L25.4102 29.86C25.6202 29.51 26.0802 29.39 26.4402 29.6C26.8002 29.81 26.9102 30.27 26.7002 30.63L26.4302 31.08C29.1902 30.43 31.2602 27.95 31.2602 24.99C31.2602 24.58 31.6002 24.24 32.0102 24.24C32.4202 24.24 32.7602 24.58 32.7602 24.99C32.7502 29.27 29.2702 32.75 25.0002 32.75Z"
        fill="#5F5E77"
      />
      <Path
        d="M12 19.75C11.59 19.75 11.25 19.41 11.25 19C11.25 14.73 14.73 11.25 19 11.25C19.27 11.25 19.52 11.4 19.65 11.63C19.78 11.87 19.78 12.15 19.64 12.39L18.59 14.14C18.38 14.49 17.92 14.61 17.56 14.4C17.2 14.19 17.09 13.73 17.3 13.37L17.57 12.92C14.81 13.57 12.74 16.05 12.74 19.01C12.75 19.41 12.41 19.75 12 19.75Z"
        fill="#5F5E77"
      />
      <Path
        d="M28.5 21.75C25.61 21.75 23.25 19.4 23.25 16.5C23.25 13.6 25.6 11.25 28.5 11.25C31.4 11.25 33.75 13.6 33.75 16.5C33.75 19.4 31.39 21.75 28.5 21.75ZM28.5 12.75C26.43 12.75 24.75 14.43 24.75 16.5C24.75 18.57 26.43 20.25 28.5 20.25C30.57 20.25 32.25 18.57 32.25 16.5C32.25 14.43 30.57 12.75 28.5 12.75Z"
        fill="#5F5E77"
      />
      <Path
        d="M15.498 32.5C12.608 32.5 10.248 30.15 10.248 27.25C10.248 24.35 12.598 22 15.498 22C18.398 22 20.748 24.35 20.748 27.25C20.748 30.15 18.388 32.5 15.498 32.5ZM15.498 23.5C13.428 23.5 11.748 25.18 11.748 27.25C11.748 29.32 13.428 31 15.498 31C17.568 31 19.248 29.32 19.248 27.25C19.248 25.18 17.568 23.5 15.498 23.5Z"
        fill="#5F5E77"
      />
      <Path
        d="M15.9616 27.7086H14.266C14.0186 27.7086 13.8135 27.5035 13.8135 27.2561V25.8984C13.8135 25.651 14.0186 25.4458 14.266 25.4458H15.9616C16.5651 25.4458 17.0961 25.9768 17.0961 26.5802C17.0961 27.1957 16.5832 27.7086 15.9616 27.7086ZM14.7186 26.8035H15.9616C16.0884 26.8035 16.1909 26.7009 16.1909 26.5742C16.1909 26.4837 16.0884 26.3449 15.9616 26.3449H14.7186V26.8035Z"
        fill="#5F5E77"
      />
      <Path
        d="M16.2032 29.0663H14.2602C14.0128 29.0663 13.8076 28.8612 13.8076 28.6138V27.2561C13.8076 27.0087 14.0128 26.8035 14.2602 26.8035H16.2032C16.879 26.8035 17.4342 27.3104 17.4342 27.9379C17.4342 28.5655 16.885 29.0663 16.2032 29.0663ZM14.7188 28.1612H16.2092C16.4023 28.1612 16.5351 28.0405 16.5351 27.9319C16.5351 27.8233 16.4023 27.7026 16.2092 27.7026H14.7188V28.1612Z"
        fill="#5F5E77"
      />
      <Path
        d="M15.352 29.7421C15.1046 29.7421 14.8994 29.537 14.8994 29.2896V28.6077C14.8994 28.3603 15.1046 28.1551 15.352 28.1551C15.5994 28.1551 15.8045 28.3603 15.8045 28.6077V29.2896C15.8045 29.543 15.5994 29.7421 15.352 29.7421Z"
        fill="#5F5E77"
      />
      <Path
        d="M15.352 26.3449C15.1046 26.3449 14.8994 26.1397 14.8994 25.8923V25.2105C14.8994 24.9631 15.1046 24.7579 15.352 24.7579C15.5994 24.7579 15.8045 24.9631 15.8045 25.2105V25.8923C15.8045 26.1458 15.5994 26.3449 15.352 26.3449Z"
        fill="#5F5E77"
      />
    </Svg>
  );
};

export const SendBridgeIcon: FunctionComponent<{
  color?: string;
  size?: number;
}> = ({ size = 45, color = 'none' }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 45 44" fill={color}>
      <Rect x="0.75" width="44" height="44" rx="6" fill="#FFF6E9" />
      <Path
        d="M25.7502 32.75C25.4802 32.75 25.2302 32.6 25.1002 32.37C24.9702 32.14 24.9702 31.85 25.1102 31.62L26.1602 29.87C26.3702 29.51 26.8302 29.4 27.1902 29.61C27.5502 29.82 27.6602 30.28 27.4502 30.64L27.1802 31.09C29.9402 30.44 32.0102 27.96 32.0102 25C32.0102 24.59 32.3502 24.25 32.7602 24.25C33.1702 24.25 33.5102 24.59 33.5102 25C33.5002 29.27 30.0202 32.75 25.7502 32.75Z"
        fill="#5F5E77"
      />
      <Path
        d="M12.75 19.75C12.34 19.75 12 19.41 12 19C12 14.73 15.48 11.25 19.75 11.25C20.02 11.25 20.27 11.4 20.4 11.63C20.53 11.86 20.53 12.15 20.39 12.38L19.34 14.13C19.13 14.49 18.67 14.6 18.31 14.39C17.95 14.18 17.84 13.72 18.05 13.36L18.32 12.91C15.56 13.56 13.49 16.04 13.49 19C13.5 19.41 13.16 19.75 12.75 19.75Z"
        fill="#5F5E77"
      />
      <Path
        d="M28.4299 17.4999C28.2999 17.4999 28.1699 17.4699 28.0499 17.3999L24.0799 15.0998C23.7199 14.8898 23.5999 14.4299 23.8099 14.0699C24.0199 13.7099 24.4799 13.5899 24.8299 13.7999L28.4299 15.8799L31.9999 13.8099C32.3599 13.5999 32.8199 13.7299 33.0199 14.0799C33.2299 14.4399 33.0999 14.8999 32.7499 15.1099L28.7999 17.3899C28.6899 17.4599 28.5599 17.4999 28.4299 17.4999Z"
        fill="#5F5E77"
      />
      <Path
        d="M28.4302 21.5699C28.0202 21.5699 27.6802 21.2299 27.6802 20.8199V16.7399C27.6802 16.3299 28.0202 15.9899 28.4302 15.9899C28.8402 15.9899 29.1802 16.3299 29.1802 16.7399V20.8199C29.1802 21.2399 28.8402 21.5699 28.4302 21.5699Z"
        fill="#5F5E77"
      />
      <Path
        d="M28.4299 21.7499C27.9699 21.7499 27.4999 21.6499 27.1299 21.4399L24.7299 20.1099C23.9499 19.6799 23.3599 18.67 23.3599 17.78V15.2399C23.3599 14.3399 23.9499 13.34 24.7399 12.9L27.1399 11.57C27.8799 11.16 28.9899 11.16 29.7399 11.57L32.1399 12.9C32.9199 13.33 33.5099 14.3399 33.5099 15.2299V17.77C33.5099 18.67 32.9199 19.6699 32.1399 20.0999L29.7399 21.4299C29.3499 21.6499 28.8899 21.7499 28.4299 21.7499ZM27.8599 12.8699L25.4599 14.2C25.1599 14.37 24.8599 14.8799 24.8599 15.2199V17.76C24.8599 18.11 25.1599 18.62 25.4599 18.78L27.8599 20.1199C28.1499 20.2799 28.7099 20.2799 28.9999 20.1199L31.3999 18.7899C31.6999 18.6199 31.9999 18.11 31.9999 17.77V15.2299C31.9999 14.8799 31.6999 14.37 31.3999 14.21L28.9999 12.8799C28.7099 12.7099 28.1399 12.7099 27.8599 12.8699Z"
        fill="#5F5E77"
      />
      <Path
        d="M17.07 28.4999C16.94 28.4999 16.81 28.4699 16.69 28.3999L12.72 26.0998C12.36 25.8898 12.24 25.4299 12.45 25.0699C12.66 24.7099 13.12 24.5899 13.47 24.7999L17.07 26.8799L20.64 24.8099C21 24.5999 21.46 24.7299 21.66 25.0799C21.87 25.4399 21.74 25.8999 21.39 26.1099L17.44 28.3899C17.33 28.4599 17.2 28.4999 17.07 28.4999Z"
        fill="#5F5E77"
      />
      <Path
        d="M17.0698 32.5699C16.6598 32.5699 16.3198 32.2299 16.3198 31.8199V27.7399C16.3198 27.3299 16.6598 26.9899 17.0698 26.9899C17.4798 26.9899 17.8198 27.3299 17.8198 27.7399V31.8199C17.8198 32.2399 17.4898 32.5699 17.0698 32.5699Z"
        fill="#5F5E77"
      />
      <Path
        d="M17.07 32.7499C16.61 32.7499 16.14 32.6499 15.77 32.4399L13.37 31.1099C12.59 30.6799 12 29.67 12 28.78V26.2399C12 25.3399 12.59 24.3399 13.37 23.9099L15.77 22.58C16.51 22.17 17.63 22.17 18.37 22.58L20.77 23.9099C21.55 24.3399 22.14 25.3499 22.14 26.2399V28.78C22.14 29.68 21.55 30.6799 20.76 31.1199L18.36 32.45C18 32.65 17.54 32.7499 17.07 32.7499ZM16.5 23.8699L14.1 25.2C13.8 25.37 13.5 25.8799 13.5 26.2199V28.76C13.5 29.11 13.8 29.62 14.1 29.78L16.5 31.1099C16.79 31.2699 17.35 31.2699 17.64 31.1099L20.04 29.78C20.34 29.61 20.64 29.1 20.64 28.76V26.2199C20.64 25.8699 20.34 25.36 20.04 25.2L17.64 23.8599C17.36 23.7099 16.79 23.7099 16.5 23.8699Z"
        fill="#5F5E77"
      />
    </Svg>
  );
};

export const SendQRCodeIcon: FunctionComponent<{
  color?: string;
  size?: number;
}> = ({ size = 45, color = 'none' }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 45 44" fill={color}>
      <Rect x="0.25" width="44" height="44" rx="6" fill="#F3F1F5" />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.5 12.75C14.4242 12.75 12.75 14.4242 12.75 16.5V19C12.75 19.4142 12.4142 19.75 12 19.75C11.5858 19.75 11.25 19.4142 11.25 19V16.5C11.25 13.5958 13.5958 11.25 16.5 11.25H19C19.4142 11.25 19.75 11.5858 19.75 12C19.75 12.4142 19.4142 12.75 19 12.75H16.5Z"
        fill="#5F5E77"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M24.25 12C24.25 11.5858 24.5858 11.25 25 11.25H27.5C30.4042 11.25 32.75 13.5958 32.75 16.5V19C32.75 19.4142 32.4142 19.75 32 19.75C31.5858 19.75 31.25 19.4142 31.25 19V16.5C31.25 14.4242 29.5758 12.75 27.5 12.75H25C24.5858 12.75 24.25 12.4142 24.25 12Z"
        fill="#5F5E77"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M32 25.25C32.4142 25.25 32.75 25.5858 32.75 26V27.5C32.75 30.4042 30.4042 32.75 27.5 32.75H26C25.5858 32.75 25.25 32.4142 25.25 32C25.25 31.5858 25.5858 31.25 26 31.25H27.5C29.5758 31.25 31.25 29.5758 31.25 27.5V26C31.25 25.5858 31.5858 25.25 32 25.25Z"
        fill="#5F5E77"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 24.25C12.4142 24.25 12.75 24.5858 12.75 25V27.5C12.75 29.5758 14.4242 31.25 16.5 31.25H19C19.4142 31.25 19.75 31.5858 19.75 32C19.75 32.4142 19.4142 32.75 19 32.75H16.5C13.5958 32.75 11.25 30.4042 11.25 27.5V25C11.25 24.5858 11.5858 24.25 12 24.25Z"
        fill="#5F5E77"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18.2803 17.7803C17.9706 18.0901 17.75 18.6156 17.75 19.5V24.5C17.75 25.3844 17.9706 25.9099 18.2803 26.2197C18.5901 26.5294 19.1156 26.75 20 26.75H24C24.8844 26.75 25.4099 26.5294 25.7197 26.2197C26.0294 25.9099 26.25 25.3844 26.25 24.5V19.5C26.25 18.6156 26.0294 18.0901 25.7197 17.7803C25.4099 17.4706 24.8844 17.25 24 17.25H20C19.1156 17.25 18.5901 17.4706 18.2803 17.7803ZM17.2197 16.7197C17.9099 16.0294 18.8844 15.75 20 15.75H24C25.1156 15.75 26.0901 16.0294 26.7803 16.7197C27.4706 17.4099 27.75 18.3844 27.75 19.5V24.5C27.75 25.6156 27.4706 26.5901 26.7803 27.2803C26.0901 27.9706 25.1156 28.25 24 28.25H20C18.8844 28.25 17.9099 27.9706 17.2197 27.2803C16.5294 26.5901 16.25 25.6156 16.25 24.5V19.5C16.25 18.3844 16.5294 17.4099 17.2197 16.7197Z"
        fill="#5F5E77"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.25 22C14.25 21.5858 14.5858 21.25 15 21.25H29C29.4142 21.25 29.75 21.5858 29.75 22C29.75 22.4142 29.4142 22.75 29 22.75H15C14.5858 22.75 14.25 22.4142 14.25 22Z"
        fill="#5F5E77"
      />
    </Svg>
  );
};

export const LowIconFill: FunctionComponent<IconProps> = ({ color, size }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 22 15" fill={color}>
      <Path
        d="M7.61501 7L10.45 5H16.25V7H11.106L8.25001 9H1.25001V7H7.61501ZM8.53101 12.06L11.456 10.995L12.14 12.875L9.21501 13.939C9.35271 15.0367 9.0812 16.1467 8.45235 17.0569C7.8235 17.9672 6.88138 18.6138 5.80595 18.8734C4.73051 19.133 3.59713 18.9874 2.62228 18.4643C1.64744 17.9412 0.89945 17.0773 0.521193 16.0376C0.142936 14.998 0.160918 13.8554 0.571706 12.8282C0.982493 11.801 1.75729 10.961 2.74812 10.4689C3.73894 9.97672 4.87635 9.8668 5.94308 10.1601C7.00982 10.4534 7.93112 11.1294 8.53101 12.059V12.06ZM4.75001 17C5.41305 17 6.04894 16.7366 6.51778 16.2678C6.98662 15.7989 7.25001 15.163 7.25001 14.5C7.25001 13.837 6.98662 13.2011 6.51778 12.7322C6.04894 12.2634 5.41305 12 4.75001 12C4.08697 12 3.45108 12.2634 2.98224 12.7322C2.5134 13.2011 2.25001 13.837 2.25001 14.5C2.25001 15.163 2.5134 15.7989 2.98224 16.2678C3.45108 16.7366 4.08697 17 4.75001 17V17ZM17.75 19C17.1591 19 16.5739 18.8836 16.0279 18.6575C15.482 18.4313 14.9859 18.0998 14.568 17.682C14.1502 17.2641 13.8187 16.768 13.5926 16.2221C13.3664 15.6761 13.25 15.0909 13.25 14.5C13.25 13.9091 13.3664 13.3239 13.5926 12.7779C13.8187 12.232 14.1502 11.7359 14.568 11.318C14.9859 10.9002 15.482 10.5687 16.0279 10.3425C16.5739 10.1164 17.1591 10 17.75 10C18.9435 10 20.0881 10.4741 20.932 11.318C21.7759 12.1619 22.25 13.3065 22.25 14.5C22.25 15.6935 21.7759 16.8381 20.932 17.682C20.0881 18.5259 18.9435 19 17.75 19V19ZM17.75 17C18.4131 17 19.0489 16.7366 19.5178 16.2678C19.9866 15.7989 20.25 15.163 20.25 14.5C20.25 13.837 19.9866 13.2011 19.5178 12.7322C19.0489 12.2634 18.4131 12 17.75 12C17.087 12 16.4511 12.2634 15.9822 12.7322C15.5134 13.2011 15.25 13.837 15.25 14.5C15.25 15.163 15.5134 15.7989 15.9822 16.2678C16.4511 16.7366 17.087 17 17.75 17ZM3.25001 8H9.25001L11.85 6.267L12.13 5.221L14.062 5.739L12.14 12.87L10.318 11.982L10.436 11.542L8.25001 13L7.25001 11H3.25001V8ZM15.342 3H19.25V6H16.434L18.354 11.276L16.474 11.96L14.306 6H14.25V5.848L12.85 2H10.25V0H14.25L15.342 3Z"
        fill={color}
      />
    </Svg>
  );
};

export const AverageIconFill: FunctionComponent<IconProps> = ({
  color,
  size
}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 22 15" fill={color}>
      <Path
        d="M15 0H5L0 8.33333V11.6667H2C2 12.5507 2.31607 13.3986 2.87868 14.0237C3.44129 14.6488 4.20435 15 5 15C5.79565 15 6.55871 14.6488 7.12132 14.0237C7.68393 13.3986 8 12.5507 8 11.6667H14C14 12.5507 14.3161 13.3986 14.8787 14.0237C15.4413 14.6488 16.2044 15 17 15C17.7957 15 18.5587 14.6488 19.1213 14.0237C19.6839 13.3986 20 12.5507 20 11.6667H22V7.22222C22 5.55556 21.4762 4.44444 20 4.44444H18L15 0ZM5.5 1.66667H9.5V4.44444H3.5L5.5 1.66667ZM11 1.66667H14.5L16.46 4.44444H11V1.66667ZM5 10C5.39782 10 5.77936 10.1756 6.06066 10.4882C6.34197 10.8007 6.5 11.2246 6.5 11.6667C6.5 12.1087 6.34197 12.5326 6.06066 12.8452C5.77936 13.1577 5.39782 13.3333 5 13.3333C4.60218 13.3333 4.22064 13.1577 3.93934 12.8452C3.65804 12.5326 3.5 12.1087 3.5 11.6667C3.5 11.2246 3.65804 10.8007 3.93934 10.4882C4.22064 10.1756 4.60218 10 5 10ZM17 10C17.3978 10 17.7794 10.1756 18.0607 10.4882C18.342 10.8007 18.5 11.2246 18.5 11.6667C18.5 12.1087 18.342 12.5326 18.0607 12.8452C17.7794 13.1577 17.3978 13.3333 17 13.3333C16.6022 13.3333 16.2206 13.1577 15.9393 12.8452C15.658 12.5326 15.5 12.1087 15.5 11.6667C15.5 11.2246 15.658 10.8007 15.9393 10.4882C16.2206 10.1756 16.6022 10 17 10Z"
        fill={color}
      />
    </Svg>
  );
};

export const FastIconFill: FunctionComponent<IconProps> = ({ color, size }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 22 15" fill={color}>
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.9899 0.420122C14.4059 -0.165909 13.6619 -0.104906 13.1618 0.39312L9.08162 4.45733C6.64449 3.68129 2.23527 2.18221 0.571182 2.18221C0.33917 2.18221 0.237164 2.20821 0.202163 2.21921C0.0755469 2.35654 0.00409398 2.53579 0.00151016 2.72256C-0.00107367 2.90934 0.0653936 3.09049 0.188162 3.23127L6.29548 7.23147L3.26332 10.2516C3.26332 10.2516 0.9242 9.7696 0.582182 9.7246C0.105157 9.6626 -0.444871 10.0806 0.580182 10.6036C1.77724 11.2127 3.17932 11.9207 3.17932 11.9207C3.17932 11.9207 4.04236 13.5998 4.56939 14.5249C5.24042 15.6439 5.63444 15.1009 5.55444 14.5249L5.20642 12.0097L8.09057 9.01757L10.9197 6.19842L14.9459 2.18721C15.4469 1.68919 15.572 1.00415 14.9899 0.420122V0.420122Z"
        fill={color}
      />
    </Svg>
  );
};
