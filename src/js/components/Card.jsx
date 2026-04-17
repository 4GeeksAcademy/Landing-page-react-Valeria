const Card = () => {
    return (
        <div className="card">
            <img src="https://images.unsplash.com/photo-1633933037611-f26e54366832?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGljZSUyMGNyZWFtfGVufDB8fDB8fHww" alt="polos helados y frutas"/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                    <a href="#" className="btn btn-primary">Find Out More!</a>
                </div>
        </div>
    );
};

export default Card;