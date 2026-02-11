import { SITE } from "./site-data.js";
import {
  mountText,
  mountNav,
  mountPills,
  mountHighlights,
  mountAbout,
  mountSkills,
  mountProjects,
  mountExperience,
  mountContactLinks,
  setupSearch
} from "./renderers.js";

mountText(SITE);
mountNav(SITE);
mountPills(SITE);
mountHighlights(SITE);
mountAbout(SITE);
mountSkills(SITE);
mountProjects(SITE);
mountExperience(SITE);
mountContactLinks(SITE);
setupSearch();
