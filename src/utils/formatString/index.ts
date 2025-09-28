const formatStringUtils = () => {
  const truncateText = (text: string, maxLength: number): string => {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  };

  return { truncateText };
};

export default formatStringUtils;