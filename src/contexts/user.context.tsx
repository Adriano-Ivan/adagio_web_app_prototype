import React, { createContext, useEffect,useState } from "react";


export const UserContext = createContext(
    {
        currentUser:true,
        handleCurrentUserChanged: () => {}
    }
);

export const UserProvider = ({children}:any) => {
    const [currentUser,setCurrentUser] = useState(false);

    const handleCurrentUserChanged = () => {
        setCurrentUser(!currentUser);
    }

    const value: any= {currentUser,handleCurrentUserChanged};

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

