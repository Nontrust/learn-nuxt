const randomImageSetter = (data) => {
    if(!Array.isArray(data)) return data;
    return data.map((item) => {
        return {
            ...item, 
            imageUrl: `${item.imageUrl}?random=${Math.random()}`,
            price: Number.parseInt(item.price)
        }
    });
};

export { randomImageSetter }