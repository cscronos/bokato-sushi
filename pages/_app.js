import "../styles/globals.css";
// ESTA ES LA CAPA MASTER
function MyApp({ Component, pageProps }) {
    return (
        <div className="yocreo">
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;
