import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl,author,date,source } = this.props;
        return (
            <div className='my-3'>
                <div className="card">
                    <div style={{
                        display:'flex',
                        justifyContent:'flex-end',
                        position:'absolute',
                        right:0
                    }}>
                    <span className='badge rounded-pill bg-danger' style={{left:'90%', zIndex:1}}>{source}</span>
                    </div>
                    <img src={imageUrl?imageUrl:"https://static.toiimg.com/thumb/msid-108594260,width-1070,height-580,imgsize-610247,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title.length < 45 ? title : title + "..."}</h5>
                        <p className="card-text">{description.length < 88 ? description : description + "..."}</p>
                        <p className='card-text'><small className='text-muted'>By {author} on {new Date(date).toGMTString()} </small></p>
                        <a href={newsUrl} target='_blank' rel='noreferrer' className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
