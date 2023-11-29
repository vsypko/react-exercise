import { Dispatch, SetStateAction } from "react"

type D = {
  left: boolean
  checked: boolean
  value: number
}

export default function Actions({ setItems }: { setItems: Dispatch<SetStateAction<D[]>> }) {
  function handleMove(side: string) {
    setItems((items: D[]) =>
      items.map((i) => {
        if (i.checked && side === "right" && i.left) {
          return { ...i, left: false, checked: false }
        } else if (i.checked && side === "left" && !i.left) {
          return { ...i, left: true, checked: false }
        } else {
          return i
        }
      }),
    )
  }

  return (
    <div className="actions flex flex-col">
      <button onClick={() => handleMove("right")}>&gt;</button>
      <button onClick={() => handleMove("left")}>&lt;</button>
    </div>
  )
}
