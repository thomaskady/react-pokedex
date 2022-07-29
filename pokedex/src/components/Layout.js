import classes from '../components/Layout.module.css';

const Layout = props => {
    return <div className={classes.container}>{props.children}</div>
}

export default Layout;