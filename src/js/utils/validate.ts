export const validateEmail = (
  input: string | number | readonly string[] | undefined,
) => {
  return (
    input
      ?.toString()
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      ) !== null
  );
};

export const validatePhoneNumber = (
  input: string | number | readonly string[] | undefined,
) => {
  return (
    input
      ?.toString()
      .match(
        /^[+]?[(]?[0-9]{2,3}[)]?[-\s.]?[0-9]{3}[-\s.]?([0-9]{4,6}|[0-9]{3}[-\s.][0-9]{4})$/,
      ) !== null
  );
};

export const validatePhoneNumberFisso = (
  input: string | number | readonly string[] | undefined,
) => {
  return input?.toString().match(/^0\d{1,3}[-\s]?\d{3}[-\s]?\d{3,4}$/) !== null;
};

export const validatePhoneNumberAll = (
  input: string | number | readonly string[] | undefined,
) => {
  return validatePhoneNumber(input) || validatePhoneNumberFisso(input);
};

export const validateZipCode = (
  input: string | number | readonly string[] | undefined,
) => {
  return input?.toString().match(/^(V-|I-)?[0-9]{5}$/) !== null;
};

export const validatePrice = (
  input: string | number | readonly string[] | undefined,
) => {
  return input?.toString().match(/^[0-9]+(\.[0-9]{2})?$/) !== null;
};

export const validateFacebook = (
  input: string | number | readonly string[] | undefined,
) => {
  return (
    input?.toString().match(/^(https?:\/\/)?(www\.)?facebook.com\/.*/) !== null
  );
};

export const validateInstagram = (
  input: string | number | readonly string[] | undefined,
) => {
  return (
    input?.toString().match(/^(https?:\/\/)?(www\.)?instagram.com\/.*/) !== null
  );
};

export const validateTwitter = (
  input: string | number | readonly string[] | undefined,
) => {
  return (
    input?.toString().match(/^(https?:\/\/)?(www\.)?(twitter|x).com\/.*/) !==
    null
  );
};

export const validateYoutubeVideo = (
  input: string | number | readonly string[] | undefined,
) => {
  return (
    input
      ?.toString()
      .match(
        /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube(-nocookie)?\.com|youtu.be))(\/(?:[\w-]+\?v=|embed\/|live\/|v\/)?)([\w-]+)(\S+)?$/,
      ) !== null
  );
};

export const validateWebsite = (
  input: string | number | readonly string[] | undefined,
) => {
  return (
    input?.toString().match(/^(https?:\/\/)?([a-zA-Z0-9.]+)\.([a-z]{2,})$/) !==
    null
  );
};

export const validatePostTitle = (
  input: string | number | readonly string[] | undefined,
) => {
  // max words 100 chars
  if (input === undefined) {
    return false;
  }
  return input?.toString().length > 0 && input?.toString().length <= 100;
};
