import { Dispatch, SetStateAction } from "react"

type D = {
  left: boolean
  checked: boolean
  value: number
}
interface Props<D> {
  item: D
  setData: Dispatch<SetStateAction<D[]>>
}

export default function Item({ item, setData }: Props<D>): JSX.Element {
  function handleChange() {
    setData((items: D[]) =>
      items.map((i) => {
        if (i.value === item.value) {
          return { ...i, checked: !item.checked }
        } else {
          return i
        }
      }),
    )
  }

  return (
    <div className="flex">
      <input type="checkbox" className="checker" checked={item.checked} onChange={handleChange} />
      <span>{item.value}</span>
    </div>
  )
}
