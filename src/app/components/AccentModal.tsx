// components/AccentModal.tsx

import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Box,
  Tooltip,
} from "@mui/material";
import { Gavel, Flare, AutoAwesome } from "@mui/icons-material";
import { useThemeContext } from "@/providers/ThemeProvider";

type AccentOption = {
  name: "accentG" | "accentY" | "accentB";
  icon: React.ReactNode;
  color: string;
};

const accentOptions: AccentOption[] = [
  { name: "accentG", icon: <Gavel />, color: "#22c55e" }, // green-500
  { name: "accentY", icon: <Flare />, color: "#eab308" }, // yellow-500
  { name: "accentB", icon: <AutoAwesome />, color: "#3b82f6" }, // blue-500
];

export default function AccentModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { accent, setAccent } = useThemeContext();

  const handleSelect = (newAccent: AccentOption["name"]) => {
    setAccent(newAccent);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Select Accent Color</DialogTitle>
      <DialogContent>
        <Box display="flex" gap={2} justifyContent="center" py={2}>
          {accentOptions.map((option) => (
            <Tooltip key={option.name} title={option.name}>
              <IconButton
                onClick={() => handleSelect(option.name)}
                style={{
                  color: "white",
                  backgroundColor: option.color,
                  transform: accent === option.name ? "scale(1.2)" : "scale(1)",
                  opacity: accent === option.name ? 1 : 0.6,
                }}>
                {option.icon}
              </IconButton>
            </Tooltip>
          ))}
        </Box>
      </DialogContent>
    </Dialog>
  );
}
