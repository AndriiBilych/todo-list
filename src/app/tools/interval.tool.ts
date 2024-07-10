export async function onInterval(
  condition: () => boolean,
  callback: () => void,
  timeout: number,
): Promise<void> {
  const interval = setInterval(() => {
    if (condition()) {
      callback();
      clearInterval(interval);
      return Promise.resolve();
    }
  }, timeout);
}
