import { ChangeEvent, forwardRef, useRef, useState } from "react";
import { HiOutlineXMark } from "react-icons/hi2";

interface FileInputProps {
  id: string;
  onChange: (file: File | null) => void;
  onRemove: () => void;
}

const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
  ({ id, onChange, onRemove, ...props }, ref) => {
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleUploadClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      fileInputRef.current?.click();
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
      const selectedFile = e.target.files ? e.target.files[0] : null;
      if (selectedFile) {
        setPreviewUrl(URL.createObjectURL(selectedFile));
      } else {
        setPreviewUrl(null);
      }
      onChange(selectedFile);
    };

    const handleRemoveClick = (e: React.MouseEvent<HTMLSpanElement>) => {
      e.stopPropagation();
      onRemove();
    };
    return (
      <div>
        <button
          type="button"
          className="relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-md border border-dashed border-gray-300 text-primary-700 hover:text-primary-600"
          onClick={handleUploadClick}
        >
          {previewUrl ? (
            <img
              src={previewUrl}
              alt="preview"
              className="h-24 w-24 rounded-md object-cover"
            />
          ) : (
            <span className="text-sm font-medium md:text-base">Open</span>
          )}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            id={id}
            className="hidden"
            onChange={handleFileChange}
          />
          <span
            className="absolute inset-y-0 right-0 pr-2 pt-2"
            onClick={handleRemoveClick}
          >
            <HiOutlineXMark />
          </span>
        </button>
      </div>
    );
  }
);

FileInput.displayName = "FileInput";
export default FileInput;
