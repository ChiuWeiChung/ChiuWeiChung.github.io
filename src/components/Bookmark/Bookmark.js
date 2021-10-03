import React from 'react';
import axios from '../../axios';
import classes from './Bookmark.module.css';
import { Link } from 'react-router-dom';
import Pagination from '../Pagination/Pagination';

class Home extends React.Component {

    state = {
        listItem: [],
        showSpinner: true,
        currentPage: 1,
        itemsPerPage: 5,
        error: null
    }

    componentDidUpdate(prevProps) {
        let lastHash = parseFloat(prevProps.location.hash.replace('#page', '').trim());
        let currentHash = parseFloat(this.props.location.hash.replace('#page', '').trim());
        let currentPage = this.props.location.pathname.replace('/', '').trim();
        let lastPage = prevProps.location.pathname.replace('/', '').trim();

        if (currentPage !== lastPage) return this.fetchData_new(currentPage);
        if (!currentHash && lastHash) return this.setState({ currentPage: 1 });
    }

    componentDidMount() {
        let hash = parseFloat(this.props.location.hash.replace('#page', '').trim());
        let pathname = this.props.location.pathname.replace('/', '').trim();
        if (!hash || this.state.currentPage === hash) {
            this.fetchData_new(pathname)
        } else if (hash !== this.state.currentPage) {
            this.fetchData_new(pathname)
            this.setState({ currentPage: hash })
        }
    }

    fetchData_new = (pathname) => {
        if (!this.showSpinner) this.setState({ showSpinner: true })
        axios.get('noteslist.json').then(res => {
            const type = ['javascript', 'projects', 'datastructure_algoritm'];
            let key = type.find(el => el === pathname);
            const arr = [];
            for (let key in res.data) {
                arr.push({ ...res.data[key], id: key })
            }
            const filterArr = arr.filter(el => el.type === key);
            filterArr.sort((a, b) => b.date - a.date);
            this.setState({ itemLength: filterArr.length, listItem: filterArr, showSpinner: false })
        }).catch(err => {
            this.setState({ error: err.toString(), showSpinner: false })
        })
    }

    gotoPage = (num) => {
        let path = this.props.location.pathname;
        this.props.history.push(`${path}#page${num}`);
        this.setState({ currentPage: num })
    }

    shorten(str) {
        if (str.length > 50) return str.slice(0, 120) + '....'
    }

    pagination(data, itemsPerPage, currentPage) {
        return data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
    }

    renderPage() {
        return this.pagination(this.state.listItem, this.state.itemsPerPage, this.state.currentPage);
    }

    render() {
        const type = ['javascript', 'projects', 'datastructure_algoritm'];
        let title = ['JavaScript筆記', '作品集', '資料結構與演算法筆記'];
        let index = type.findIndex(el => el === this.props.location.pathname.replace('/', ''));
        let content = (
            <div className="loader"></div>
        )
        let pagination = null;

        if (!this.state.showSpinner) {
            let listItem = this.renderPage();
            content = listItem.map(el => {
                return (
                    <div className={classes.Listitem} key={el.id}>
                        <Link to={`/javascript/note?sort=${el.url}`}  >{el.title}</Link>
                        <div className="mt-2">{`${el.date.slice(0, 4)}年${el.date.slice(4, 6)}月${el.date.slice(6, 8)}日`}</div>
                        <div>{this.shorten(el.desc)}</div>
                    </div>
                )
            })
            pagination = (
                <Pagination
                    currentPage={this.state.currentPage} itemsPerPage={this.state.itemsPerPage}
                    itemLength={this.state.itemLength} gotoPage={this.gotoPage} />
            )
        }

        if (this.state.error) {
            content = this.state.error;
        }


        return (
            <div>
                <h1 className="sub-title">我的{title[index]}</h1>
                {content}
                {pagination}
            </div>
        )
    }
}

export default Home