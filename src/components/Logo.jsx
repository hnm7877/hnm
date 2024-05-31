import clsx from "clsx"

export function Logo({ className }) {
  return (
    <>
      <div className={clsx("whitespace-nowrap font-display", className)}>
        <span>Hauts </span>
        <span className="text-red-600">Numériques </span>
        <span>et Médias</span>
      </div>
    </>
  )
}
