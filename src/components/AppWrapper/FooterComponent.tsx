import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row homeText">
                    <div className="col-12 col-md-3">
                        <h5>Links</h5>
                        <Link to='/home' className="mr-3" style={{ color: 'white' }}>[Home]</Link>
                        <Link to='/projects' className="mr-3" style={{ color: 'white' }}>[Projects]</Link>
                        <Link to='./resume' className="mr-3" style={{ color: 'white' }}>[Resume]</Link>
                    </div>
                    <div className="col-12 col-md-6"></div>
                    <div className="col-12 col-md-3">
                        <div>
                            <h5>Connect with me</h5>
                            <a className="btn btn-social-icon btn-github mr-2" href="http://github.com/cjarquio" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a>
                            <a className="btn btn-social-icon btn-linkedin mr-2" href="https://www.linkedin.com/in/charles-jarquio-116210104/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
                            <a className="btn btn-social-icon" href="mailto:cjarquio@gmail.com" ><i className="fa fa-envelope-o" style={{ background: 'white', color: 'black' }}></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;