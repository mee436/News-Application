import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date } = this.props;
        return (
            <div className="my-2">
                <div className="card" style={{ width: "18rem" }} >
                    <img src={!imageUrl ? "https://c.ndtvimg.com/2024-02/eokoehn8_nasa_625x300_04_February_24.jpeg?ver-20240117.06" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p class="card-text"><small class="text-body-secondary">By {!author ? "Unknown" : author} on {date}</small></p>
                        <a href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}
