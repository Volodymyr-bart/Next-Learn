"use client";
const ErrorWrapper = ({ error }: { error: Error }) => {
  return <h2>Oopps!!!{error.message}</h2>;
};

export default ErrorWrapper;
