import React from 'react';

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">             
                    <div className="col-4 col-sm-2 offset-1">
                        <ul>
                            <li className="fa fa-home fa-lg"><a href="#"> Home</a>{' '}</li>
                            <li className="fa fa-list fa-lg"><a href="#">Menu</a>{' '}</li>
                            <li className="fa fa-pencil fa-lg"><a href="#">Order Now</a>{' '}</li>
                        </ul>
                    </div>
                    <div className="col-6 col-sm-3 text-center">
                        <h5>Social</h5>
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                    </div>
                    <div className="col-sm-4 text-center">
                        <a role="button" className="btn btn-link" href="tel:+626-***-****"><i className="fa fa-phone" /> 626-***-****</a><br />
                        <a role="button" className="btn btn-link" href="mailto:notreal@notreal.co"><i className="fa fa-envelope" /> TheCookingNurse@gmail.com</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;