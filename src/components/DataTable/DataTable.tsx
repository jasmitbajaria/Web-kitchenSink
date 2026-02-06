import { styled } from "@mui/material/styles";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Chip,
  IconButton,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#F9FAFB",
    color: "#374151",
    fontWeight: 600,
    fontSize: 14,
    borderBottom: "1px solid #E5E7EB",
    borderRight: "1px solid #E5E7EB",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    color: "#374151",
    borderBottom: "1px solid #E5E7EB",
    borderRight: "1px solid #E5E7EB",
  },
}));

const StyledTableRow = styled(TableRow)(() => ({}));

const StatusChip = ({ status }: { status: "Success" | "Failed" }) => (
  <Chip
    label={status}
    size="small"
    sx={{
      backgroundColor: status === "Success" ? "#4CAF50" : "#FF4D4F",
      color: "#fff",
      fontWeight: 500,
      borderRadius: "6px",
    }}
  />
);

const rows = [
  { service: "First Login OTP charge", amount: 500, status: "Success" },
  {
    service: "DigiKhata - Fund Transfer With TopUp",
    amount: 100,
    status: "Failed",
  },
  { service: "Bank AC Validation", amount: 1, status: "Success" },
  { service: "AEPS 2FA", amount: 200, status: "Success" },
  { service: "DigiKhata - Fund Transfer", amount: 100, status: "Failed" },
];

export default function DataTable() {
  return (
    <Paper
      sx={{
        p: 2,
        borderRadius: "16px",
        boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
        maxWidth: 500,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography sx={{ fontSize: 20, fontWeight: 600, color: "#1e3e97" }}>
          Recent Transactions
        </Typography>

        <Typography
          sx={{
            fontSize: 14,
            fontWeight: 500,
            color: "#1e3e97",
            cursor: "pointer",
          }}
        >
          View All
        </Typography>
      </Box>

      <TableContainer
        sx={{
          maxWidth: "100%",
          overflowX: "auto",

          scrollbarWidth: "thin",
          scrollbarColor: "#9e9e9e #e0e0e0",

          "&::-webkit-scrollbar": {
            height: 8,
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "#e0e0e0",
            borderRadius: 8,
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#9e9e9e",
            borderRadius: 8,
          },
        }}
      >
        <Table
          stickyHeader
          sx={{
            minWidth: 700,
          }}
        >
          <TableHead>
            <TableRow>
              <StyledTableCell>Services</StyledTableCell>
              <StyledTableCell align="center">Amount</StyledTableCell>
              <StyledTableCell align="center">Status</StyledTableCell>
              <StyledTableCell align="center">TXN ID</StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell>{row.service}</StyledTableCell>

                <StyledTableCell align="center">{row.amount}</StyledTableCell>

                <StyledTableCell align="center">
                  <StatusChip status={row.status as any} />
                </StyledTableCell>

                <StyledTableCell align="center">
                  <IconButton size="small">
                    <VisibilityIcon sx={{ color: "#6B7280" }} />
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
