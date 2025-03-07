interface level {
    platform: any;
    weather: any;
    boss?: any;
    player: any;

    fight()
    move()
    jump()
}

class FireLevel implements level {
    platform: any;
    weather: any;
    boss: any;
    player: any;

    fight() {
        this.player.health -= this.boss.damage;
        console.log('Fighting');
    }
    move() {
        if(this.platform === 'lava') {
        this.player.health -= this.weather.damage;
        console.log('Moving');
        }
    }
    jump() {
        console.log('Jumping');
    }
}

class IceLevel implements level {
    platform: any;
    weather: any;
    boss: any;
    player: any;

    fight() {
        this.player.mobility -= this.boss.damage;
        console.log('Fighting');
    }
    move() {
        const distance = 5;
        if (this.platform === 'ice'){
            this.player.position += distance + this.weather.speed;
        }
        this.player.position += distance;
    }
    jump() {
        this.player.health -= this.weather.damage;
    }
}

function main() {
    let type: "fire" | "ice";
    let level: level;
    switch (type) {
        case 'fire':
            level = new FireLevel();
            break;
        case 'ice':
            level = new IceLevel();
            break;
    }
    level.fight();
    level.move();
    level.jump();
}

main();