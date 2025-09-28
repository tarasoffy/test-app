const mathUtils = () => {
    const randomNumber = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    return {randomNumber}
}

export default mathUtils;