export const splitParams = (params: string) => {
  const [pageIndex, ...restParams] = params.split("&");
  const politeParams: Record<string, string> = {
    pageIndex: `&page=${pageIndex}`,
    ...restParams.reduce((acc, param) => {
      const [key] = param.split("=");
      acc[key] = `&${param}`;
      return acc;
    }, {} as Record<string, string>),
  };
  return politeParams;
};
