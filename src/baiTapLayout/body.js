import ListItem from './list-item';
import Banner from './banner';

export default function Body() {
    return (
        <div className='body border border-danger'>
            <Banner />
            <ListItem />
        </div>
    );
}

