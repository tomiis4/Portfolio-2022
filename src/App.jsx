import  { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Export from "./pages/mainExport"

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Export />} />
            </Routes>
        </Router>
    )
}

export default App