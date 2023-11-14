import { useEffect, useState } from "react"

const useLocalStorage = (name,initialValue) => {
    const [item, setItem] = useState(initialValue)
    const [error, setError] = useState(false)

    useEffect(() => {
        try{
            const localStorageItem = localStorage.getItem(name)

            let paseItem;
            if(!localStorageItem){
                localStorage.setItem(name, JSON.stringify(initialValue))
                paseItem = []
            }else{
                paseItem = JSON.parse(localStorageItem)
                setItem(paseItem)
            }
        }catch{
            setError(true)
        }
    },[])

    const saveItem = (newItem) => {
        localStorage.setItem(name, JSON.stringify(newItem))
        setItem(newItem)
    }

    return {
        item,
        saveItem,
        error
    }
}

export default useLocalStorage