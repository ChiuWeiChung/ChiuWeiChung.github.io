import classes from './Inset.module.css';

const Inset = () => {
    return (
        <div className={classes.Inset}>
            <div className={classes.Item}>
                <i className="fab fa-github"></i>
                <a href="https://github.com/ChiuWeiChung" target="_blank" rel="noopener noreferrer"> Rick Chiu</a>
            </div>
            <div className={classes.Item}>
                <i className="fas fa-map-marker-alt"></i>
                <p> Taiwan, Taipei</p>
            </div>
            <div className={classes.Item}>
                <p className={classes.Description}>唯有努力才能毫不費力，即使每天努力一點點... 在這裡紀錄學習筆記和開發心得 </p>
            </div>
        </div>
    )
}

export default Inset