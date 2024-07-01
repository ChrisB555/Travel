import { Toast } from "react-bootstrap";

function useToast(toastTitle, toastText, className, showA, toggleShowA) {
  return (
    <Toast className={className} show={showA} onClose={toggleShowA}>
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">{toastTitle}</strong>
        <small>just now</small>
      </Toast.Header>
      <Toast.Body style={{fontSize:"18px",color:" #ffa500",backgroundColor:"#ffffff", margin:"10px auto"}}>{toastText}</Toast.Body>
    </Toast>
  );
}
export default useToast;