import Navbar from './navbar';

const name = 'AU Digital Academic Remuneration System';
/*children = anything in the Component {...pageProps} in _app.js*/

const Layout = ({ children }) => {
    return (
        <div className="content">
            <Navbar />
            { children }
        </div>
    );
}

export default Layout;