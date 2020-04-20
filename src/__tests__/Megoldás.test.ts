import Megoldás from "../Megoldás";

describe("Megoldás osztály unit tesztek:", () => {
    const instance: Megoldás = new Megoldás("musor.txt");
    it("megoldás osztály ellenőrzés", async () => {
        expect(instance).toBeInstanceOf(Megoldás);
    });
    it("Eric Clapton ellenőrzés", async () => {
        expect(instance.EricClapton).toBe(155);
    });
});
