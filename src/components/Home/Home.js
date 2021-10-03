import React from 'react';
import axios from '../../axios';
import classes from './Home.module.css';
import { Link } from 'react-router-dom';
import Pagination from '../Pagination/Pagination';
import Loader from '../UI/Loader/Loader';
import Footer from '../Footer/Footer';

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
        if (!currentHash && lastHash) this.setState({ currentPage: 1 });
    }

    componentDidMount() {
        let hash = parseFloat(this.props.location.hash.replace('#page', '').trim());
        if (!hash || this.state.currentPage === hash) {
            this.fetchData_new()
        } else if (hash !== this.state.currentPage) {
            this.fetchData_new()
            this.setState({ currentPage: hash })
        }
    }

    fetchData_new = () => {
        if (!this.showSpinner) this.setState({ showSpinner: true })
        axios.get('noteslist.json').then(res => {
            const arr = []
            for (let key in res.data) {
                arr.push({ ...res.data[key], id: key })
            }
            arr.sort((a, b) => b.date - a.date);
            this.setState({ itemLength: arr.length, listItem: arr, showSpinner: false })
        }).catch(err => {
            this.setState({ error: err.toString(), showSpinner: false })
        })
    }

    gotoPage = (num) => {
        this.props.history.push(`/recently#page${num}`);
        this.setState({ currentPage: num })
    }

    setPage = (num) => {
        this.setState({ currentPage: num })
    }

    shorten(str) {
        if (str.length > 50) {
            return str.slice(0, 120) + '....'
        }
    }

    pagination(data, itemsPerPage, currentPage) {
        return data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
    }

    renderPage() {
        return this.pagination(this.state.listItem, this.state.itemsPerPage, this.state.currentPage);
    }

    render() {

        let content = <Loader />;
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
            <div className={classes.Home}>
                <h1>近期發布</h1>
                {content}
                {pagination}
                <Footer/>
            </div>
        )
    }
}

export default Home