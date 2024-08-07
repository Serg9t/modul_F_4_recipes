import { Link } from 'react-router-dom';

function NotFoundPage() {
    return (
        <div className="missing">
            <h1>NOT FOUND PAGE!!!</h1>
            <p>This page doesn't exist. Go <Link to="/">home</Link></p>
        </div>
    )
}

export default NotFoundPage;