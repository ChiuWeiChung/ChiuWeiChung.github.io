import React from 'react';
import classes from './Pagination.module.css';
import Aux from '../../hoc/Auxiliary';

const Pagination = (props) => {
    const showPagination = (num) => {
        const pagesNum = Math.ceil(props.itemLength / props.numPerPage);
        const leftButton = num === 1 ? null : (
            <div onClick={() => props.gotoPage(num - 1)}>
                <i style={{margin:'5px'}} className="fas fa-arrow-circle-left">  </i>
                Page {num - 1}
            </div>
        )
        const rightButton = num === pagesNum ? null : (
            <div onClick={() => props.gotoPage(num + 1)}>
                Page {num + 1}
                <i style={{margin:'5px'}} className="fas fa-arrow-circle-right">  </i>
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