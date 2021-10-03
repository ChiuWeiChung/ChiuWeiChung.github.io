import classes from './newSideBar.module.css';

function newSideBar(props) {
    let sideBarStyle = props.showSideBar ? [classes.NewSideBar, classes.ShowSideBar].join(' ') : [classes.NewSideBar];

    const subjectClicker = (e) => {
        const subject = e.target.closest(`.${classes.Subject}`);
        subject.childNodes[1].classList.toggle(classes.Show);
    }
    return (
        <div className={sideBarStyle}>
            <div className={classes.Subject}>
                <div className={classes.Title} onClick={subjectClicker}>
                    <p>JavaScript</p>
                    <i style={{ marginLeft: '1rem' }} className="fas fa-sort-down"></i>
                </div>
                <ul className={classes.List}  >
                    <li>1dafas</li>
                    <li>2asdfasd</li>
                    <li>3asdfasd</li>
                    <li>asdfasfasdfsdf4</li>
                </ul>
            </div>
            <div className={classes.Subject}>
                <div className={classes.Title} onClick={subjectClicker}>
                    <p>TypeScript</p>
                    <i style={{ marginLeft: '1rem' }} className="fas fa-sort-down"></i>
                </div>
                <ul className={classes.List}>
                    <li>1dafas</li>
                    <li>2asdfasd</li>
                    <li>3asdfasd</li>
                    <li>asdfasfasdfsdf4</li>
                </ul>
            </div>
            <div className={classes.Subject}>
                <div className={classes.Title} onClick={subjectClicker}>
                    <p>資料結構與演算法</p>
                    <i style={{ marginLeft: '1rem' }} className="fas fa-sort-down"></i>
                </div>
                <ul className={classes.List}>
                    <li>以第一原理計算探討鈦酸鋇摻雜鑭</li>
                    <li>2asdfasd</li>
                    <li>3asdfasd</li>
                    <li>asdfasfasdfsdf4</li>
                </ul>
            </div>
            <div className={classes.Subject}>
                <div className={classes.Title} onClick={subjectClicker}>
                    <p>其他</p>
                    <i style={{ marginLeft: '1rem' }} className="fas fa-sort-down"></i>
                </div>
                <ul className={classes.List}>
                    <li>1dafas</li>
                    <li>2asdfasd</li>
                    <li>3asdfasd</li>
                    <li>asdfasfasdfsdf4</li>
                </ul>
            </div>
            <div className={classes.Subject}>
                <div className={classes.Title} onClick={subjectClicker}>
                    <p>Git and Github</p>
                    <i style={{ marginLeft: '1rem' }} className="fas fa-sort-down"></i>
                </div>
                <ul className={classes.List}>
                    <li>1dafas</li>
                    <li>2asdfasd</li>
                    <li>3asdfasd</li>
                    <li>asdfasfasdfsdf4</li>
                </ul>
            </div>
            <div className={classes.Subject}>
                <div className={classes.Title} onClick={subjectClicker}>
                    <p>Portfolio</p>
                    <i style={{ marginLeft: '1rem' }} className="fas fa-sort-down"></i>
                </div>
                <ul className={classes.List}>
                    <li>1dafas</li>
                    <li>2asdfasd</li>
                    <li>3asdfasd</li>
                    <li>asdfasfasdfsdf4</li>
                </ul>
            </div>

        </div>
    )
}

export default newSideBar