import request from "@/utils/request";

export const simpleRegister = (data) => {
  return request({
    url: `/simple/register`,
    method: "post",
    data,
  });
};
export const simpleDispose = (data) => {
  return request({
    url: `/simple/dispose`,
    method: "post",
    data,
  });
};

export const simpleDelete = (rid) => {
  return request({
    url: `/simple/delete/?rid=${rid}`,
    method: "post",
  });
};

export const simpleSave = (data) => {
  return request({
    url: `/simple/save`,
    method: "post",
    data,
  });
};

export const simpleRemove = (data) => {
  return request({
    url: `/simple/remove`,
    method: "post",
    data,
  });
};

export const simpleLend = (data) => {
  return request({
    url: `/simple/lend`,
    method: "post",
    data,
  });
};

export const simpleReturnSimple = (data) => {
  return request({
    url: `/simple/returnSimple`,
    method: "post",
    data,
  });
};

export const simpleDestroyedSimple = (data) => {
  return request({
    url: `/simple/destroyedSimple`,
    method: "post",
    data,
  });
};

export const simpleQuality = (data) => {
  return request({
    url: `/simple/quality`,
    method: "post",
    data,
  });
};
