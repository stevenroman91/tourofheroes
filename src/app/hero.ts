export class Hero {
    private static ID_COUNT = 10;

    id: number;
    name: string;

    constructor(name?: string) {
        this.id = Hero.ID_COUNT++;
        this.name = name;
    }
}
