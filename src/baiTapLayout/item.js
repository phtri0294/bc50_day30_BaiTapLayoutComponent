export default function Item() {
    return (
        <div className="item card bg-light">
            <div className="card-header text-center p-5">500 x 325</div>
            <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i className="bi bi-collection" /></div>
                <h2 className="card-body-title fs-4 fw-bold">Card Title</h2>
                <p className="mb-0">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, quas!</p>
            </div>
            <div className="card-footer text-center p-3">
                <a className="btn btn-primary btn-lg" href="#!">Find Out More!</a>
            </div>
        </div>
    );  
}