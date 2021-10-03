import React from 'react';
import classes from './Pagination.module.css';
import Aux from '../../hoc/Auxiliary';

const Pagination = (props) => {

    const showPagination = (num) => {
        const pagesNum = Math.ceil(props.itemLength / props.itemsPerPage);
        const leftButton = num === 1 ? null : (
            <div onClick={() => props.gotoPage(num - 1)}>
                <i className="fas fa-arrow-circle-left mr-1">  </i>
                Page {num - 1}
            </div>
        )
        const rightButton = num === pagesNum ? null : (
            <div onClick={() => props.gotoPage(num + 1)}>
                Page {num + 1}
                <i className="fas fa-arrow-circle-right ml-1">  </i>
            </div>
        )
        return (
            <Aux>
                {leftButton}
                {rightButton}
            </Aux>
        )
    }


    return (
        <div className={classes.Pagination.concat(' my-2 ')}>
            {showPagination(props.currentPage)}
        </div>
    )
}

export default Pagination