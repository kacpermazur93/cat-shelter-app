import React from 'react';


class CatCategoryRow extends React.Component {

    render() {
        return <tr key={this.props.category} className='category-row react-cat-category-row'>
            <th colSpan='2' style={{textAlign: 'center'}}>
                <strong>{this.props.category}</strong>
            </th>
        </tr>;
    }
}



export default CatCategoryRow;