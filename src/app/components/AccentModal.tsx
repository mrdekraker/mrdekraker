// components/AccentModal.tsx

import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Box,
  Tooltip,
} from "@mui/material";
import { Gavel, Flare, AutoAwesome, FitnessCenter } from "@mui/icons-material";
import AccentSwatchButton from "@/theme/accentSwatchButton";
import { useThemeContext } from "@/providers/ThemeProvider";

type AccentOption = {
  name: "accentG" | "accentY" | "accentB" | "accentR";
  icon: React.ReactNode;
  color: string;
};

const accentOptions = [
  { name: "accentR", icon: <FitnessCenter />, label: "Red" },
  { name: "accentY", icon: <Flare />, label: "Yellow" },
  { name: "accentG", icon: <Gavel />, label: "Green" },
  { name: "accentB", icon: <AutoAwesome />, label: "Blue" },
] as const;

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
          {accentOptions.map(({ name, icon, label }) => (
            <AccentSwatchButton
              key={name}
              accentKey={name}
              icon={icon}
              tooltip={label}
              onSelect={() => handleSelect(name)}
            />
          ))}
        </Box>
      </DialogContent>
    </Dialog>
  );
}
