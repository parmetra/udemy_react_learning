import errorGIF from "./error.gif";

const ErrorMessage = () => {
	return (
		<img src={errorGIF} alt='error' style={{display: "block", width: "250px", height: "250px", objectFit: "contain", margin: "0 auto"}}></img>
	)
}

export default ErrorMessage;