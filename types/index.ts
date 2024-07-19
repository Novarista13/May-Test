import { LucideProps, type LucideIcon } from "lucide-react";
import { ForwardRefExoticComponent, ReactNode, RefAttributes } from "react";

export interface sidebarItem {
  name: string;
  href: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
}

export interface categoryItems {
  name: string;
  component?: JSX.Element;
  children?: {
    name: string;

    component?: JSX.Element;
  }[];
}

export interface headLineItems {
  name: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  component?: JSX.Element;
}

export interface stageTab {
  name: string;
  component?: JSX.Element;
}

export interface contactListTab {
  name: string;
  component?: JSX.Element;
}

export interface contactType {
  name: string;
  email: string;
  phone: string;
  category: string;
  location: string;
  gender: string;
}

export interface mailType {
  id: string;
  name: string;
  to: string;
  email: string;
  text: string;
  date: string;
}

export interface leadType {
  role?: string;
  name: string;
  phone?: string;
  email: string;
}
