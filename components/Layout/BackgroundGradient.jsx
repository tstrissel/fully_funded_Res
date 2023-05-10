import BG from '../../public/FFR-assets/Backgrounds/BACKGROUND.svg'
import styles from './BackgroundGradient.module.css'

export default function BackgroundGradient(props) {
  return (
    <div className={styles.background}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={'100%'}
        height={'100%'}
        {...props}
      >
        <defs>
          <linearGradient
            id="b"
            x1="50%"
            x2="50%"
            y1="0%"
            y2="100%"
            gradientTransform="rotate(-150 .5 .5)"
          >
            <stop offset="0%" stopColor="#9985ff" />
            <stop
              offset="100%"
              stopColor="rgba(255,255,255,0)"
              stopOpacity={0}
            />
          </linearGradient>
          <linearGradient
            id="a"
            x1="50%"
            x2="50%"
            y1="0%"
            y2="100%"
            gradientTransform="rotate(150 .5 .5)"
          >
            <stop stopColor="#F58AE3" />
            <stop
              offset="100%"
              stopColor="rgba(255,255,255,0)"
              stopOpacity={0}
            />
          </linearGradient>
          <filter
            id="c"
            width="140%"
            height="140%"
            x="-20%"
            y="-20%"
            colorInterpolationFilters="sRGB"
            filterUnits="objectBoundingBox"
            primitiveUnits="userSpaceOnUse"
          >
            <feTurbulence
              width="100%"
              height="100%"
              x="0%"
              y="0%"
              baseFrequency={1.25}
              numOctaves={2}
              result="turbulence"
              seed={102}
              stitchTiles="stitch"
              type="fractalNoise"
            />
            <feColorMatrix
              width="100%"
              height="100%"
              x="0%"
              y="0%"
              in="turbulence"
              result="colormatrix"
              type="saturate"
              values={0}
            />
            <feComponentTransfer
              width="100%"
              height="100%"
              x="0%"
              y="0%"
              in="colormatrix"
              result="componentTransfer"
            >
              <feFuncR slope={3} type="linear" />
              <feFuncG slope={3} type="linear" />
              <feFuncB slope={3} type="linear" />
            </feComponentTransfer>
            <feColorMatrix
              width="100%"
              height="100%"
              x="0%"
              y="0%"
              in="componentTransfer"
              result="colormatrix2"
              values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 23 -15"
            />
          </filter>
        </defs>
        <rect width="100%" height="100%" fill="#24c7d2" />
        <rect width="100%" height="100%" fill="url(#a)" />
        <rect width="100%" height="100%" fill="url(#b)" />
        <rect
          width="100%"
          height="100%"
          fill="transparent"
          filter="url(#c)"
          opacity={0.53}
          style={{
            mixBlendMode: 'soft-light',
          }}
        />
      </svg>
    </div>
  )
}
