import { Button, ButtonColors, Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

interface ConfirmModalProps {
  show: boolean;
  onConfirm: () => void;
  onClose: () => void;
  content: string;
  confirm: {
    text: string;
    color: keyof ButtonColors;
  };
  cancel: {
    text: string;
    color: keyof ButtonColors;
  };
}

export const ConfirmModal = ({
  show,
  onClose,
  onConfirm,
  content,
  confirm,
  cancel,
}: ConfirmModalProps) => {
  return (
    <Modal show={show} size="md" popup={true} onClose={onClose}>
      <Modal.Header />
      <Modal.Body>
        <div className="text-center">
          <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            {content}
          </h3>
          <div className="flex justify-center gap-4">
            <Button color={confirm.color} onClick={onConfirm}>
              {confirm.text}
            </Button>
            <Button color={cancel.color} onClick={onClose}>
              {cancel.text}
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};
