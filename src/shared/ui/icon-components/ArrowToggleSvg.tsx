interface IArrowToggleSvg {
    isToggleOpen: boolean;
}

export const ArrowToggleSvg: React.FC<IArrowToggleSvg> = ({ isToggleOpen }) => {
    return isToggleOpen ? (
        <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M6.71191 16.5353L12.9943 10.2529L19.2766 16.5353"
                stroke="#1A202C"
                stroke-width="2.35588"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    ) : (
        <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M6.71191 10.2529L12.9943 16.5353L19.2766 10.2529"
                stroke="#1A202C"
                stroke-width="2.35588"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
};
