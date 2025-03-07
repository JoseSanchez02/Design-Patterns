class HamburgerBuilder {
    private readonly hamburger: any;

    constructor() {
        this.hamburger = {};
    }

    addBread(): HamburgerBuilder {
        this.hamburger.add('bread');
        return this;
    }

    addMeat(): HamburgerBuilder {
        this.hamburger.add('meat');
        return this;
    }

    addSauce(): HamburgerBuilder {
        this.hamburger.add('sauce');
        return this;
    }

    addCheese(): HamburgerBuilder {
        this.hamburger.add('cheese');
        return this;
    }

    addLettuce(): HamburgerBuilder {
        this.hamburger.add('lettuce');
        return this;
    }

    addTomato(): HamburgerBuilder {
        this.hamburger.add('tomato');
        return this;
    }

    build(): any {
        return this.hamburger;
    }
}

type Ingredient = 'bread' | 'meat' | 'sauce' | 'cheese' | 'lettuce' | 'tomato';

type Command = { top: Ingredient, bottom: Ingredient, middle: Ingredient[] };

function main(req: Command) {

    const builder = new HamburgerBuilder();
    switch (req.top) {
        case 'bread':
            builder.addBread();
            break;
        case 'meat':
            builder.addMeat();
            break;
        case 'sauce':
            builder.addSauce();
            break;
        case 'cheese':
            builder.addCheese();
            break;
        case 'lettuce':
            builder.addLettuce();
            break;
    }

    for (let i = 0; i < req.middle.length; i++) {
        switch (req.middle[i]) {
            case 'lettuce':
                builder.addLettuce();
                break;
            case 'tomato':
                builder.addTomato();
                break;
            case 'cheese':
                builder.addCheese();
                break;
            case 'sauce':
                builder.addSauce();
                break;
        }

    }
    switch (req.bottom) {
        case 'bread':
            builder.addBread();
            break;
        case 'meat':
            builder.addMeat();
            break;
        case 'sauce':
            builder.addSauce();
            break;
        case 'cheese':
            builder.addCheese();
            break;
    }
}

function makeCheeseBurger() {
    const builder = new HamburgerBuilder();
    builder.addBread().addCheese().addMeat().addCheese().addBread();
    return builder.build();
}

function makeVeggieBurger() {
    const builder = new HamburgerBuilder();
    builder.addBread().addLettuce().addTomato().addSauce().addBread();
    return builder.build();
}

function makeBurger() {
    const builder = new HamburgerBuilder();
    builder.addBread().addMeat().addSauce().addCheese().addBread();
    return builder.build();
}

main({ top: 'bread', middle: ['meat', 'cheese', 'lettuce', 'tomato'], bottom: 'bread' });