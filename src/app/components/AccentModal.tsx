// components/AccentModal.tsx

import {
  Dialog,
  DialogTitle,
  DialogContent,
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
  { name: "accentR", icon: <FitnessCenter />, label: "Crimson" },
  { name: "accentY", icon: <Flare />, label: "Golden Ochre" },
  { name: "accentG", icon: <Gavel />, label: "Forest Green" },
  { name: "accentB", icon: <AutoAwesome />, label: "Slate Gray" },
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
      <DialogTitle
        textAlign="center"
        fontSize={32}
        fontWeight="bold"
        marginTop={2}>
        Select Accent Color
      </DialogTitle>
      <DialogContent>
        <Box display="flex" gap={4} justifyContent="center" px={12} py={4}>
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
