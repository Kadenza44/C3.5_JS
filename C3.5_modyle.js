class ElectricalAppliance{
    constructor(name){
        this.voltage = 220
        this.name = name
    }

    on(time){
        console.log(`Прибор ${this.name} подключен к сети ${this.voltage}V на ${time} минут`)
    }

    off(){
        console.log(`Прибор ${this.name} отключен от сети ${this.voltage}V`)
    }
}

const elektroBroom = new ElectricalAppliance('Электровеник')
elektroBroom.setSpeed = function(speed){
    console.log(`Электровеник старается на ${speed}%`)
}
elektroBroom.mode = 'Простое подметание'


const lamp = new ElectricalAppliance('Настольная лампа')
lamp.setBright = function(brith = 0, colorGlow = 'white'){
    console.log(`Яркость свечения = ${brith}%\nЦвет свечения ${colorGlow}`)
    
}

elektroBroom.on(60)
elektroBroom.setSpeed(99)
console.log(`режим работы электровеника: ${elektroBroom.mode}`)
elektroBroom.off()

console.log()

lamp.on(5)
lamp.setBright(50, 'green')
lamp.off()



