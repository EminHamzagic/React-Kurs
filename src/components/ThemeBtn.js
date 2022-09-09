import { Switch } from "@mui/material";

export default function ThemeBtn({ handleSwitch }) {
  const label = { inputProps: { "aria-label": "Switch demo" } };

  return (
    <div>
      <Switch
        onChange={() => {
          handleSwitch((prev) => {
            console.log(!prev);
            return !prev;
          });
        }}
      />
    </div>
  );
}
