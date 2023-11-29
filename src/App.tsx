import { useState } from "react"
import Actions from "./Actions"
import "./App.css"
import List from "./List"
import { items } from "./items"

type D = {
  left: boolean
  checked: boolean
  value: number
}

export default function App() {
  const initialItems: D[] = items.map((item) => ({ left: true, checked: false, value: item }))
  const [data, setData] = useState<D[]>(initialItems)

  return (
    <div className="app flex">
      <List data={data} setData={setData} side="left" />
      <Actions setItems={setData} />
      <List data={data} setData={setData} side="right" />
    </div>
  )
}
