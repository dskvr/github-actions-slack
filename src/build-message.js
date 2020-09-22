const buildMessage = (channel, text, optional = {}) => {
  const message = {
    channel,
    text.replace('\\\\n', '\\n').replace('\\\\t', '\\t')
  };

  Object.keys(optional).forEach(name => {
    message[name] = optional[name];
  });

  return message;
};

module.exports = buildMessage;
