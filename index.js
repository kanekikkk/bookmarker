function apple(take){

    const app = 'wa';
    return{

        water: take

    }

}

const a = apple('water');

console.log(a.water);
console.log(a.app);

const b = apple('ball');

console.log(b.water);