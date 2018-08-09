import Define from '../services/Define';
import HomePage from '@material-ui/icons/home';
import Settings from '@material-ui/icons/settings';
import Profile from '@material-ui/icons/assignment';
import Management from '@material-ui/icons/build';

const dashboardMenu = {
    label: 'Home Page',
    url: '/homePage',
    icon: HomePage
}

const settingsMenu = {
    label: 'Settings',
    icon: Settings,
    subMenu: [
        {
            label: 'Profile',
            url: '/profile',
            icon: Profile
        }
    ]
}

const managementMenu = {
    label: 'Management',
    url: '/management',
    icon: Management
}

function getUserMenu(userType) {
    switch(userType) {
        case Define.ADMIN_TYPE:
            return [dashboardMenu, settingsMenu, managementMenu];
        default:
            return [dashboardMenu, settingsMenu];
    }
}

export { getUserMenu }