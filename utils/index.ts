/**
 * Convert Image file to Base 64
 * @param file
 * @returns base64 string
 */
export const convertToBase64 = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

export const getRandomDelayDuration = () => {
  const randInt = Math.floor(Math.random() * 8 + 3); // (0 ~ 8) + 3 => (3 =< x < 11)
  return randInt * 100; // return as ms
};

/**
 * Returns a promise that resolves after a random delay
 * @returns Promise that resolves after a random delay (300ms ~ 1000ms)
 */
export const randomDelay = () => {
  const delay = getRandomDelayDuration();
  console.info("Delay: ", delay);
  return new Promise((res) => setTimeout(res, delay));
};

/**
 * Calculate Success Rate (80% chance of success)
 * @returns true if success, false if fail
 */
export const calculateSuccess = (): boolean => {
  const getRandomInt = Math.floor(Math.random() * 10) + 1; // (1 ~ 10)

  console.info("Success: ", getRandomInt <= 8, getRandomInt);
  return getRandomInt <= 8; // 80% chance of success
};
