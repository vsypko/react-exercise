import { Dispatch, SetStateAction } from "react"
import Item from "./Item"

type D = {
  left: boolean
  checked: boolean
  value: number
}
interface Props<D> {
  data: D[]
  setData: Dispatch<SetStateAction<D[]>>
  side: string
}
export default function List({ data, setData, side }: Props<D>) {
  return (
    <div className="list flex flex-col">
      {data.map((item: D) => (
        <div key={item.value}>
          {((item.left && side === "left") || (!item.left && side === "right")) && (
            <Item item={item} setData={setData} />
          )}
        </div>
      ))}
    </div>
  )
}
