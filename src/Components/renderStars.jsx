export const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
        stars.push(<span key={`full-${i}`} style={{ color: '#f4c150' }}>★</span>);
    }

    if (halfStar) {
        stars.push(<span key="half" style={{ color: '#f4c150' }}>☆</span>);
    }

    for (let i = 0; i < emptyStars; i++) {
        stars.push(<span key={`empty-${i}`} style={{ color: '#ccc' }}>★</span>);
    }

    return stars;
};
  