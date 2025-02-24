const data = (source: string, target: string, text: string) => {
  return JSON.stringify({
    source: `${source}`,
    target: `${target}`,
    text: `${text}`,
  });
};

export {data};
