import HomePage from '@material-ui/icons/dashboard';


const commonMenu = [
    {
        label: 'Home Page',
        url: '/homePage',
        icon: HomePage,
    }
];

function getUserMenu(userType) {
    switch(userType) {
        
    }
}

export default {
    getUserMenu: getUserMenu
}