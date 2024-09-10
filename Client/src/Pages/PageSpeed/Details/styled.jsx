import { Box, Stack, styled } from "@mui/material";

export const ChartBox = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(8),
  height: 300,
  minWidth: 250,
  padding: theme.spacing(8),
  border: 1,
  borderStyle: "solid",
  borderColor: theme.palette.border.light,
  borderRadius: 4,
  backgroundColor: theme.palette.background.main,
  "& h2": {
    color: theme.palette.text.secondary,
    fontSize: 15,
    fontWeight: 500,
  },
  "& p": {
    color: theme.palette.text.secondary,
  },
}));

export const IconBox = styled(Box)(({ theme }) => ({
  height: 34,
  minWidth: 34,
  width: 34,
  position: "relative",
  border: 1,
  borderStyle: "solid",
  borderColor: theme.palette.border.dark,
  borderRadius: 4,
  backgroundColor: theme.palette.background.accent,
  "& svg": {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 20,
    height: 20,
    "& path": {
      stroke: theme.palette.text.tertiary,
    },
  },
}));

export const StatBox = styled(Box)(({ theme }) => ({
  padding: `${theme.spacing(4)} ${theme.spacing(8)}`,
  minWidth: 200,
  width: 225,
  border: 1,
  borderStyle: "solid",
  borderColor: theme.palette.border.light,
  borderRadius: 4,
  backgroundColor: theme.palette.background.main,
  background: `linear-gradient(340deg, ${theme.palette.background.accent} 20%, ${theme.palette.background.main} 35%)`,
  "& h2": {
    fontSize: 13,
    fontWeight: 500,
    color: theme.palette.text.secondary,
    textTransform: "uppercase",
  },
  "& p": {
    fontSize: 18,
    color: theme.palette.text.primary,
    marginTop: theme.spacing(2),
    "& span": {
      color: theme.palette.text.tertiary,
      marginLeft: theme.spacing(2),
      fontSize: 15,
    },
  },
}));
