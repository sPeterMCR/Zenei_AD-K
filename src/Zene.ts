export default class Zene {
    private _radiosorszam: number;
    private _hosszperc: number;
    private _hosszmperc: number;
    private _zeneszam: string;

    public constructor(sor: string) {
        const segéd: string[] = sor.split(" ", 4);
        this._radiosorszam = parseInt(segéd[0]);
        this._hosszperc = parseInt(segéd[1]);
        this._hosszmperc = parseInt(segéd[2]);
        this._zeneszam = segéd[3];
    }

    public get RadiosorSzam(): number {
        return this._radiosorszam;
    }
    public get ZeneSzam(): string {
        return this._zeneszam;
    }
    public get HosszPerc(): number {
        return this._hosszperc;
    }
    public get HosszMásodperc(): number {
        return this._hosszmperc;
    }
}
