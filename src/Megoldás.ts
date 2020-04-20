import Zene from "./Zene";
import fs from "fs";

export default class Megoldás {
    private _Zenék: Zene[] = [];

    public constructor(forrás: string) {
        fs.readFileSync(forrás)
            .toString()
            .split("\n")
            .forEach(i => {
                const aktualsor: string = i.trim();
                if (aktualsor.length > 0) {
                    this._Zenék.push(new Zene(aktualsor));
                }
            });
    }

    public get ZenékRádiónként(): Map<number, number> {
        const Statisztika: Map<number, number> = new Map<number, number>();
        this._Zenék.forEach(i => {
            if (Statisztika.has(i.RadiosorSzam)) {
                Statisztika.set(i.RadiosorSzam, (Statisztika.get(i.RadiosorSzam) as number) + 1);
            } else {
                Statisztika.set(i.RadiosorSzam, 1);
            }
        });
        return Statisztika;
    }

    public get EricClapton(): number {
        let idő = 0;
        this._Zenék.forEach(i => {
            if (i.RadiosorSzam == 1) {
                if (i.ZeneSzam == "Eric") {
                    idő = i.HosszPerc * 60 + i.HosszMásodperc;
                }
            }
        });
        return idő;
    }
}
