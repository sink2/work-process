import { createMuiTheme } from '@material-ui/core/styles';

let currentTheme = undefined;

function setCurrentTheme(theme) {
    currentTheme = theme;
}

function getCurrentTheme() {

}

export { setCurrentTheme, getCurrentTheme }