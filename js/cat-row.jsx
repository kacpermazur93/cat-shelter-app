import React from 'react';


class CatRow extends React.Component {

    render() {
        const {age, name, likesKids} = this.props.details;


        return <tr className='react-cat-row'>
            <td style={{color: likesKids ? '' : 'red'}}>{name}</td>
            <td>{age}</td>
        </tr>;

    }
}

export default CatRow;