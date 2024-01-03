export const StaticMapSimple = ({
  position,
  className = 'w-full shadow-xl aspect-square',
}: {
  position: { lng?: number; lat?: number }
  className?: string
}) => {
  if (!position.lat || !position.lng) {
    return <div className="w-full bg-gray-100 shadow-xl aspect-square" />
  }

  const url = `https://api.mapbox.com/styles/v1/iamkarthick/clk4em1h900i201pf3jvuei21/static/pin-s(${position.lng},${position.lat})/${position.lng},${position.lat},9,0/400x400?access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`

  return <img src={url} alt="Map" className={` ${className}`} />
}
