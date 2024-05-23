import { Routes, Route} from 'react-router-dom';

import { Feed } from '../Pages/Feed/Feed'
import { EditProfile } from '../Pages/EditProfile/EditProfile'
import { Profile } from '../Pages/Profile/Profile'

export function AppRoutes() {
    return (
        <Routes>
           <Route path="/feed" element={<Feed />} />
           <Route path="/editprofile" element={<EditProfile />} />
           <Route path="/profile" element={<Profile />} />
        </Routes>
    )
}