import sprite from './img/icons-im-1-bigger.png';

const drawerWidth = 240;

const AppStyle = theme => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        minWidth: 0,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: 0,
    },
    drawerLink: {
        textDecoration: 'none',
    },
    drawerPaper: {
        position: 'absolute',
        width: drawerWidth,
    },
    map: {
        marginLeft: -24,
        marginTop: -24,
        height: Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - 64,
        width: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
    },
    nested: {
        paddingLeft: theme.spacing.unit * 4,
    },
    pokemon: {
        backgroundImage: `url(${sprite})`,
        backgroundRepeat: 'no-repeat',
        height: 80,
        width: 80,
        zoom: 0.5,
    },
    root: {
        flexGrow: 1,
        height: Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
    },
    toolbar: theme.mixins.toolbar,
});

export default AppStyle;
