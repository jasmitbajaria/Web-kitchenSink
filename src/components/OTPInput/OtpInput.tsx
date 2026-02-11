import React, { useRef } from "react";
import { Box, TextField } from "@mui/material";

export interface OtpInputProps {
  length?: number;
  value: string;
  onChange: (value: string) => void;
}

const OtpInput: React.FC<OtpInputProps> = ({
  length = 6,
  value,
  onChange,
}) => {
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const handleChange = (index: number, val: string) => {
    if (!/^\d?$/.test(val)) return;

    const otpArr = value.split("");
    otpArr[index] = val;
    onChange(otpArr.join(""));

    if (val && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  return (
    <Box display="flex" gap={1}>
      {Array.from({ length }).map((_, index) => (
        <TextField
          key={index}
          inputRef={(el) => (inputRefs.current[index] = el!)}
          value={value[index] || ""}
          onChange={(e) => handleChange(index, e.target.value)}
          inputProps={{
            maxLength: 1,
            style: { textAlign: "center", fontSize: 18 },
          }}
          sx={{ width: 48 }}
        />
      ))}
    </Box>
  );
};

export default OtpInput;
