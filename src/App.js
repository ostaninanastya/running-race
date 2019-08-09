import React from 'react'
import AddRunner from './containers/AddRunner'
import RunTable from './components/RunTable'

const App = () => (
    <div className="container">
        <AddRunner/>
        <RunTable/>
    </div>
)

export default App