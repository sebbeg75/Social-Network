import React from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Pic21 from './Pic21.jpg';

const Home = (props) => {
  const image = `http://localhost:8000/images/users/${props.user?.image}`;    
  return (

    <div className="container">
      <div className="row mt-4">
        <div className="col-3">
          <div className="card text-center">
            <Link to="../Profile"> <img
              src="/Images/pic4.jpeg"
              style={{
                    width: '70px',
                    marginRight: 'auto',
                    marginLeft: 'auto',
                    marginTop: '10px',
                    borderRadius: '35px',
              }}
            />
            </Link>
            <h5 className="mt-3">Welcome, {props.user?.name}!</h5>
            <a href="#">sebbe@gmail.com</a>
            <a className="mb-3" href="#">Settings</a>
          </div>
        </div>

        <div className="col-6">
          <div>
            <div className="card">
              <div className="row">
                <div className="col-2 p-2">
                  <Link to="../Profile"><img
                    src="/Images/pic4.jpeg"
                    style={{
                          width: '70px',
                          marginRight: 'auto',
                          marginLeft: 'auto',
                          marginTop: '10px',
                          borderRadius: '35px'                 
                    }}
                  />
                  </Link>
                </div>
                <div className="col-10 mt-3">
                  <h4>{props.user?.name}</h4>
                </div>
              </div>
              <img src={Pic21} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, velit. Veritatis tempore debitis deleniti labore consectetur animi facilis distinctio, esse, necessitatibus provident qui quae quis molestias autem harum ipsa corrupti.
                </p>
                <input
              type="text"
              className="form-control mb-2"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Share something"
            />
                <a href="#" className="btn btn-primary"><FontAwesomeIcon icon={faThumbsUp} /></a>
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

const mapStateToProps = (state) => ({user: state?.user})
export default connect(mapStateToProps)(Home);