import { StyledDivider } from "../../styled/Utils.styled";
import {
  Copyright,
  FooterSection,
  Socials,
  SocialsGroup,
} from "./Footer.styled";

const Footer = () => {
  return (
    <>
      <StyledDivider margin="3.75rem" />

      <FooterSection>
        <SocialsGroup>
          <Socials to="/">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z"
                fill="#ACACAC"
              />
            </svg>
          </Socials>

          <Socials to="/">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.001 9C11.2054 9 10.4423 9.31607 9.87968 9.87868C9.31707 10.4413 9.001 11.2044 9.001 12C9.001 12.7956 9.31707 13.5587 9.87968 14.1213C10.4423 14.6839 11.2054 15 12.001 15C12.7966 15 13.5597 14.6839 14.1223 14.1213C14.6849 13.5587 15.001 12.7956 15.001 12C15.001 11.2044 14.6849 10.4413 14.1223 9.87868C13.5597 9.31607 12.7966 9 12.001 9ZM12.001 7C13.3271 7 14.5989 7.52678 15.5365 8.46447C16.4742 9.40215 17.001 10.6739 17.001 12C17.001 13.3261 16.4742 14.5979 15.5365 15.5355C14.5989 16.4732 13.3271 17 12.001 17C10.6749 17 9.40315 16.4732 8.46547 15.5355C7.52778 14.5979 7.001 13.3261 7.001 12C7.001 10.6739 7.52778 9.40215 8.46547 8.46447C9.40315 7.52678 10.6749 7 12.001 7ZM18.501 6.75C18.501 7.08152 18.3693 7.39946 18.1349 7.63388C17.9005 7.8683 17.5825 8 17.251 8C16.9195 8 16.6015 7.8683 16.3671 7.63388C16.1327 7.39946 16.001 7.08152 16.001 6.75C16.001 6.41848 16.1327 6.10054 16.3671 5.86612C16.6015 5.6317 16.9195 5.5 17.251 5.5C17.5825 5.5 17.9005 5.6317 18.1349 5.86612C18.3693 6.10054 18.501 6.41848 18.501 6.75ZM12.001 4C9.527 4 9.123 4.007 7.972 4.058C7.188 4.095 6.662 4.2 6.174 4.39C5.76562 4.53994 5.39641 4.78026 5.094 5.093C4.78101 5.3954 4.54035 5.76458 4.39 6.173C4.2 6.663 4.095 7.188 4.059 7.971C4.007 9.075 4 9.461 4 12C4 14.475 4.007 14.878 4.058 16.029C4.095 16.812 4.2 17.339 4.389 17.826C4.559 18.261 4.759 18.574 5.091 18.906C5.428 19.242 5.741 19.443 6.171 19.609C6.665 19.8 7.191 19.906 7.971 19.942C9.075 19.994 9.461 20 12 20C14.475 20 14.878 19.993 16.029 19.942C16.811 19.905 17.337 19.8 17.826 19.611C18.234 19.4603 18.6031 19.2201 18.906 18.908C19.243 18.572 19.444 18.259 19.61 17.828C19.8 17.336 19.906 16.81 19.942 16.028C19.994 14.925 20 14.538 20 12C20 9.526 19.993 9.122 19.942 7.971C19.905 7.189 19.799 6.661 19.61 6.173C19.4593 5.76502 19.219 5.39598 18.907 5.093C18.6047 4.77985 18.2355 4.53917 17.827 4.389C17.337 4.199 16.811 4.094 16.029 4.058C14.926 4.006 14.54 4 12 4M12 2C14.717 2 15.056 2.01 16.123 2.06C17.187 2.11 17.913 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2246 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.123 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.877 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16943 19.8222 2.77596 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.012 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.813 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.087 2.277 6.812 2.11 7.877 2.06C8.945 2.013 9.284 2 12.001 2"
                fill="#ACACAC"
              />
            </svg>
          </Socials>

          <Socials to="/">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.213 5.65605C21.4496 5.99374 20.64 6.21552 19.811 6.31405C20.6841 5.79119 21.3373 4.96879 21.649 4.00005C20.829 4.48805 19.93 4.83005 18.994 5.01505C18.3646 4.34163 17.5304 3.89501 16.621 3.74463C15.7116 3.59425 14.7779 3.74854 13.9653 4.1835C13.1526 4.61846 12.5064 5.30973 12.1271 6.14984C11.7478 6.98995 11.6568 7.93183 11.868 8.82905C10.2049 8.74584 8.57797 8.31378 7.09274 7.56091C5.60752 6.80805 4.29724 5.75122 3.247 4.45905C2.87529 5.0975 2.67996 5.82328 2.681 6.56205C2.681 8.01205 3.42 9.29305 4.541 10.043C3.87702 10.0221 3.22765 9.84279 2.647 9.52005V9.57105C2.64697 10.5369 2.98104 11.4731 3.59253 12.2207C4.20403 12.9684 5.05532 13.4815 6.002 13.673C5.38564 13.8403 4.7393 13.8649 4.112 13.745C4.37893 14.5764 4.89922 15.3035 5.6 15.8244C6.30078 16.3454 7.14696 16.6341 8.02 16.65C7.15236 17.3315 6.15889 17.8352 5.09641 18.1324C4.03393 18.4296 2.92329 18.5144 1.828 18.382C3.73972 19.6114 5.96511 20.2641 8.238 20.262C15.932 20.262 20.138 13.889 20.138 8.36205C20.138 8.18205 20.134 8.00005 20.126 7.82105C20.9444 7.22941 21.6508 6.49661 22.212 5.65705"
                fill="#ACACAC"
              />
            </svg>
          </Socials>

          <Socials to="/">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 8.245V15.5C15.9997 16.85 15.579 18.1665 14.7964 19.2666C14.0138 20.3666 12.9081 21.1957 11.6328 21.6387C10.3575 22.0817 8.97591 22.1166 7.67987 21.7385C6.38384 21.3605 5.23768 20.5883 4.40053 19.5291C3.56339 18.47 3.07681 17.1764 3.00836 15.8281C2.93991 14.4798 3.29299 13.1436 4.01856 12.0052C4.74414 10.8667 5.80621 9.98235 7.05729 9.475C8.30838 8.96766 9.68639 8.86245 11 9.174V12.337C10.3148 12.012 9.54261 11.9183 8.79959 12.0701C8.05658 12.2218 7.38295 12.6108 6.8801 13.1785C6.37724 13.7461 6.07236 14.4618 6.01135 15.2177C5.95033 15.9736 6.13647 16.7288 6.54177 17.3698C6.94706 18.0108 7.54957 18.5028 8.25862 18.7717C8.96768 19.0407 9.74491 19.0721 10.4734 18.8612C11.2018 18.6503 11.842 18.2085 12.2977 17.6023C12.7534 16.9961 12.9998 16.2584 13 15.5V2H16C16 3.32608 16.5268 4.59785 17.4645 5.53553C18.4021 6.47322 19.6739 7 21 7V10C19.1819 10.0027 17.4176 9.38344 16 8.245Z"
                fill="#ACACAC"
              />
            </svg>
          </Socials>

          <Socials to="/">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.001 2C6.501 2 2.001 6.5 2.001 12C2.001 17.5 6.501 22 12.001 22C17.501 22 22.001 17.5 22.001 12C22.001 6.5 17.551 2 12.001 2ZM15.751 16.65C13.401 15.2 10.451 14.9 6.951 15.7C6.601 15.8 6.301 15.55 6.201 15.25C6.101 14.9 6.351 14.6 6.651 14.5C10.451 13.65 13.751 14 16.351 15.6C16.701 15.75 16.751 16.15 16.601 16.45C16.401 16.75 16.051 16.85 15.751 16.65ZM16.751 13.95C14.051 12.3 9.951 11.8 6.801 12.8C6.401 12.9 5.951 12.7 5.851 12.3C5.751 11.9 5.951 11.45 6.351 11.35C10.001 10.25 14.501 10.8 17.601 12.7C17.901 12.85 18.051 13.35 17.801 13.7C17.551 14.05 17.101 14.2 16.751 13.95ZM6.3 9.75C5.8 9.9 5.3 9.6 5.15 9.15C5 8.65 5.3 8.15 5.75 8C9.3 6.95 15.15 7.15 18.85 9.35C19.3 9.6 19.45 10.2 19.2 10.65C18.95 11 18.35 11.15 17.9 10.9C14.7 9 9.35 8.8 6.3 9.75Z"
                fill="#ACACAC"
              />
            </svg>
          </Socials>

          <Socials to="/">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.673 7.22198C10.797 7.22198 9.441 6.22598 8.013 6.26198C6.129 6.28598 4.401 7.35397 3.429 9.04597C1.473 12.442 2.925 17.458 4.833 20.218C5.769 21.562 6.873 23.074 8.337 23.026C9.741 22.966 10.269 22.114 11.973 22.114C13.665 22.114 14.145 23.026 15.633 22.99C17.145 22.966 18.105 21.622 19.029 20.266C20.097 18.706 20.541 17.194 20.565 17.11C20.529 17.098 17.625 15.982 17.589 12.622C17.565 9.81397 19.881 8.46998 19.989 8.40998C18.669 6.47798 16.641 6.26198 15.933 6.21398C14.085 6.06998 12.537 7.22198 11.673 7.22198ZM14.793 4.38998C15.573 3.45398 16.089 2.14598 15.945 0.849976C14.829 0.897976 13.485 1.59398 12.681 2.52998C11.961 3.35798 11.337 4.68998 11.505 5.96198C12.741 6.05798 14.013 5.32598 14.793 4.38998Z"
                fill="#ACACAC"
              />
            </svg>
          </Socials>

          <Socials to="/">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.464 8.59594C10.729 8.59594 10.944 10.7019 10.944 13.2999L10.943 13.6509C10.924 16.0849 10.717 18.0039 10.464 18.0039C10.208 18.0039 9.999 16.0389 9.984 13.5639V13.2119C9.989 10.6549 10.202 8.59594 10.464 8.59594ZM8.8 9.55594C9.059 9.55594 9.27 11.3559 9.28 13.6099V13.9499C9.27 16.2039 9.059 18.0039 8.8 18.0039C8.545 18.0039 8.336 16.2489 8.32 14.0339V13.6939L8.322 13.3539C8.347 11.2209 8.552 9.55594 8.8 9.55594ZM7.136 9.55594C7.391 9.55594 7.6 11.3109 7.616 13.5259V13.8659L7.614 14.2059C7.589 16.3389 7.384 18.0039 7.136 18.0039C6.877 18.0039 6.666 16.2039 6.656 13.9499V13.6099C6.666 11.3559 6.877 9.55594 7.136 9.55594ZM5.472 10.1319C5.737 10.1319 5.952 11.8939 5.952 14.0679L5.95 14.4029C5.93 16.4199 5.723 18.0039 5.472 18.0039C5.21 18.0039 4.998 16.2869 4.992 14.1519V13.9839C4.998 11.8489 5.21 10.1319 5.472 10.1319ZM3.808 11.8599C4.073 11.8599 4.288 13.2349 4.288 14.9319V15.0899C4.275 16.7129 4.065 18.0039 3.808 18.0039C3.543 18.0039 3.328 16.6289 3.328 14.9319V14.7739C3.341 13.1509 3.551 11.8599 3.808 11.8599ZM14.592 7.05994C17.172 7.05994 19.312 8.94594 19.71 11.4149C20.1694 11.2831 20.6517 11.2508 21.1247 11.3202C21.5976 11.3896 22.0503 11.5591 22.4524 11.8174C22.8546 12.0757 23.1971 12.4168 23.4569 12.818C23.7168 13.2192 23.888 13.6712 23.9593 14.1439C24.0305 14.6165 24.0001 15.0989 23.87 15.5589C23.7399 16.0188 23.5132 16.4458 23.205 16.8111C22.8968 17.1765 22.5142 17.4718 22.0827 17.6775C21.6513 17.8832 21.1809 17.9945 20.703 18.0039H12.48C12.2763 18.0039 12.081 17.923 11.9369 17.779C11.7929 17.635 11.712 17.4396 11.712 17.2359V7.93294C12.5639 7.36224 13.5666 7.05832 14.592 7.05994ZM2.144 11.6679C2.409 11.6679 2.624 13.0009 2.624 14.6439V14.7999C2.61 16.3699 2.401 17.6199 2.144 17.6199C1.884 17.6199 1.671 16.3299 1.664 14.7219V14.6439C1.664 13.0009 1.879 11.6679 2.144 11.6679ZM0.48 12.6279C0.745 12.6279 0.96 13.5739 0.96 14.7399V14.8709C0.944 15.9759 0.735 16.8519 0.48 16.8519C0.215 16.8519 0 15.9059 0 14.7399V14.6089C0.016 13.5039 0.225 12.6279 0.48 12.6279Z"
                fill="#ACACAC"
              />
            </svg>
          </Socials>

          <Socials to="/">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.244 4C12.778 4.003 14.114 4.016 15.534 4.073L16.038 4.095C17.467 4.162 18.895 4.278 19.604 4.475C20.549 4.741 21.291 5.515 21.542 6.497C21.942 8.057 21.992 11.099 21.998 11.836L21.999 11.988V12.162C21.992 12.899 21.942 15.942 21.542 17.501C21.288 18.486 20.545 19.261 19.604 19.523C18.895 19.72 17.467 19.836 16.038 19.903L15.534 19.926C14.114 19.982 12.778 19.996 12.244 19.998L12.009 19.999H11.754C10.624 19.992 5.898 19.941 4.394 19.523C3.45 19.257 2.707 18.483 2.456 17.501C2.056 15.941 2.006 12.899 2 12.162V11.836C2.006 11.099 2.056 8.056 2.456 6.497C2.71 5.512 3.453 4.737 4.395 4.476C5.898 4.057 10.625 4.006 11.755 4H12.244ZM9.999 8.5V15.5L15.999 12L9.999 8.5Z"
                fill="#ACACAC"
              />
            </svg>
          </Socials>
        </SocialsGroup>

        <Copyright>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.216 7.071C11.7945 6.36704 11.1537 5.82077 10.3919 5.51599C9.63015 5.21121 8.78941 5.16474 7.99867 5.38371C7.20793 5.60267 6.51086 6.07499 6.01435 6.72822C5.51785 7.38144 5.24934 8.1795 5.25 9C5.24934 9.8205 5.51785 10.6186 6.01435 11.2718C6.51086 11.925 7.20793 12.3973 7.99867 12.6163C8.78941 12.8353 9.63015 12.7888 10.3919 12.484C11.1537 12.1792 11.7945 11.633 12.216 10.929L10.9298 10.158C10.7273 10.4952 10.44 10.7735 10.0965 10.9651C9.75305 11.1566 9.36533 11.2548 8.97206 11.2498C8.57878 11.2448 8.19368 11.1368 7.85516 10.9366C7.51663 10.7364 7.23651 10.4509 7.04272 10.1086C6.84892 9.7664 6.74822 9.37933 6.75067 8.98603C6.75311 8.59273 6.8586 8.20694 7.05663 7.86712C7.25467 7.52731 7.53831 7.24534 7.8793 7.04932C8.22028 6.85331 8.60669 6.75011 9 6.75C9.81975 6.75 10.5375 7.188 10.9298 7.84275L12.216 7.071ZM16.5 9C16.5 4.86 13.14 1.5 9 1.5C4.86 1.5 1.5 4.86 1.5 9C1.5 13.14 4.86 16.5 9 16.5C13.14 16.5 16.5 13.14 16.5 9ZM3 9C3 5.685 5.685 3 9 3C12.315 3 15 5.685 15 9C15 12.315 12.315 15 9 15C5.685 15 3 12.315 3 9Z"
              fill="#969696"
            />
          </svg>

          <p>Jakore 2024</p>
        </Copyright>
      </FooterSection>
    </>
  );
};

export default Footer;