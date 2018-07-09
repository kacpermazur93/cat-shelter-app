import React from 'react';

import CatCategoryRow from './category-row.jsx';
import CatRow from './cat-row.jsx';

class CatTable extends React.Component {
    constructor(props) {
        super(props);

        this.cats = this.props.kitties.sort((a, b) => {
            return a.category < b.category;
        });
    }

    catsRender() {

        let cats = [...this.cats],
            rows = [],
            category = '';


        //Likes kids checbox
        if (this.props.likesKids) {
            cats = cats.filter(cat => {
                return cat.likesKids;
            });
        }


        //Name filter
        if (this.props.filterText.length > 0) {
            cats = cats.filter(cat => {
                const name = cat.name.toLowerCase(),
                    nameSearch = this.props.filterText.toLowerCase();
                return name.includes(nameSearch);
            })
        }

        //Add Cat and Category Row
        cats.forEach(cat => {
           if(cat.category !== category) {
               rows.push(<CatCategoryRow key={cat.category} category={cat.category} />);
               category = cat.category;
           }

           rows.push(<CatRow key={cat.name} details={cat}/>);
        });

        return rows;

    }


    render() {

        return <table className='react-cat-table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {this.catsRender()}
            </tbody>
        </table>
    }
}


export default CatTable;
