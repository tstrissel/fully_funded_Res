import dollarSign from '../../public/FFR-assets/Icons/Nikola/Money-Icon-Euro.svg'
import locationSign from '../../public/FFR-assets/Icons/Nikola/Location-Icon.svg'
import profileIndividual from '../../public/FFR-assets/Icons/Nikola/Individual-Icon.svg'
import profileCollective from '../../public/FFR-assets/Icons/Nikola/Group-Icon.svg'
import Image from 'next/image'

export {
  Clock,
  Search,
  ProfileIndividual,
  ProfileCollective,
  ArtField,
  Checkmark,
  ArrowRight,
  DollarSign,
  LocationPin,
  ChevronDown,
  ArrowDown,
}

// Paste here and add to export above

const ArrowDown = (props) => (
  <svg
    width={14}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.167.333h1.667v10l4.583-4.583L13.6 6.933l-6.6 6.6-6.6-6.6L1.584 5.75l4.583 4.583v-10Z"
      fill="#000"
    />
  </svg>
)

function ChevronDown() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="8"
      fill="none"
      viewBox="0 0 14 8"
    >
      <path
        fill="#000"
        d="M.785.59a.89.89 0 011.26 0l4.714 4.713L11.473.59a.89.89 0 111.26 1.26L7.387 7.192a.89.89 0 01-1.259 0L.785 1.85a.89.89 0 010-1.26z"
      ></path>
    </svg>
  )
}

function ArrowRight(props) {
  return (
    <svg
      width={18}
      height={15}
      viewBox="0 0 18 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.893.314a1.072 1.072 0 011.517 0l6.434 6.434a1.072 1.072 0 010 1.517l-6.434 6.434a1.073 1.073 0 01-1.517-1.516l4.604-4.604H1.072a1.072 1.072 0 110-2.145h12.425L8.893 1.83a1.072 1.072 0 010-1.516z"
        fill="#000"
      />
    </svg>
  )
}

function Clock(props) {
  return (
    <svg
      width={27}
      height={27}
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.454 3.151a10.303 10.303 0 100 20.606 10.303 10.303 0 000-20.606zM.575 13.454C.575 6.342 6.341.576 13.455.576c7.112 0 12.878 5.766 12.878 12.878 0 7.113-5.766 12.88-12.879 12.88-7.113 0-12.879-5.767-12.879-12.88zm12.88-7.727a1.288 1.288 0 011.287 1.288v5.906l3.486 3.487a1.288 1.288 0 01-1.82 1.82l-3.864-3.863a1.288 1.288 0 01-.378-.91v-6.44a1.288 1.288 0 011.288-1.288z"
        fill="#000"
      />
    </svg>
  )
}

function DollarSign(props) {
  return (
    <Image src={dollarSign} width={34} height={35} />
  )
}

function LocationPin(props) {
  return (
    <Image src={locationSign} width={34} height={35} />
  )
}

function ProfileIndividual(props) {
  return (
    <Image src={profileIndividual} width={34} height={35} />

  )
}

function ProfileCollective(props) {
  return (
    <Image src={profileCollective} width={34} height={35} />
  )
}

function ArtField(props) {
  return (
    <svg
      width={26}
      height={26}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13 8.66a4.25 4.25 0 100 8.499 4.25 4.25 0 000-8.5zm9.917 14.166H17.25v2.833h5.667a2.833 2.833 0 002.833-2.833v-5.667h-2.833v5.667zm0-22.667H17.25v2.833h5.667V8.66h2.833V2.992A2.833 2.833 0 0022.917.16zM3.083 2.992H8.75V.16H3.083A2.833 2.833 0 00.25 2.992V8.66h2.833V2.992zm0 14.167H.25v5.667a2.833 2.833 0 002.833 2.833H8.75v-2.833H3.083v-5.667z"
        fill="#000"
      />
    </svg>
  )
}

function Checkmark() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="10"
      fill="#000"
      viewBox="0 0 13 10"
    >
      <path d="M4.625 9.762L.744 5.882l1.769-1.77 2.112 2.12L10.8.05l1.769 1.769-7.944 7.943z"></path>
    </svg>
  )
}

const Search = (props) => (
  <svg
    width={33}
    height={33}
    xmlns="http://www.w3.org/2000/svg"
    fill="#000"
    {...props}
  >
    <path d="M14.247 5.377a8.016 8.016 0 1 0 0 16.033 8.016 8.016 0 0 0 0-16.033ZM3.56 13.394a10.69 10.69 0 1 1 19.132 6.555l7.198 7.197a1.336 1.336 0 0 1-1.89 1.89l-7.197-7.198A10.689 10.689 0 0 1 3.56 13.394Z" />
  </svg>
)
