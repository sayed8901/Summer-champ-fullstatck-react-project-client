import { useEffect } from "react"

const useTitle = title => {
    useEffect( () => {
        document.title = `SummerChamp | ${title}`;
    }, [title])
}

export default useTitle;