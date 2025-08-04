// theme/accentSwatchButton.tsx

import { IconButton, Tooltip } from "@mui/material";
import { useThemeContext } from "@/providers/ThemeProvider";
import clsx from "clsx";
import { colorTokens } from "@/theme/theme"; // Import your color tokens

type Props = {
  accentKey: "accentG" | "accentY" | "accentB" | "accentR";
  icon: React.ReactNode;
  tooltip: string;
  onSelect: () => void;
};

export default function AccentSwatchButton({
  accentKey,
  icon,
  tooltip,
  onSelect,
}: Props) {
  const { accent } = useThemeContext();

  // Pick default (shade 500) and hover color (shade 700 or 800)
  const defaultColor = colorTokens[accentKey][500];
  const hoverColor = colorTokens[accentKey][700];

  return (
    <Tooltip title={tooltip}>
      <IconButton
        onClick={onSelect}
        sx={{
          backgroundColor: defaultColor,
          color: "#fff",
          borderRadius: "50%",
          transition: "background-color 0.3s ease",
          boxShadow:
            accent === accentKey ? `0 0 0 3px ${defaultColor}` : undefined,
          "&:hover": {
            backgroundColor: hoverColor,
          },
        }}>
        {icon}
      </IconButton>
    </Tooltip>
  );
}
