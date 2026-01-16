import React from 'react'
import AlertItem from '../dashboard/AlertItem'

const AlertGrid = ({alerts}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {alerts.map(a => (
                <AlertItem key={a.id} alert={a} />
            ))}
        </div> 
    )
}   

export default AlertGrid
