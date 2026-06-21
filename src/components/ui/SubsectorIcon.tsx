import {
  UtensilsCrossed,
  Shirt,
  Hammer,
  Music,
  Clapperboard,
  Camera,
  Smartphone,
  Gamepad2,
  Radio,
  Drama,
  Palette,
  Package,
  Sofa,
  PenTool,
  Building2,
  BookOpen,
  Megaphone,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

const MAP: Record<string, LucideIcon> = {
  UtensilsCrossed,
  Shirt,
  Hammer,
  Music,
  Clapperboard,
  Camera,
  Smartphone,
  Gamepad2,
  Radio,
  Drama,
  Palette,
  Package,
  Sofa,
  PenTool,
  Building2,
  BookOpen,
  Megaphone,
};

export default function SubsectorIcon({
  name,
  className,
  strokeWidth = 1.75,
}: {
  name: string;
  className?: string;
  strokeWidth?: number;
}) {
  const Icon = MAP[name] ?? Sparkles;
  return <Icon className={className} strokeWidth={strokeWidth} aria-hidden />;
}
