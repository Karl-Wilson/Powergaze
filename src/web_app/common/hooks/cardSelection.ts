import { SyntheticEvent, useState } from "react"

const useCardSelection = (dataMain: {}, options: string[]) =>{
    let val = options
    let [selection, setSelection] = useState<string>(val[0])
    let [data, setData] = useState<any[]>([])

      const change = (e: SyntheticEvent) =>{
        let elem = e.target as HTMLSelectElement
        setSelection(elem.value)
        setData(dataMain[elem.value as keyof typeof dataMain])
      }

      return {change, data, selection}
}

export default useCardSelection