import React, { useState } from "react";
import { Box, Typography, CircularProgress, Avatar } from "@mui/material";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

interface UploadFieldProps {
  label?: string;
  onChange: (file: File | File[] | null) => void;
  accept?: string;
  multiple?: boolean;
  disabled?: boolean;
  loading?: boolean;
  helperText?: string;
  error?: boolean;
  fullWidth?: boolean;
  library?: "mui" | "bootstrap";
}

const UploadField: React.FC<UploadFieldProps> = ({
  label = "Upload File",
  onChange,
  accept,
  multiple = false,
  disabled = false,
  loading = false,
  helperText,
  error = false,
  fullWidth = false,
  library = "mui",
}) => {
  const [fileName, setFileName] = useState("No file chosen");
  const [fileType, setFileType] = useState<"image" | "pdf" | "other" | null>(
    null,
  );
  const [preview, setPreview] = useState<string | null>(null);
  const [focused, setFocused] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const file = e.target.files[0];
    setFileName(file.name);
    onChange(file);

    if (file.type.startsWith("image/")) {
      setFileType("image");
      setPreview(URL.createObjectURL(file));
    } else if (file.type === "application/pdf") {
      setFileType("pdf");
      setPreview(null);
    } else {
      setFileType("other");
      setPreview(null);
    }
  };

  if (library === "mui") {
    return (
      <Box width={fullWidth ? "100%" : "420px"}>
        {label && (
          <Typography fontWeight={600} mb={0.75}>
            {label}
          </Typography>
        )}

        <Box
          display="flex"
          alignItems="center"
          height="52px"
          border="1px solid"
          borderRadius="12px"
          overflow="hidden"
          borderColor={error ? "#D92D20" : focused ? "#4C8DFF" : "#D0D5DD"}
          sx={{ transition: "border-color 0.2s" }}
        >
          {/* Choose File */}
          <Box
            component="label"
            px={2.5}
            height="100%"
            display="flex"
            alignItems="center"
            bgcolor="#F9FAFB"
            borderRight="1px solid #D0D5DD"
            sx={{
              cursor: disabled ? "not-allowed" : "pointer",
              fontSize: "14px",
              fontWeight: 500,
              whiteSpace: "nowrap",
            }}
          >
            {loading ? <CircularProgress size={16} /> : "Choose File"}

            <input
              type="file"
              hidden
              accept={accept}
              multiple={multiple}
              disabled={disabled || loading}
              onChange={handleFileChange}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
            />
          </Box>

          {/* File preview */}
          <Box
            px={2}
            display="flex"
            alignItems="center"
            gap={1.25}
            flex={1}
            minWidth={0}
          >
            {fileType === "image" && preview && (
              <Avatar
                src={preview}
                variant="rounded"
                sx={{ width: 28, height: 28 }}
              />
            )}

            {fileType === "pdf" && (
              <PictureAsPdfIcon sx={{ color: "#D92D20", fontSize: 22 }} />
            )}

            {fileType === "other" && (
              <InsertDriveFileIcon sx={{ color: "#667085", fontSize: 22 }} />
            )}

            <Typography
              fontSize="14px"
              color={fileName === "No file chosen" ? "#667085" : "#101828"}
              noWrap
            >
              {fileName}
            </Typography>
          </Box>
        </Box>

        {helperText && (
          <Typography
            variant="caption"
            color={error ? "error" : "text.secondary"}
            mt={0.5}
          >
            {helperText}
          </Typography>
        )}
      </Box>
    );
  }

  return null;
};

export default UploadField;
