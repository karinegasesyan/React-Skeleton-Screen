import React from 'react';
import Shimmer from './Shimmer';
import SkeletonElement from './skeletonElement';

const SkeletonArticle = ({theme}) => {
    const themeClass = theme || 'light';

    return(
        <div className= {`skeleton-wrapper ${themeClass}`}>
            <div className="skeleton-article">
                <SkeletonElement type="title"/>
                <SkeletonElement type="text"/>
                <SkeletonElement type="avatar"/>
                <SkeletonElement type="thumbnail"/>
            </div>
            <Shimmer />
        </div>
    )
}

export default SkeletonArticle;