import useWindowResize from "./useWindowResize";

const WindowResize = () => {
  const windowSize = useWindowResize();
  const { width, height } = windowSize;
  return (
    <div>
      <h1>Resize the window</h1>
      <p>Current width is: {width}</p>
      <p>Current height is: {height} </p>
    </div>
  );
};

export default WindowResize;
