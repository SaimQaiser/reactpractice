import React, { Component } from 'react';

export class Newsitem extends Component {
  render() {
    const { title, description, imageUrl, newsUrl } = this.props;

    return (
      <div className="my-3">
        <div className="card" style={{ width: '18rem' }}>
          <img
            src={imageUrl ? imageUrl : 'https://via.placeholder.com/150'}
            className="card-img-top"
            alt="News"
          />
          <div className="card-body">
            <h5 className="card-title">{title ? title : 'No Title Available'}</h5>
            <p className="card-text">
              {description ? description : 'No Description Available'}
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;

