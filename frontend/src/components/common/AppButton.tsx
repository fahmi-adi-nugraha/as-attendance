import { Button } from "@/components/ui/button";
import { ComponentProps } from "react";

type Props = ComponentProps<typeof Button>;

export function AppButton(props: Props) {
  return <Button {...props} />;
}