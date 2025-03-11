import ReactDOM from "react-dom";
import {
  type CSSProperties,
  type PropsWithChildren,
  type ReactNode,
  useRef,
} from "react";
import "./Modal.css";
import Backdrop from "~/shared/UIElements/Backdrop";
import { CSSTransition } from "react-transition-group";

type ModalOverlayProps = PropsWithChildren<{
  className?: string;
  style?: CSSProperties;
  headerClass?: string;
  header?: ReactNode;
  onSubmit?: () => void;
  contentClass?: string;
  footerClass?: string;
  footer?: ReactNode;
}>;

const ModalOverlay = (props: ModalOverlayProps) => {
  const content = (
    <div className={`modal ${props.className}`} style={props.style}>
      <header className={`modal__header ${props.headerClass}`}>
        <h2>{props.header}</h2>
      </header>
      <form
        onSubmit={
          props.onSubmit ? props.onSubmit : (event) => event.preventDefault()
        }
      >
        <div className={`modal__content ${props.contentClass}`}>
          {props.children}
        </div>
        <footer className={`modal__footer ${props.footerClass}`}>
          {props.footer}
        </footer>
      </form>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById("modal-hook")!);
};

type ModalProps = { show: boolean; onCancel: () => void } & ModalOverlayProps;

export const Modal = (props: ModalProps) => {
  const nodeRef = useRef(null);

  return (
    <>
      {props.show && <Backdrop onClick={props.onCancel} />}
      <CSSTransition
        in={props.show}
        classNames="modal"
        timeout={200}
        mountOnEnter
        unmountOnExit
        nodeRef={nodeRef}
      >
        <div ref={nodeRef}>
          <ModalOverlay {...props} />
        </div>
      </CSSTransition>
    </>
  );
};
