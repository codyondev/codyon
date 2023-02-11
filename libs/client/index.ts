export const cn = (...classnames: string[]) => {
  return classnames.join(' ');
};

export const getEmoji = (type: string) => {
  return (
    { very: '❤️‍🔥', little: '❤️', 'little-not': '❤️‍🩹', 'very-not': '💔' }[type] ??
    ''
  );
};
