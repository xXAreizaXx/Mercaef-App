export default function Ruta(props) {
    return (
        <svg
            height={21}
            viewBox="0 0 21 21"
            width={21}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g
                fill="none"
                fillRule="evenodd"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                transform="translate(2 2)"
            >
                <circle cx={8.5} cy={8.5} r={8} />
                <path d="M10.5 9.5l-4 3v-5l4-3z" />
            </g>
        </svg>
    )
}