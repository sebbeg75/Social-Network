import React from 'react';



const Footer = () => {
    return (
        <footer>
            <div className="contenedor">
                <div className="grid3">
                    <div>
                        <p className="datos">Phone</p>
                        <p className="info">(123) 118 9999 - (123) 118 9999</p>
                    </div>
                    <div>
                        <p className="datos">Adress</p>
                        <p className="info">72 Kangnam, 45 Opal Point Suite 391</p>
                    </div>
                    <div>
                        <p className="datos">E-mail</p>
                        <p className="info">contactcompany@Gutim.com</p>
                    </div>
                </div>
                <div className="flex">
                    <div>Copyright ©2020 All rights reserved</div>
                </div>
            </div>
        </footer>
    );
};


export default Footer;