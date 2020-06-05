import React from 'react';

const Home = () => {
  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-3">
          <div className="card text-center">
            <img
              src="http://www.pngmart.com/files/4/Circle-PNG-File.png"
              style={{
                width: '70px',
                marginRight: 'auto',
                marginLeft: 'auto',
                marginTop: '10px',
              }}
            />
            <h5 className="mt-3">Welcome, Sebastian!</h5>
            <a href="#">sebbe@gmail.com</a>
            <a className="mb-3" href="#">Settings</a>
          </div>
        </div>

        <div className="col-6">
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
                  <h3>Donald Trump</h3>
                </div>
              </div>
              <img src="https://cdn.vox-cdn.com/thumbor/TzfMRZ6j7C8YvxAwFnQIa9Xszwg=/0x0:6000x4000/1200x800/filters:focal(2520x1520:3480x2480)/cdn.vox-cdn.com/uploads/chorus_image/image/66865091/1227623212.jpg.0.jpg" class="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">
                Sleepy Joe Biden’s 1994 Crime Bill was a total disaster. It was mass incarceration for Black people, many of them innocent. I did Criminal Justice Reform, something Obama & Biden didn’t even try to do - & couldn’t do even if they did try. Biden can never escape his Crime Bill!
                </p>
                <a href="#" className="btn btn-primary">Like</a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-3">
          <div className="card p-3">
            <h6 className="mt-2 mb-2">Search your friends</h6>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Share something"
            />
            <a href="#" className="btn btn-primary mt-2">Search</a>
          </div>
          <div className="card mt-4 p-3">
            <h6 className="mt-2 mb-2">Start a post...</h6>
            <textarea
              rows="3"
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Share something"
            />
            <a href="#" className="btn btn-primary mt-2">Post</a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
