import React, { Component, Fragment } from "react";

import PreLoader from "../Preloader";
import "./HomePage.scss";

const ApiFields = [
  "API",
  "Auth",
  "Category",
  "Cors",
  "Description",
  "HTTPS",
  "Link"
];

class HomePage extends Component {
<<<<<<< HEAD
=======
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }
>>>>>>> c15402091b58b88a0e922a1779c96bc271c383d7
  componentDidMount() {
    const { loadFacebookData, preLoader } = this.props;
    preLoader();
    loadFacebookData();
  }

  render() {
    return (
      <div>
        <div className="home-page">
          {!this.props.isLoading ? (
            <div className="api">
              {ApiFields.map(field => (
                <Fragment key={field}>
                  <p>{field}</p>
                  <p>{this.props.info[field]}</p>
                </Fragment>
              ))}
            </div>
          ) : (
            <PreLoader />
          )}
        </div>
      </div>
    );
  }
}

export default HomePage;
