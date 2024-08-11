/*
const pushEvent = (event: string, params: any) => {
  pushDataLayer({
    event,
    ...params,
  });
  pushUmamiEvent(event, params);
};

const pushUmamiEvent = (event: string, params: any) => {
  if (typeof window === 'undefined') {
    return;
  }

  const canUseUmami = window.umami !== undefined;

  if (canUseUmami) {
    try {
      console.log(window.umami);
      window.umami.track(event, params);
    } catch (e) {
      console.error(`failed to track ${event}: ${e}`);
    }
  }
};

const pushDataLayer = (data: any) => {
  if (
    typeof window !== 'undefined' &&
    typeof window.dataLayer !== 'undefined'
  ) {
    window.dataLayer.push(data);
    console.log('pushed to dataLayer', window.dataLayer);
  }
};
*/
