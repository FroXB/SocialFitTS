import { Routes, Route} from 'react-router-dom';

import { Feed } from '../Pages/Feed/Feed'
import { Profile } from '../Pages/Profile/Profile'

export function AppRoutes() {
    return (
        <Routes>
           <Route path="/feed" element={<Feed />} />
           <Route path="/profile" element={<Profile />} />
        </Routes>
    )
}