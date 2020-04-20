import Zene from "../Zene";

describe("Zeneosztály unit tesztek:", () => {
    const instance: Zene = new Zene("1 3 27 Eric Clapton:Willie And The Hand Jive");
    it("zene osztály ellenőrzés", async () => {
        expect(instance).toBeInstanceOf(Zene);
    });
    it("Rádiósorszám :", async () => {
        expect(instance.RadiosorSzam).toBe(1);
    });
    it("Zenehossza percben :", async () => {
        expect(instance.HosszPerc).toBe(3);
    });
    it("Zenehossza másodpercben :", async () => {
        expect(instance.HosszMásodperc).toBe(27);
    });
    it("Előadó :", async () => {
        expect(instance.ZeneSzam).toBe("Eric");
    });
});
