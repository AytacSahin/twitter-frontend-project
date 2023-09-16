
const dateCalculator = (givenDate) => {

    const date = new Date(givenDate);
    const day = date.getDate();
    const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date);
    const year = date.getFullYear();
    const formattedDate = `  ${month} ${day}, ${year}`;

    return formattedDate;
}

export default dateCalculator