import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import styled from '@emotion/styled';
import {
  useRef,
  ReactNode,
  useState,
  ChangeEventHandler,
  DragEventHandler,
} from 'react';

type UploadProps = {
  children?: ReactNode | Function | EmotionJSX.Element;
  name?: string;
  accept?: string;
  value?: any;
  droppable?: boolean;
  onChange?: (arg: any) => {};
};

const UploadContainer = styled.div`
  display: inline-block;
  cursor: pointer;
`;

const Input = styled.input`
  display: none;
`;

const Upload = ({
  droppable,
  children,
  name,
  accept,
  value,
  onChange,
  ...props
}: UploadProps) => {
  const [file, setFile] = useState(value);
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const files = event.target.files;
    if (files == null) return;
    const changedFile = files[0];
    setFile(changedFile);
    onChange && onChange(changedFile);
  };

  const handleChooseFile = () => {
    inputRef.current?.click();
  };

  const handleDragEnter: DragEventHandler = (event) => {
    if (!droppable) return;

    event.preventDefault();
    event.stopPropagation();

    if (event.dataTransfer.items && event.dataTransfer.items.length > 0) {
      setDragging(true);
    }
  };
  const handleDragLeave: DragEventHandler = (event) => {
    if (!droppable) return;

    event.preventDefault();
    event.stopPropagation();

    setDragging(false);
  };
  const handleDragOver: DragEventHandler = (event) => {
    if (!droppable) return;

    event.preventDefault();
    event.stopPropagation();
  };
  const handleFileDrop: DragEventHandler = (event) => {
    if (!droppable) return;

    event.preventDefault();
    event.stopPropagation();

    const files = event.dataTransfer.files;
    const changedFile = files[0];
    setFile(changedFile);
    onChange && onChange(changedFile);
    setDragging(false);
  };

  return (
    <UploadContainer
      onClick={handleChooseFile}
      onDrop={handleFileDrop}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      {...props}>
      <Input
        ref={inputRef}
        type="file"
        name={name}
        accept={accept}
        onChange={handleFileChange}
      />
      {typeof children === 'function' ? children(file, dragging) : children}
    </UploadContainer>
  );
};

export default Upload;
