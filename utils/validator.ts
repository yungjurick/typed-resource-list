/**
 * Valid Url Schema Validator
 * @param url
 * @returns boolean
 */
export const isValidUrlSchema = (url: string): boolean => {
  const result = url.match(/^(http(s)?:\/\/)/);
  return result !== null;
};

/**
 * Youtube URL Validator
 * @param url
 * @returns boolean
 */
export const isYoutubeUrl = (url: string): boolean => {
  const result = url.match(/^(https:\/\/www.youtube.com\/watch\?v=)/);
  return result !== null;
};
