const getFormattedDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toISOString();
  };
  
  module.exports = {
    getFormattedDate,
  };
  