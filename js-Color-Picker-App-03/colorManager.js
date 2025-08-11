
export default class ColorManager{
    constructor(defaultColor = "#ffffff"){
        this.color = defaultColor;
    }

    setColor(newColor) {
        this.color = newColor;
    }

    getColor() {
        return this.color;
    }

    generateRandomColor(){
        const randomHex = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        this.color = randomHex;
        return randomHex;
    }
}