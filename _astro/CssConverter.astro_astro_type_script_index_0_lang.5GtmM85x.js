var e = {
    "color: red": `text-red-500`,
    "color: blue": `text-blue-500`,
    "color: green": `text-green-500`,
    "color: white": `text-white`,
    "color: black": `text-black`,
    "background-color: red": `bg-red-500`,
    "background-color: blue": `bg-blue-500`,
    "background-color: green": `bg-green-500`,
    "background-color: white": `bg-white`,
    "background-color: black": `bg-black`,
    "background-color: transparent": `bg-transparent`,
    "font-size: 12px": `text-xs`,
    "font-size: 14px": `text-sm`,
    "font-size: 16px": `text-base`,
    "font-size: 18px": `text-lg`,
    "font-size: 20px": `text-xl`,
    "font-size: 24px": `text-2xl`,
    "font-size: 32px": `text-3xl`,
    "padding: 4px": `p-1`,
    "padding: 8px": `p-2`,
    "padding: 12px": `p-3`,
    "padding: 16px": `p-4`,
    "padding: 20px": `p-5`,
    "padding: 24px": `p-6`,
    "padding: 32px": `p-8`,
    "padding-top: 8px": `pt-2`,
    "padding-top: 16px": `pt-4`,
    "padding-bottom: 8px": `pb-2`,
    "padding-bottom: 16px": `pb-4`,
    "padding-left: 8px": `pl-2`,
    "padding-left: 16px": `pl-4`,
    "padding-right: 8px": `pr-2`,
    "padding-right: 16px": `pr-4`,
    "margin: 0": `m-0`,
    "margin: 4px": `m-1`,
    "margin: 8px": `m-2`,
    "margin: 12px": `m-3`,
    "margin: 16px": `m-4`,
    "margin: 24px": `m-6`,
    "margin: auto": `m-auto`,
    "margin-top: 8px": `mt-2`,
    "margin-top: 16px": `mt-4`,
    "margin-bottom: 8px": `mb-2`,
    "margin-bottom: 16px": `mb-4`,
    "display: flex": `flex`,
    "display: grid": `grid`,
    "display: block": `block`,
    "display: inline-block": `inline-block`,
    "display: inline": `inline`,
    "display: none": `hidden`,
    "flex-direction: row": `flex-row`,
    "flex-direction: column": `flex-col`,
    "flex-wrap: wrap": `flex-wrap`,
    "justify-content: center": `justify-center`,
    "justify-content: flex-start": `justify-start`,
    "justify-content: flex-end": `justify-end`,
    "justify-content: space-between": `justify-between`,
    "justify-content: space-around": `justify-around`,
    "align-items: center": `items-center`,
    "align-items: flex-start": `items-start`,
    "align-items: flex-end": `items-end`,
    "align-items: stretch": `items-stretch`,
    "grid-template-columns: repeat(2, minmax(0, 1fr))": `grid-cols-2`,
    "grid-template-columns: repeat(3, minmax(0, 1fr))": `grid-cols-3`,
    "grid-template-columns: repeat(4, minmax(0, 1fr))": `grid-cols-4`,
    "gap: 4px": `gap-1`,
    "gap: 8px": `gap-2`,
    "gap: 12px": `gap-3`,
    "gap: 16px": `gap-4`,
    "gap: 24px": `gap-6`,
    "text-align: center": `text-center`,
    "text-align: left": `text-left`,
    "text-align: right": `text-right`,
    "text-align: justify": `text-justify`,
    "font-weight: bold": `font-bold`,
    "font-weight: normal": `font-normal`,
    "font-weight: 500": `font-medium`,
    "font-weight: 600": `font-semibold`,
    "font-weight: 700": `font-bold`,
    "font-style: italic": `italic`,
    "text-transform: uppercase": `uppercase`,
    "text-transform: lowercase": `lowercase`,
    "text-decoration: underline": `underline`,
    "border-radius: 2px": `rounded-sm`,
    "border-radius: 4px": `rounded-md`,
    "border-radius: 8px": `rounded-lg`,
    "border-radius: 12px": `rounded-xl`,
    "border-radius: 16px": `rounded-2xl`,
    "border-radius: 50%": `rounded-full`,
    "border-style: solid": `border-solid`,
    "border-width: 1px": `border`,
    "border-width: 2px": `border-2`,
    "border-width: 4px": `border-4`,
    "width: 100%": `w-full`,
    "height: 100%": `h-full`,
    "width: auto": `w-auto`,
    "height: auto": `h-auto`,
    "box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1)": `shadow-sm`,
    "box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1)": `shadow`,
    "box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1)": `shadow-md`,
    "box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1)": `shadow-lg`,
    "transition: all 0.2s": `transition-all duration-200`,
    "cursor: pointer": `cursor-pointer`,
    "opacity: 0": `opacity-0`,
    "opacity: 0.5": `opacity-50`,
    "opacity: 1": `opacity-100`,
  },
  t = document.getElementById(`css-input`),
  n = document.getElementById(`tailwind-output`),
  r = document.getElementById(`convert-btn`),
  i = document.getElementById(`copy-btn`);
(r?.addEventListener(`click`, () => {
  let r = t.value.trim();
  if (!r) {
    n.value = `// Plak eerst wat CSS code in het linker venster!`;
    return;
  }
  let i = r.split(/[;\n]/),
    a = [];
  (i.forEach((t) => {
    let n = t.replace(/[{}]/g, ``).trim().toLowerCase();
    if (n)
      if (e[n]) a.push(e[n]);
      else if (n.startsWith(`padding:`)) {
        let e = n.replace(`padding:`, ``).trim();
        a.push(`p-[${e}]`);
      } else if (n.startsWith(`padding-top:`)) {
        let e = n.replace(`padding-top:`, ``).trim();
        a.push(`pt-[${e}]`);
      } else if (n.startsWith(`padding-bottom:`)) {
        let e = n.replace(`padding-bottom:`, ``).trim();
        a.push(`pb-[${e}]`);
      } else if (n.startsWith(`padding-left:`)) {
        let e = n.replace(`padding-left:`, ``).trim();
        a.push(`pl-[${e}]`);
      } else if (n.startsWith(`padding-right:`)) {
        let e = n.replace(`padding-right:`, ``).trim();
        a.push(`pr-[${e}]`);
      } else if (n.startsWith(`margin:`)) {
        let e = n.replace(`margin:`, ``).trim();
        a.push(`m-[${e}]`);
      } else if (n.startsWith(`margin-top:`)) {
        let e = n.replace(`margin-top:`, ``).trim();
        a.push(`mt-[${e}]`);
      } else if (n.startsWith(`margin-bottom:`)) {
        let e = n.replace(`margin-bottom:`, ``).trim();
        a.push(`mb-[${e}]`);
      } else if (n.startsWith(`background-color:`)) {
        let e = n.replace(`background-color:`, ``).trim();
        a.push(`bg-[${e}]`);
      } else if (n.startsWith(`color:`)) {
        let e = n.replace(`color:`, ``).trim();
        a.push(`text-[${e}]`);
      } else if (n.startsWith(`font-size:`)) {
        let e = n.replace(`font-size:`, ``).trim();
        a.push(`text-[${e}]`);
      } else if (n.startsWith(`width:`)) {
        let e = n.replace(`width:`, ``).trim();
        a.push(`w-[${e}]`);
      } else if (n.startsWith(`height:`)) {
        let e = n.replace(`height:`, ``).trim();
        a.push(`h-[${e}]`);
      } else if (n.startsWith(`border-radius:`)) {
        let e = n.replace(`border-radius:`, ``).trim();
        a.push(`rounded-[${e}]`);
      } else a.push(`/* Niet herkend: ${n} */`);
  }),
    a.length > 0
      ? (n.value = a.join(` `))
      : (n.value = `// Kon geen herkenbare CSS regels vinden.`));
}),
  i?.addEventListener(`click`, async () => {
    let e = n.value.trim();
    if (!(!e || e.startsWith(`//`)))
      try {
        await navigator.clipboard.writeText(e);
        let t = i.innerHTML;
        ((i.innerHTML = `<span>Gekopieerd! ✔️</span>`),
          i.classList.add(`bg-green-700`, `border-green-600`, `text-white`),
          setTimeout(() => {
            ((i.innerHTML = t),
              i.classList.remove(
                `bg-green-700`,
                `border-green-600`,
                `text-white`,
              ));
          }, 2e3));
      } catch (e) {
        console.error(`Kopiëren mislukt: `, e);
      }
  }));
