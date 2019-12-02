import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';


class Directory extends React.Component{
constructor(){
    super();
    this.state = {
        sections: [
            {
                title: 'RETURN A CAR',
                imageUrl: 'http://pngimg.com/uploads/mercedes/mercedes_PNG80219.png',
                size: 'large',
                id: 1
            },
            {
                title: 'RENT A CAR',
                imageUrl: 'http://pngimg.com/uploads/audi/audi_PNG1742.png',
                size: 'large',
                id: 2
            }
        ]
    }
}
render(){
    return(
        <div className  = 'directory-menu'>
                {
                    this.state.sections.map(({title, imageUrl, id, size}) => (
                        <MenuItem key ={id}  title = {title} imageUrl = {imageUrl} size = {size}/>
                    ))}


            </div>
    );
}

}
export default Directory;