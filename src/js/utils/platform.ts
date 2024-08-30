export const isMobile = (): boolean =>
  typeof navigator !== 'undefined' &&
  navigator &&
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  );

export default isMobile;
