export interface ITOCEntry {
  title: string;
  level: number;
  id: string;
  prefix: string;
};

export interface ITOC {
  entries: ITOCEntry[];
};

function romanize(x: number) {
  let lookup: {[key: string]: number} = { "M": 1000, "CM": 900, "D": 500, "CD": 400, "C": 100, "XC": 90, "L": 50, "XL": 40, "X": 10, "IX": 9, "V": 5, "IV": 4, "I": 1 }
  let roman = ''
  for (let key of Object.keys(lookup)) {
    let q = Math.floor(x / lookup[key]);
    x -= q * lookup[key];
    roman += key.repeat(q);
  }
  return roman;
}

export function getTOC(file: string): ITOC {
  const headers = file.split("\n").filter(l =>
    l.startsWith("# ") ||
    l.startsWith("## ") ||
    l.startsWith("### ") ||
    l.startsWith("#### ") ||
    l.startsWith("##### ") ||
    l.startsWith("###### ")
  );

  const entries = headers.map(h => {
    const title = h.split("# ")[1];
    return {
      title: title,
      level: Array.from(h).filter(c => c == "#").length,
      id: title.toLowerCase().replace(" ", "-"),
      prefix: "",
    };
  });

  entries.map(entry => {
    const num = entries.filter(other => other.level == entry.level).indexOf(entry) + 1;
    if (entry.level == 2) entry.prefix = romanize(num);
    if (entry.level == 3) entry.prefix = num.toString();
    if (entry.level == 4) entry.prefix = Array.from("abcdefghijklmnopqrstuvxyz")[num];
  })

  return { entries };
}