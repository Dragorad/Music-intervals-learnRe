import React from 'react'

export const AppContext =  React.createContext(defaultContextValue)
export const defaultContextValue = {
    saveResultEnabled: false
}