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
                id: 1,
                linkUrl: 'return'
            },
            {
                title: 'RENT A CAR',
                imageUrl: 'http://pngimg.com/uploads/audi/audi_PNG1742.png',
                size: 'large',
                id: 2,
                linkUrl: 'rent'
            }
        ]
    }
}
render(){
    return(
        <div className  = 'directory-menu'>
                {
                    this.state.sections.map(({title, imageUrl, id, size, linkUrl}) => (
                        <MenuItem key ={id}  title = {title} imageUrl = {imageUrl} size = {size} linkUrl = {linkUrl}/>
                    ))}


            </div>
    );
}

}
export default Directory;