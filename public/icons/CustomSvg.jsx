

const CustomSvg = ({color}) => {
  return (
    <svg width="35" height="40" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.5 20H32" stroke={color} strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"/>
        <path d="M23.2172 2L34 19.8206L23 38" stroke={color} strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"/>
    </svg>
  )
}

export default CustomSvg