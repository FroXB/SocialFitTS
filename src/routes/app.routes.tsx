import { Routes, Route} from 'react-router-dom';

import { Feed } from '../Pages/Feed/Feed'

export function AppRoutes() {
    return (
        <Routes>
           <Route path="/feed" element={<Feed />} />
        </Routes>
    )
}