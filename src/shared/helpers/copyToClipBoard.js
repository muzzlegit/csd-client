export const copyToClipboard = async (value) => {
  try {
    await navigator.clipboard.writeText(`${value}`);
    return true;
  } catch (error) {
    console.warn("Не вдалось скопіювати", error);
    return false;
  }
};
