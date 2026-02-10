import React from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Box,
} from "@mui/material";

export interface AppModalProps {
    open: boolean;
    title?: string;
    onClose: () => void;
    onConfirm?: () => void;
    confirmText?: string;
    cancelText?: string;
    width?: number | string;
    children: React.ReactNode;
}

const AppModal: React.FC<AppModalProps> = ({
    open,
    title,
    onClose,
    onConfirm,
    confirmText = "Confirm",
    cancelText = "Cancel",
    width = 500,
    children,
}) => {
    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth={false}
            PaperProps={{
                sx: {
                    width,
                    maxWidth: "100%",
                },
            }}
        >
            {title && <DialogTitle>{title}</DialogTitle>}

            <DialogContent dividers>
                <Box sx={{ width: "100%" }}>{children}</Box>
            </DialogContent>

            <DialogActions>
                <Button onClick={onClose} variant="outlined">
                    {cancelText}
                </Button>

                {onConfirm && (
                    <Button onClick={onConfirm} variant="contained">
                        {confirmText}
                    </Button>
                )}
            </DialogActions>
        </Dialog>
    );
};

export default AppModal;
