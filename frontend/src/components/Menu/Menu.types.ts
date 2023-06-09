import { TStrapiNavResponse } from "@/types/strapi.types";

export type TStyledSidebar = {
  menuOpen: boolean;
};

export type TStyledHamburgerButton = {
  menuOpen: boolean;
};

export type Props = {
  nav: TStrapiNavResponse;
};
