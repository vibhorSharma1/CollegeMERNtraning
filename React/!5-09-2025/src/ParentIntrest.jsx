import React from 'react'
import CHildInterest from './CHildIntrest'
import ThemeToggle from './ThemeToggle'

function ParentIntrest() {
    const [Si, setSi] = React.useState(0)
    const [Ci, setCi] = React.useState(0)
    function calculateSimpleIntrest(p, r, t) {
        setSi(((+p) * (+r) * (+t)) / 100)
    }
    function calculateCompoundIntrest(p, r, t) {
        setCi((+p) * (Math.pow((1 + (+r) / 100), (+t))) - (+p))
    }
    return (
        <>
            <div className="bg-[var(--color-bg-base)] text-[var(--color-text-base)] min-h-screen">
                <ThemeToggle />
                <CHildInterest principle="10000" rate="5" time="5" siMethod={calculateSimpleIntrest} ciMethod={calculateCompoundIntrest}>

            </CHildInterest>
            <div>Simple Intrest is {Si}</div>
            <div>Compound Intrest is {Ci}</div>
            </div>

            
        </>
    )
}

export default ParentIntrest