import React, {Component} from 'react';
import classNames from 'classnames'
import PropTypes from 'prop-types';

import checkUncomplete from "../img/check-uncomplete.png";
import checkComplete from "../img/check-complete.png";

class TodoItem extends Component {

    render() {
        const {item, onClick, i} = this.props;
        let className = classNames("pending", {done: item.isComplete})
        let url = checkUncomplete;
        if (item.isComplete) {
            url = checkComplete
        }

        return (
            <div id={i} className={className}>
                <img onClick={onClick} src={url} width={32} />
                <p>{item.title}</p>
            </div>
        );
    }
}

TodoItem.propTypes = {
    item: PropTypes.shape({
        title: PropTypes.string,
        isComplete: PropTypes.bool
    }),
    i: PropTypes.number,
    onClick: PropTypes.func

}


export default TodoItem;