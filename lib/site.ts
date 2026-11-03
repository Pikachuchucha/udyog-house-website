/* Shared site constants: taxonomy, sample record, preview URLs.
   Single source so Home and Trust show THE SAME illustrative record. */

export const PREVIEW = "https://pikachuchucha.github.io/udyog-house-website";
export const pageUrl = (path: string) => `${PREVIEW}${path}`;

export const GEO_ONE_FORM =
  "Starting in Vasai East; Waliv, Sativali, and Gokhivare next, when built.";
export const FOOTER_LINE = "Building a capability record for Vasai East first.";
export const IMAGERY_NOTE =
  "Editorial images on this site are illustrative. They are not photographs of Udyog House facilities or members.";
export const OWNER_APPROVAL = "You approve every field. Or it does not go up.";

/* D7 process taxonomy. Computer Numerical Control (CNC) is spelled out on
   first use per page; vertical machining centre (VMC) likewise. "Job-work"
   is never a process: it is the commercial arrangement (work on a
   customer's order or material), described once where relevant. */
export const PROCESSES = [
  "CNC milling (including vertical machining centre (VMC))",
  "CNC turning",
  "EDM wire-cut",
  "EDM sinker",
  "Grinding",
  "Mould making",
  "Mould-base machining",
  "Tool-room work",
];
export const SERVICE_TYPES = ["New", "Repair", "Modification", "Maintenance"];
export const MATERIAL_GENERICS = [
  "Tool steel",
  "Stainless steel",
  "Carbon / alloy steel",
  "Aluminium alloy",
  "Brass / copper alloy",
  "Engineering plastic",
];
export const GRADES: Record<string, string[]> = {
  "Tool steel": ["P20", "H13", "D2", "Grade not yet specified"],
  "Stainless steel": ["SS 304", "SS 316", "Grade not yet specified"],
  "Carbon / alloy steel": ["EN8", "EN24", "EN31", "Grade not yet specified"],
  "Aluminium alloy": ["AA 6061", "AA 7075", "Grade not yet specified"],
  "Brass / copper alloy": ["Brass", "Copper alloy", "Grade not yet specified"],
  "Engineering plastic": ["Grade not yet specified"],
};
/* Short process names for generated sentences (Brief Checker): the full
   taxonomy stays in the dropdowns, but a sentence reads "For a CNC milling
   job…", never "For a CNC milling (including vertical machining centre
   (VMC)) job…". */
export const SHORT_PROCESSES: Record<string, string> = {
  "CNC milling (including vertical machining centre (VMC))": "CNC milling",
  "CNC turning": "CNC turning",
  "EDM wire-cut": "EDM wire-cut",
  "EDM sinker": "EDM sinker",
  Grinding: "Grinding",
  "Mould making": "Mould making",
  "Mould-base machining": "Mould-base machining",
  "Tool-room work": "Tool-room work",
};
export function shortProcess(p: string): string {
  return SHORT_PROCESSES[p] ?? p;
}
export function joinList(items: string[]): string {
  if (items.length <= 1) return items[0] ?? "";
  if (items.length === 2) return `${items[0]} and ${items[1]}`;
  return `${items.slice(0, -1).join(", ")}, and ${items[items.length - 1]}`;
}
export function articleFor(word: string): string {
  return /^[AEIOU]/i.test(word) ? "an" : "a";
}

/* Process↔machine coherence warnings (never blocks): the machine is a
   single choice, so a listed machine is the only machine. Warn, do not
   error, on pairs that cannot work. Shared by both tools. */
export function coherenceWarnings(processes: string[], machineType: string): string[] {
  const out: string[] = [];
  if (!machineType) return out;
  const isVMC = machineType.startsWith("Vertical machining centre");
  const isLathe = machineType.startsWith("CNC lathe");
  const isSurfaceGrinder = machineType === "Surface grinder";
  const hasEDM = processes.some((p) => p.startsWith("EDM"));
  const hasMilling = processes.includes("CNC milling (including vertical machining centre (VMC))");
  if (hasEDM && isVMC) {
    out.push("Check this pairing: EDM work cannot be done on a vertical machining centre (VMC) alone. An EDM machine is needed for that process.");
  }
  if (processes.includes("Mould making") && isSurfaceGrinder) {
    out.push("Check this pairing: mould making on a surface grinder alone is not a complete capability, since milling and EDM capacity would also be needed.");
  }
  if (processes.includes("Mould-base machining") && isSurfaceGrinder) {
    out.push("Check this pairing: mould-base machining on a surface grinder alone is not a complete capability, since milling capacity would also be needed.");
  }
  if (hasMilling && isLathe) {
    out.push("Check this pairing: CNC milling cannot be done on a CNC lathe alone. A milling machine is needed for that process.");
  }
  if (processes.includes("CNC turning") && isVMC) {
    out.push("Check this pairing: CNC turning cannot be done on a vertical machining centre (VMC) alone. A lathe or turning centre is needed for that process.");
  }
  return out;
}

export const CONDITIONS = [
  "As supplied",
  "Annealed",
  "Pre-hardened",
  "Heat-treated",
  "Condition not yet stated",
];
export const SIZE_BANDS = [
  "Up to 150 mm (longest dimension)",
  "150–300 mm",
  "300–600 mm",
  "Over 600 mm",
];
export const QUANTITY_BANDS = [
  "Single piece",
  "2–10 pieces",
  "11–100 pieces",
  "Over 100 pieces",
  "Repeat batches",
];
export const TOLERANCE_BANDS = [
  "General (±0.1 mm and looser)",
  "Precision (±0.02–0.05 mm)",
  "Fine (±0.01 mm or tighter)",
];
export const FEATURE_TYPES = [
  "Bore",
  "Shaft",
  "Flat surface",
  "Pocket",
  "Thread",
  "Profile",
  "Feature not yet specified",
];
export const FINISHES = [
  "Not specified",
  "Ra 3.2 µm",
  "Ra 1.6 µm",
  "Ra 0.8 µm",
  "Ra 0.4 µm or finer",
];
export const INSPECTION_METHODS = [
  "Micrometer",
  "Bore gauge",
  "Coordinate measuring machine (CMM)",
  "Surface plate and height gauge",
  "Not yet decided",
];
export const MACHINE_TYPES = [
  "Vertical machining centre (VMC), 3-axis",
  "Vertical machining centre (VMC), 4/5-axis",
  "CNC lathe / turning centre",
  "EDM wire-cut machine",
  "EDM sinker machine",
  "Surface grinder",
  "Cylindrical grinder",
  "Conventional mill or lathe",
  "Machine not yet listed",
];

/* D8 sample record: the SAME record on Home and Trust. */
export const SAMPLE = {
  heading: "ILLUSTRATIVE EXAMPLE: NOT A REAL MANUFACTURER",
  business: "Example Tool Room, Vasai East (illustrative example)",
  process: "CNC milling (including vertical machining centre (VMC))",
  serviceType: "New",
  machine: "Vertical machining centre (VMC), 3-axis, travel 800 × 500 × 500 mm",
  material: "Stainless steel, SS 316, heat-treated, mill certificate available: yes",
  size: "150–300 mm",
  quantity: "2–10 pieces",
  tolerance: "Precision (±0.02–0.05 mm) on a bore, finish Ra 1.6 µm",
  inspection: "Bore gauge, with micrometer check",
  evidence: "P0: supplier-declared (draft only)",
};
