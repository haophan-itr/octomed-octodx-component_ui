import toastr from 'toastr';

// toastr.options = {
//   timeOut: 0,
//   extendedTimeOut: 0,
// };

export const toastrInfo = (message, title, timeOut = undefined) => {
  toastr.info(message, title, {
    progressBar: false,
    positionClass: 'toast-bottom-left',
    preventDuplicates: true,
    timeOut,
  });
};

export const toastrSuccess = (message, title, timeOut = undefined) => {
  toastr.success(message, title, {
    progressBar: false,
    positionClass: 'toast-bottom-left',
    preventDuplicates: true,
    timeOut,
  });
};

// export const toastrResetSuccess = (message, title) => {
//   toastr.success(message, title, {
//     progressBar: false,
//     positionClass: 'toast-bottom-left',
//     preventDuplicates: true,
//     iconClass: 'reset-device',
//   });
// };

export const toastrError = (message, title, timeOut = undefined) => {
  toastr.error(message, title, {
    progressBar: false,
    positionClass: 'toast-bottom-left',
    preventDuplicates: true,
    timeOut,
  });
};

export const toastrWarning = (message, title, timeOut = undefined) => {
  toastr.warning(message, title, {
    progressBar: false,
    positionClass: 'toast-bottom-left',
    preventDuplicates: true,
    timeOut,
  });
};

export const toastrWarningRMA = (message, title, timeOut = undefined) => {
  toastr.warning(message, title, {
    progressBar: false,
    positionClass: 'toast-bottom-left',
    preventDuplicates: false,
    timeOut,
  });
};
