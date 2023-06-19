import Item from './item';

export default function ListItem() {
    return (
        <div className="listItem pt-4 pb-4">
            <div className="container px-lg-5">
                <div className="row gx-lg-5">
                    <div className="col-lg-3 col-xxl-4 my-1">
                        <Item />
                    </div>
                    <div className="col-lg-3 col-xxl-4 my-1">
                        <Item />
                    </div>
                    <div className="col-lg-3 col-xxl-4 my-1">
                        <Item />
                    </div>
                    <div className="col-lg-3 col-xxl-4 my-1">
                        <Item />
                    </div>
                </div>
            </div>
        </div>
    );
}
