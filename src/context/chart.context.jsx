import { createContext, useState } from "react";
import CHART from '../chart-data.json'

export const DataContext = createContext({
    data:[],
});

export const DataProvider = ({children}) => {
    const [data, setData] = useState(CHART)
    const value = {data}
    return(
        <DataContext.Provider value={value}>{children}</DataContext.Provider>
    )
}