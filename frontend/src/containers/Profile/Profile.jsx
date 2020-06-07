import React from 'react';

const Profile = () => {
    return (
        <div className="container">
            <div class="row">
                <div class="col-8">
                    <div>
                        <div className="card">
                            <div className="row">
                                <div className="col-2 p-2">
                                    <img
                                        src="http://www.pngmart.com/files/4/Circle-PNG-File.png"
                                        style={{width: '100%'}}
                                    />
                                </div>
                                <div className="col-10 mt-3">
                                    <h3>Sebastian Garatti</h3>
                                    <h4>Un Genio Inentendido</h4>
                                </div>
                            </div>
                                <img src="https://images-na.ssl-images-amazon.com/images/I/71jlrpPDD9L._AC_SL1500_.jpg" class="card-img-top" alt="..." />
                            <div className="card-body">
                                    <p className="card-text">
                                    Don’t tread on me began on what’s known as the Gadsden flag, which features a rattlesnake coiled above the expression on a yellow background. The flag was first flown on a warship in 1775 as a battle cry for American independence from British rule. It’s credited to Christopher Gadsden, a soldier and politician from South Carolina.
                                    </p>
                                    <a href="#" className="btn btn-primary">Like</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                </div>
            </div>
        </div>
    );
};

export default Profile;