import calsses from  './Footer.module.css';


function footer() {
    return (
        <div className={calsses.Footer}>
            <h3 className="footer__title">&copy; Designed by <i className="fab fa-github"></i>
                <a href="https://github.com/ChiuWeiChung"> Rick Chiu</a>
            </h3>
        </div>
    )
}

export default footer