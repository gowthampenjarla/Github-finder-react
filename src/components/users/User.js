import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Loader from "react-loader-spinner";

export class User extends Component {
  static propTypes = {};
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }

  render() {
    const {
      name,
      company,
      avatar_url,
      location,
      bio,
      blog,
      html_url,
      login,
      followers,
      following,
      public_repos,
      public_gists,
      hireable,
    } = this.props.user;

    const { loading } = this.props.loading;

    if (this.props.loading) {
      return (
        <Loader
          className='spinner'
          type='TailSpin'
          color='#073b4c'
          height={100}
          width={100}
        />
      );
    } else {
      return (
        <div>
          <div className='card card-body mt-5'>
            <div className='row '>
              <div className='col-sm-6 text-center'>
                <img
                  src={avatar_url}
                  alt={login}
                  className='rounded-circle'
                  style={{ width: "250px" }}
                />
                <h2>{name}</h2>
                <p>{location}</p>
              </div>
              <div className='col-sm-6'>
                {bio && (
                  <Fragment>
                    <h3>Bio</h3>
                    <p>{bio}</p>
                  </Fragment>
                )}
                <ul>
                  <li>
                    {login && (
                      <Fragment>
                        <strong>Username: </strong> {login}
                      </Fragment>
                    )}
                  </li>
                  <li>
                    {company && (
                      <Fragment>
                        <strong>Company: </strong> {company}
                      </Fragment>
                    )}
                  </li>
                </ul>
                <a href={html_url} class='my-2 btn' target='_blank'>
                  Visit Github Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default User;
