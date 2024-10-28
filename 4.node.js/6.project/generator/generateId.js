function generateId() {
  const uuid = crypto.randomUUID();
  return `${uuid}`;
}

export default generateId;
