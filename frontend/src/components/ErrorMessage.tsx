import { ServerError } from "../api";

type ErrorMessageProp = {
  error: Error | ServerError;
};

export const ErrorMessage = ({ error }: ErrorMessageProp) => {
  let title = "Unexpexted error";
  let message = "";

  if (error instanceof Error) {
    message = error.message;
  } else {
    switch (error.status) {
      case 404:
        title = `Error ${error.status}`;
        message = "Can't find country by this name. Try again.";
        break;
      case 505:
        title = `Error ${error.status}`;
        message = "Server not responding. Try again later.";
        break;
    }
  }

  return (
    <section className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2   rounded-lg border-4 border-slate-700 p-10">
      <h1 className="m-4 mx-auto w-fit text-3xl">{title}</h1>
      <p>{message}</p>
    </section>
  );
};
